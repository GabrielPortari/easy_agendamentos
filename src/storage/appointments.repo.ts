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
    const row = result.rows;length;
    const appointments: Appointment[] = [];
    for(let i = 0; i < row; i++) appointments.push(row.item(i));
    return appointments;
}

export async function getAppointmentById(id: number): Promise<Appointment | null>{
    const result =  await executeSql(`SELECT * FROM appointments WHERE id = ?;`, [id]);
    const row = result.rows.length;
    if(row.length === 0) return null;
    return row.item(0);
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