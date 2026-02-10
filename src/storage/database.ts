import * as SQLite from 'expo-sqlite';

export const DB_NAME = 'easy_agendamentos.db';

export async function openDatabase(): Promise<SQLite.SQLiteDatabase> {
  const db = await SQLite.openDatabaseAsync(DB_NAME);
  try {
    await migrateDbIfNeeded(db);
  } catch (err) {
    // If migration fails, log and still return the DB so caller can handle errors.
    // Migration is idempotent; errors here usually indicate underlying native issues.
    // eslint-disable-next-line no-console
    console.warn('migrateDbIfNeeded error', err);
  }
  return db;
}

export async function migrateDbIfNeeded(db: SQLite.SQLiteDatabase) {
  const DATABASE_VERSION = 1;

  const result = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  let currentDbVersion = result?.user_version ?? 0;
  if (currentDbVersion >= DATABASE_VERSION) return;

  if (currentDbVersion === 0) {
    await db.execAsync(`PRAGMA journal_mode = WAL;`);
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY NOT NULL,
        date TEXT NOT NULL,
        clientName TEXT NOT NULL,
        value REAL NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        createdAt TEXT,
        updatedAt TEXT
      );
    `);
    currentDbVersion = 1;
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

export default {
  DB_NAME,
  openDatabase,
  migrateDbIfNeeded,
};
