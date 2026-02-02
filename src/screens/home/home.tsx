import AppointmentCard from '@/src/components/appointment_card/appointment_card';
import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
	const appointments = [
		{
			date: "02 de fev. de 2026 às 10:00",
			client: "João da Silva",
			price: "R$ 100,00",
			status: 'open'
		},
		{
			date: "01 de fev. de 2026 às 14:30",
			client: "Maria Oliveira",
			price: "R$ 80,00",
			status: 'done'
		},
	]
	return (
		<View style={styles.container}>
			<View style={styles.boxTop}>
                <View style={styles.welcomeRow}>
                    <Text style={styles.welcomeText}>Bem vindo, <Text style={{color:themes.colors.primary}}>user_name</Text></Text>
                    <MaterialIcons name="edit"  size={28} color={themes.colors.gray} />
                </View>
                <Text style={styles.infoAppointments}>Você possui <Text style={{color:themes.colors.primary}}>n agendamentos</Text> hoje</Text>
            </View>

			<View style={styles.boxMiddle}>
				<AppointmentCard
					date={appointments[0].date}
					client={appointments[0].client}
					price={appointments[0].price}
					type="next"
				/>
				
				<AppointmentCard
					date={appointments[1].date}
					client={appointments[1].client}
					price={appointments[1].price}
					type="previous"
					status="done"
				/>
			</View>
			<TouchableOpacity
				activeOpacity={0.85}
				style={styles.fab}
				onPress={() => {}}
			>
				<MaterialIcons name="add" size={32} color="#fff" />
			</TouchableOpacity>
		</View>
	);
}


