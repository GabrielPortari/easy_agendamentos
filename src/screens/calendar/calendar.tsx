import SearchContainer from '@/src/components/search_container/search_container';
import ShowAppointmentCard from '@/src/components/show_appointment_card/show_appointment_card';
import TotalAppointments from '@/src/components/total_appointments/total_appointments';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export default function Calendar() {
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
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.boxTop}>
                    <Text style={styles.title}>Calendário de agendamentos</Text>
                    <Text style={styles.subtitle}>Próximos agendamentos a partir de {appointments[2].date.toLocaleDateString()} às {appointments[3].date.toLocaleTimeString()}</Text>
                </View>

                <SearchContainer />

                <ShowAppointmentCard
                    title="Terça feira, 03 de fev. de 2026 às 16:00"
                    time="16:00"
                    client="Jose da silva"
                    price="R$ 200,00"
                />

                <TotalAppointments count={appointments.length} total={'R$ 670,00'} />
            </ScrollView>
        </View>
    );
}

 
