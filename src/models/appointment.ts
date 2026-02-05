export interface Appointment {
    id?: number;
    date: string;
    clientName: string;
    value: number;
    status: 'done' | 'canceled' | 'pending';
    createdAt?: string;
    updatedAt?: string;
}