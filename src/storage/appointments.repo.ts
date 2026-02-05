import { Appointment } from "../models/appointment";
import { executeSql } from "./database";

export async function createAppointment(appointment: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>){
    `INSERT INTO appointments ( date, clientName, value, status) VALUES (?, ?, ?, ?);`;
    const result = await executeSql(
        `INSERT INTO appointments ( date, clientName, value, status) VALUES (?, ?, ?, ?);`,
        [appointment.date, appointment.clientName, appointment.value ?? 0, appointment.status]
    );
    return result.insertId || null;
}

export async function getAppointments(): Promise<Appointment[]>{
    const result =  await executeSql(`SELECT * FROM appointments ORDER BY date DESC;`);
    const appointments: Appointment[] = [];
    for(let i = 0; i < result.rows.length; i++) appointments.push(result.rows.item(i));
    return appointments;
}

export async function getAppointmentById(id: number): Promise<Appointment | null>{
    const result =  await executeSql(`SELECT * FROM appointments WHERE id = ?;`, [id]);
    if(result.rows.length === 0) return null;
    return result.rows.item(0);
}

export async function updateAppointment(appointment: Appointment){
    await executeSql(
        `UPDATE appointments SET date = ?, clientName = ?, value = ?, status = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?;`,
        [appointment.date, appointment.clientName, appointment.value ?? 0, appointment.status, appointment.id]
    );
}

export async function deleteAppointment(id: number){
    await executeSql(`DELETE FROM appointments WHERE id = ?;`, [id]);
}

export async function getNextOpenAppointment(): Promise<Appointment | null>{
    const result =  await executeSql(`SELECT * FROM appointments WHERE status = 'pending' ORDER BY date ASC LIMIT 1;`);
    if(result.rows.length === 0) return null;
    return result.rows.item(0);
}

export async function getLastFinishedAppointment(): Promise<Appointment | null>{
    const result =  await executeSql(`SELECT * FROM appointments WHERE status IN ('done', 'canceled') ORDER BY date DESC LIMIT 1;`);
    if(result.rows.length === 0) return null;
    return result.rows.item(0);
}