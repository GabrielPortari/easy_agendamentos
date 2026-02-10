import { Appointment } from '../models/appointment';
import { openDatabase } from './database';

export async function createAppointment(payload: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>): Promise<number> {
  const db = await openDatabase();
  const now = new Date().toISOString();
  const result = await db.runAsync(
    `INSERT INTO appointments (date, clientName, value, status, createdAt, updatedAt) VALUES ($date, $clientName, $value, $status, $createdAt, $updatedAt)`,
    { $date: payload.date, $clientName: payload.clientName, $value: payload.value, $status: payload.status ?? 'pending', $createdAt: now, $updatedAt: now }
  );
  return result.lastInsertRowId;
}

export async function getAppointmentById(id: number): Promise<Appointment | null> {
  const db = await openDatabase();
  const row = await db.getFirstAsync<Appointment>('SELECT * FROM appointments WHERE id = ?', id);
  return row ?? null;
}

export async function getAllAppointments(): Promise<Appointment[]> {
  const db = await openDatabase();
  const rows = await db.getAllAsync<Appointment>('SELECT * FROM appointments ORDER BY date DESC');
  return rows;
}

export async function updateAppointment(id: number, fields: Partial<Appointment>): Promise<number> {
  if (!fields || Object.keys(fields).length === 0) return 0;
  const db = await openDatabase();
  const setParts: string[] = [];
  const params: Record<string, any> = {};

  if (fields.date !== undefined) { setParts.push('date = $date'); params.$date = fields.date; }
  if (fields.clientName !== undefined) { setParts.push('clientName = $clientName'); params.$clientName = fields.clientName; }
  if (fields.value !== undefined) { setParts.push('value = $value'); params.$value = fields.value; }
  if (fields.status !== undefined) { setParts.push('status = $status'); params.$status = fields.status; }

  const now = new Date().toISOString();
  setParts.push('updatedAt = $updatedAt');
  params.$updatedAt = now;
  params.$id = id;

  const sql = `UPDATE appointments SET ${setParts.join(', ')} WHERE id = $id`;
  const result = await db.runAsync(sql, params);
  return result.changes;
}

export async function deleteAppointment(id: number): Promise<number> {
  const db = await openDatabase();
  const result = await db.runAsync('DELETE FROM appointments WHERE id = ?', id);
  return result.changes;
}

export async function getLastAppointment(): Promise<Appointment | null> {
  const db = await openDatabase();
  const row = await db.getFirstAsync<Appointment>(
    'SELECT * FROM appointments WHERE status IN ($s1, $s2) ORDER BY date DESC LIMIT 1',
    { $s1: 'done', $s2: 'canceled' }
  );
  return row ?? null;
}

export async function getNextAppointment(): Promise<Appointment | null> {
  const db = await openDatabase();
  const row = await db.getFirstAsync<Appointment>(
    'SELECT * FROM appointments WHERE status = $status ORDER BY date ASC LIMIT 1',
    { $status: 'pending' }
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
