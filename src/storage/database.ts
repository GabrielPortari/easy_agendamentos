import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(__DEV__);
SQLite.enablePromise(true);

const DB_NAME = 'easy_appointments.db';
let dbInstance: SQLite.SQLiteDatabase | null = null;

export async function openDB(): Promise<SQLite.SQLiteDatabase> {
    if (dbInstance) {
        return dbInstance;
    }
    dbInstance = await SQLite.openDatabase({ name: DB_NAME, location: 'default' });
    return dbInstance;    
}

export async function closeDB(): Promise<void> {
    if (!dbInstance) return;
    await dbInstance.close();
    dbInstance = null;
}

export async function executeSql(sql: string, params: any[] = []){
    const db = await openDB();
    const [result] = await db.executeSql(sql, params);
    await closeDB();
    return result;
}