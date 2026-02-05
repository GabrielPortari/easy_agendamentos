import AppointmentCard from '@/src/components/appointment_card/appointment_card';
import NameChangeModal from '@/src/components/name_change_modal/name_change_modal';
import NewAppointmentModal from '@/src/components/new_appointment_modal/new_appointment_modal';
import TodayAppointment from '@/src/components/today_appointments/today_appointments_card';
import { themes } from '@/src/global/themes';
import { Appointment } from '@/src/models/appointment';
import { createAppointment, getAppointments, getLastFinishedAppointment, getNextOpenAppointment } from '@/src/storage/appointments.repo';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
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
	
	async function loadAppointmentsData(){ 
		const all = await getAppointments();
		setAppointments(all);
		const next = await getNextOpenAppointment();
		setNextOpenAppointment(next);
		const last = await getLastFinishedAppointment();
		setLastFinishedAppointment(last);
	}
	
	useEffect(() => {
		(async () => {
			loadAppointmentsData();
		})()
	}, []);

	async function handleAddAppointment(data: {client: string, date: Date, value?: number}){
		try{
			const newAppointment = {
				clientName: data.client,
				date: data.date.toISOString(),
				value: data.value ?? 0,
				status: 'pending' as const
			};
			await createAppointment(newAppointment);
			await loadAppointmentsData();
			setShowModal(false);
		}catch(error){
			console.warn("Erro ao criar agendamento", error);
		}
	}

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
						date={nextOpenAppointment?.date ?? ""}
						client={nextOpenAppointment?.clientName ?? ""}
						price={nextOpenAppointment ? `R$ ${nextOpenAppointment.value.toFixed(2)}` : ""}
						type="next"
					/>

					<AppointmentCard
						date={lastFinishedAppointment?.date ?? ""}
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
				onAdd={(newAppointment) => {
					handleAddAppointment(newAppointment);
				}}
			/>

			<NameChangeModal
				visible={showNameModal}
				initialValue={username}
				onClose={() => setShowNameModal(false)}
				onSave={(newName) => { setUsername(newName); setShowNameModal(false); }}
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




