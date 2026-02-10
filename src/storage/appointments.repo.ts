import { Appointment } from '../models/appointment';
import { openDatabase } from './database';

export async function createAppointment(payload: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>): Promise<number> {
  const db = await openDatabase();
  const now = new Date().toISOString();
  const result = await db.runAsync(
    'INSERT INTO appointments (date, clientName, value, status, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)',
    [payload.date, payload.clientName, payload.value, payload.status ?? 'pending', now, now]
  );
  return result.lastInsertRowId;
}

export async function getAppointmentById(id: number): Promise<Appointment | null> {
  const db = await openDatabase();
  const row = await db.getFirstAsync<Appointment>('SELECT * FROM appointments WHERE id = ?', [id]);
  return row ?? null;
}

export async function getAllAppointments(): Promise<Appointment[]> {
  const db = await openDatabase();
  const rows = await db.getAllAsync<Appointment>('SELECT * FROM appointments ORDER BY date DESC');
  return rows;
}

export async function updateAppointment(id: number, fields: Partial<Appointment>): Promise<number> {
  if (!id || !fields || Object.keys(fields).length === 0) return 0;
  
  const db = await openDatabase();
  
  // Get current appointment data
  const current = await db.getFirstAsync<Appointment>('SELECT * FROM appointments WHERE id = ?', [id]);
  if (!current) return 0;
  
  // Merge with new fields
  const updated = {
    date: fields.date !== undefined ? fields.date : current.date,
    clientName: fields.clientName !== undefined ? fields.clientName : current.clientName,
    value: fields.value !== undefined ? fields.value : current.value,
    status: fields.status !== undefined ? fields.status : current.status,
    updatedAt: new Date().toISOString(),
  };
  
  const result = await db.runAsync(
    'UPDATE appointments SET date = ?, clientName = ?, value = ?, status = ?, updatedAt = ? WHERE id = ?',
    [updated.date, updated.clientName, updated.value, updated.status, updated.updatedAt, id]
  );
  
  return result.changes;
}

export async function deleteAppointment(id: number): Promise<number> {
  const db = await openDatabase();
  const result = await db.runAsync('DELETE FROM appointments WHERE id = ?', [id]);
  return result.changes;
}

export async function getLastAppointment(): Promise<Appointment | null> {
  const db = await openDatabase();
  const row = await db.getFirstAsync<Appointment>(
    'SELECT * FROM appointments WHERE status IN (?, ?) ORDER BY date DESC LIMIT 1',
    ['done', 'canceled']
  );
  return row ?? null;
}

export async function getNextAppointment(): Promise<Appointment | null> {
  const db = await openDatabase();
  const row = await db.getFirstAsync<Appointment>(
    'SELECT * FROM appointments WHERE status = ? ORDER BY date ASC LIMIT 1',
    ['pending']
  );
  return row ?? null;
}

export default {
  createAppointment,
  getAppointmentById,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
  getLastAppointment,
  getNextAppointment,
};
