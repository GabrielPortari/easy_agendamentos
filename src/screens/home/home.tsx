import AppointmentCard from '@/src/components/appointment_card/appointment_card';
import NameChangeModal from '@/src/components/name_change_modal/name_change_modal';
import NewAppointmentModal from '@/src/components/new_appointment_modal/new_appointment_modal';
import TodayAppointment from '@/src/components/today_appointments/today_appointments_card';
import { themes } from '@/src/global/themes';
import { Appointment } from '@/src/models/appointment';
import {
	createAppointment,
	getAllAppointments,
	getLastAppointment,
	getNextAppointment,
} from '@/src/storage/appointments.repo';
import { getUsernameStorage, setUsernameStorage } from '@/src/storage/user.repo';
import { formatDateAppointmentCard } from '@/src/utils/date_formatter';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home() {

	const [showModal, setShowModal] = useState(false);
	const [username, setUsername] = useState('user_name');
	const [showNameModal, setShowNameModal] = useState(false);
	const [tempName, setTempName] = useState(username);

	const [nextOpenAppointment, setNextOpenAppointment] = useState<Appointment | null>(null);
	const [lastFinishedAppointment, setLastFinishedAppointment] = useState<Appointment | null>(null);
	const[appointments, setAppointments] = useState<Appointment[]>([]);

	async function loadAppointments() {
		try {
			const [all, next, last] = await Promise.all([
				getAllAppointments(),
				getNextAppointment(),
				getLastAppointment(),
			]);
			setAppointments(all ?? []);
			setNextOpenAppointment(next ?? null);
			setLastFinishedAppointment(last ?? null);
		} catch (err) {
			// ignore for now or add a logger
			console.warn('Error loading appointments', err);
		}
	}

	React.useEffect(() => {
		(async () => {
			const stored = await getUsernameStorage();
			if (stored) setUsername(stored);
		})();
	}, []);

	useFocusEffect(
		React.useCallback(() => {
			(async () => {
				await loadAppointments();
			})();
		}, [])
	);
	


	return (
		<View style={styles.container}>
			<ScrollView style={{ flex: 1 }} contentContainerStyle={{paddingBottom: 120 }}>
				<View style={styles.boxTop}>
					<View style={styles.welcomeRow}>
						<Text style={[styles.welcomeText, { flex: 6 }]}>Bem vindo, <Text style={{ color: themes.colors.primary }}>{username}</Text></Text>
						<TouchableOpacity style={{ padding: 4, flex: 1 }} onPress={() => { setTempName(username); setShowNameModal(true); }}>
							<MaterialIcons name="edit" size={28} color={themes.colors.gray} />
						</TouchableOpacity>
					</View>
					<Text style={styles.infoAppointments}>Você possui <Text style={{ color: themes.colors.primary }}>{appointments.length} agendamentos</Text> hoje</Text>
				</View>

				<View style={styles.boxMiddle}>

					<AppointmentCard
						date={nextOpenAppointment ? formatDateAppointmentCard(nextOpenAppointment?.date) : ""}
						client={nextOpenAppointment?.clientName ?? ""}
						price={nextOpenAppointment ? `R$ ${nextOpenAppointment.value.toFixed(2)}` : ""}
						type="next"
					/>

					<AppointmentCard
						date={lastFinishedAppointment?.date ? formatDateAppointmentCard(lastFinishedAppointment.date) : ""}
						client={lastFinishedAppointment?.clientName ?? ""}
						price={lastFinishedAppointment ? `R$ ${lastFinishedAppointment.value.toFixed(2)}` : ""}
						type="previous"
						status="done"
					/>

					<TodayAppointment appointments={appointments} />

				</View>
			</ScrollView>

			<NewAppointmentModal
				visible={showModal}
				onClose={() => setShowModal(false)}
				onAdd={async (newAppointment: any) => {
					console.log('Adding appointment', newAppointment);
					try {
						// Normalize modal fields to DB shape
						const clientName = newAppointment.client ?? newAppointment.clientName ?? newAppointment.name;
						const rawPrice = newAppointment.price ?? newAppointment.value ?? '0';
						const value = typeof rawPrice === 'string' ? parseFloat(rawPrice.replace(',', '.')) : Number(rawPrice);
						const dateInput = newAppointment.date ?? newAppointment.datetime ?? new Date().toISOString();
						const date = typeof dateInput === 'string' ? new Date(dateInput).toISOString() : new Date(dateInput).toISOString();

						if (!clientName) throw new Error('clientName is required');

						const payload = {
							date,
							clientName,
							value: isNaN(value) ? 0 : value,
							status: newAppointment.status ?? 'pending',
						};

						await createAppointment(payload);
						await loadAppointments();
						setShowModal(false);
					} catch (err) {
						console.warn('Failed to create appointment', err);
					}
				}}
			/>

			<NameChangeModal
				visible={showNameModal}
				initialValue={username}
				onClose={() => setShowNameModal(false)}
				onSave={async (newName: string) => { await setUsernameStorage(newName); setUsername(newName); setShowNameModal(false); }}
			/>

			<TouchableOpacity
				activeOpacity={0.65}
				style={styles.fab}
				onPress={() => {
					setShowModal(true);
				}}
			>
				<MaterialIcons name="add" size={32} color="#fff" />
			</TouchableOpacity>
		</View>
	);
}




