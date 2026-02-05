import { executeSql } from "./database";

export async function initAppointmentsTable() {
    await executeSql(
        `CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            date TEXT NOT NULL,
            clientName TEXT NOT NULL,
            value REAL NOT NULL,
            status TEXT NOT NULL,
            createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
            updatedAt TEXT
        );`
    );
}