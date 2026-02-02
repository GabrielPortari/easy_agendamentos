import { themes } from "@/src/global/themes";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    date?: string;
    client?: string;
    price?: string;
    type?: 'next' | 'previous';
    status?: 'done' | 'canceled' | 'open';
}

export default function AppointmentCard({ date, client, price, type, status }: Props) {
    return (
        <View style={styles.card}>
            <View style={styles.rowItem}>
                {type === 'next' ? <MaterialIcons name="arrow-forward-ios" size={16} color={themes.colors.primary} /> : 
                <MaterialIcons name="arrow-back-ios" size={16} color={themes.colors.primary} />}
                <Text style={styles.textTitle}>{type === 'next' ? 'Próximo agendamento' : 'Agendamento anterior'}</Text>
            </View>

            <View style={styles.rowItem}>
                <MaterialIcons name="access-time" size={16} color={themes.colors.gray} />
                <Text>{date}</Text>
            </View>


            <View style={styles.rowItem}>
                <MaterialIcons name="person" size={16} color={themes.colors.gray} />
                <Text>{client}</Text>
            </View>

            <View style={styles.rowItem}>
                <MaterialIcons name="attach-money" size={16} color={themes.colors.gray} />
                <Text style={{color: themes.colors.success }}>{price}</Text>
            </View>

            {status === 'done' && (
            <View style={styles.appointmentDoneBox}>
                <Text style={{ color: themes.colors.success }}>Concluído</Text>
            </View>
            )}

            {status === 'canceled' && (
            <View style={styles.appointmentCanceledBox}>
                <Text style={{ color: themes.colors.error }}>Cancelado</Text>
            </View>
            )}
        </View>
    );
}

