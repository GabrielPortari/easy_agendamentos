import { Appointment } from "@/src/models/appointment";
import { formatDateTodayAppointment, isSameDay } from "@/src/utils/date_formatter";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    appointments?: Appointment[];
}

function TodayAppointment({ appointments }: Props) {
    const todayList = (appointments ?? []).filter((a) => isSameDay(a.date) && a.status === 'pending');

    const sortedTodayList = [...todayList].sort((a, b) => {
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();
        return timeA - timeB;
    });

    return (
        <View style={styles.card}>

            <Text style={styles.textTitle}>Agendamentos de hoje</Text>

            {sortedTodayList.length === 0 ? (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyText}>Nenhum agendamento para hoje</Text>
                </View>
            ) : (
                sortedTodayList.map(item => (
                    <View key={item.id} style={{marginTop:12}}>
                        <View style={styles.rowItem}> 
                            <Text style={styles.cellTime}>{formatDateTodayAppointment(item.date)}</Text>
                            <Text style={styles.cellClient}>{item.clientName}</Text>
                            <Text style={styles.cellPrice}>{`R$ ${item.value.toFixed(2)}`}</Text>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
}

export default React.memo(TodayAppointment);

