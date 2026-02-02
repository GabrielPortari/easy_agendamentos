import { themes } from "@/src/global/themes";
import { formatDateTodayAppointment } from "@/src/utils/date_formatter";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Appointment = {
    id: number;
    date: Date;
    client: string;
    price: string;
}
type Props = {
    appointments?: Appointment[];
}

export default function TodayAppointment({ appointments }: Props) {
    return (
        <View style={styles.card}>
            
            <Text style={styles.textTitle}>Agendamentos de hoje</Text>

            {!appointments || appointments.length === 0 ? (
                <View style={{height: 64, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: themes.colors.gray}}>Nenhum agendamento para hoje</Text>
                </View>
            ) : (
                appointments.map(item => (
                    <View key={item.id} style={{marginTop:12}}>
                        <View style={styles.rowItem}> 
                            <Text style={{flex:1, color: themes.colors.primary}}>{formatDateTodayAppointment(item.date)}</Text>
                            <Text style={{flex:2}}>{item.client}</Text>
                            <Text style={{flex:1, color: themes.colors.success}}>{item.price}</Text>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
}

