import AppointmentCard from '@/src/components/appointment_card/appointment_card';
import NameChangeModal from '@/src/components/name_change_modal/name_change_modal';
import NewAppointmentModal from '@/src/components/new_appointment_modal/new_appointment_modal';
import TodayAppointment from '@/src/components/today_appointments/today_appointments_card';
import { themes } from '@/src/global/themes';
import { formatDateAppointmentCard } from '@/src/utils/date_formatter';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home() {

	const [showModal, setShowModal] = useState(false);
	const [username, setUsername] = useState('user_name');
	const [showNameModal, setShowNameModal] = useState(false);
	const [tempName, setTempName] = useState(username);

	const appointments = [
		{
			id: 1,
			date: new Date(new Date().setDate(new Date().getDate() + 1)),
			client: "Rafaela Albuquerque",
			price: "R$ 200,00",
			status: 'open'
		},
		{
			id: 2,
			date: new Date(new Date().setDate(new Date().getDate() + 1)),
			client: "Cleiton Santos",
			price: "R$ 140,00",
			status: 'open'
		},
		{
			id: 3,
			date: new Date(),
			client: "José Moraes",
			price: "R$ 150,00",
			status: 'open'
		},
		{
			id: 4,
			date: new Date(new Date().setDate(new Date().getDate() - 1)),
			client: "João da Silva",
			price: "R$ 100,00",
			status: 'open'
		},
		{
			id: 5,
			date: new Date(new Date().setDate(new Date().getDate() - 1)),
			client: "Maria Oliveira",
			price: "R$ 80,00",
			status: 'done'
		},
	]
	return (
		<View style={styles.container}>
			<ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 10, paddingBottom: 120 }}>
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
						date={formatDateAppointmentCard(appointments[2].date)}
						client={appointments[2].client}
						price={appointments[2].price}
						type="next"
					/>

					<AppointmentCard
						date={formatDateAppointmentCard(appointments[4].date)}
						client={appointments[4].client}
						price={appointments[4].price}
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
					console.log(newAppointment);
					setShowModal(false);
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




