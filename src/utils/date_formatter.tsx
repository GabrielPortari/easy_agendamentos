export function formatDateAppointmentCard(date: Date): string {
    return date.toLocaleString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function formatDateTodayAppointment(date: Date): string {
    return date.toLocaleString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}