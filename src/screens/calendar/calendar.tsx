import SearchContainer from '@/src/components/search_container/search_container';
import ShowAppointmentCard from '@/src/components/show_appointment_card/show_appointment_card';
import TotalAppointments from '@/src/components/total_appointments/total_appointments';
import { Appointment } from '@/src/models/appointment';
import { getAllAppointments, getLastAppointment, getNextAppointment, updateAppointment } from '@/src/storage/appointments.repo';
import { formatDateAppointmentCard, formatDateTodayAppointment } from '@/src/utils/date_formatter';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export default function Calendar() {

	const [nextOpenAppointment, setNextOpenAppointment] = useState<Appointment | null>(null);
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [query, setQuery] = useState('');
	const [orderBy, setOrderBy] = useState<'date'|'name'|'value'>('date');
	const [orderDirection, setOrderDirection] = useState<'asc'|'desc'>('asc');

	async function loadAppointments() {
		try {
			const [all, next, last] = await Promise.all([
				getAllAppointments(),
				getNextAppointment(),
				getLastAppointment(),
			]);
			setAppointments(all ?? []);
			setNextOpenAppointment(next ?? null);
		} catch (err) {
			// ignore for now or add a logger
			console.warn('Error loading appointments', err);
		}
	}
	useFocusEffect(
		React.useCallback(() => {
			(async () => {
				await loadAppointments();
			})();
		}, [])
	);


	return (
		<View style={styles.container}>
			<ScrollView style={{ flex: 1 }}>
				<View style={styles.boxTop}>
					<Text style={styles.title}>Calendário de agendamentos</Text>
					<Text style={styles.subtitle}>Próximos agendamentos a partir de {nextOpenAppointment ? formatDateAppointmentCard(nextOpenAppointment.date) : ''}</Text>
				</View>

				<SearchContainer query={query} onQueryChange={setQuery} orderBy={orderBy} onOrderByChange={setOrderBy} orderDirection={orderDirection} onOrderDirectionChange={setOrderDirection} />

				{(() => {
					const q = (query ?? '').trim().toLowerCase();
				let list = appointments.filter((a) => a.status === 'pending');
				if (q) {
					list = list.filter((a) => (a.clientName ?? '').toLowerCase().includes(q));
				}
					const sorted = list;
					const dir = orderDirection === 'asc' ? 1 : -1;
					sorted.sort((x, y) => {
						if (orderBy === 'date') {
							return (new Date(x.date).getTime() - new Date(y.date).getTime()) * dir;
						}
						if (orderBy === 'name') {
							return String(x.clientName ?? '').localeCompare(String(y.clientName ?? '')) * dir;
						}
						// value
						return ((x.value ?? 0) - (y.value ?? 0)) * dir;
					});
					return sorted.map((a, idx) => (
						<ShowAppointmentCard
							key={a.id ?? idx}
							title={formatDateAppointmentCard(a.date)}
							time={formatDateTodayAppointment(a.date)}
							client={a.clientName}
							price={`R$ ${a.value.toFixed(2)}`}
							status={a.status}
							onChangeStatus={async (newStatus) => {
								if (!a.id) return;
								try {
									await updateAppointment(a.id, { status: newStatus });
									await loadAppointments();
								} catch (err) {
									console.warn('Failed to change status', err);
								}
							}}
						/>
					));
				})()}

				<TotalAppointments count={appointments.filter(a => a.status === 'pending').length} total={`R$ ${appointments.filter(a => a.status === 'pending').reduce((s, it) => s + (it.value ?? 0), 0).toFixed(2)}`} />
			</ScrollView>
		</View>
	);
}


