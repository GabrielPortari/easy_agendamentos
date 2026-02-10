import { themes } from "@/src/global/themes";
import { Appointment } from "@/src/models/appointment";
import { formatDateTodayAppointment } from "@/src/utils/date_formatter";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    appointments?: Appointment[];
}

function TodayAppointment({ appointments }: Props) {
    // helper: check if date is same day as today
    function isSameDay(input: string | Date, other: Date = new Date()) {
        const d = input instanceof Date ? input : new Date(input);
        if (Number.isNaN(d.getTime())) return false;
        return d.getFullYear() === other.getFullYear() && d.getMonth() === other.getMonth() && d.getDate() === other.getDate();
    }

    const todayList = (appointments ?? []).filter((a) => isSameDay(a.date));

    return (
        <View style={styles.card}>

            <Text style={styles.textTitle}>Agendamentos de hoje</Text>

            {todayList.length === 0 ? (
                <View style={{height: 64, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color: themes.colors.gray}}>Nenhum agendamento para hoje</Text>
                </View>
            ) : (
                todayList.map(item => (
                    <View key={item.id} style={{marginTop:12}}>
                        <View style={styles.rowItem}> 
                            <Text style={{flex:1, color: themes.colors.primary}}>{formatDateTodayAppointment(item.date)}</Text>
                            <Text style={{flex:1}}>{item.clientName}</Text>
                            <Text style={{flex:1, color: themes.colors.success}}>{`R$ ${item.value.toFixed(2)}`}</Text>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
}

export default React.memo(TodayAppointment);

