function toDate(input: Date | string): Date {
    if (input instanceof Date) return input;
    const d = new Date(input);
    if (Number.isNaN(d.getTime())) {
        // fallback: return current date if parsing fails
        return new Date();
    }
    return d;
}

export function formatDateAppointmentCard(date: Date | string): string {
    const d = toDate(date);
    return d.toLocaleString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function formatDateTodayAppointment(date: Date | string): string {
    const d = toDate(date);
    return d.toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

export function isSameDay(input: string | Date, other: Date = new Date()): boolean {
    const d = input instanceof Date ? input : new Date(input);
    if (Number.isNaN(d.getTime())) return false;
    return d.getFullYear() === other.getFullYear() && d.getMonth() === other.getMonth() && d.getDate() === other.getDate();
}