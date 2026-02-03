import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  subtitle: string;
  time: string;
  client: string;
  price: string;
}

export default function ShowAppointmentCard({ title, subtitle, time, client, price }: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.top, { backgroundColor: themes.colors.lightBlue }] }>
        <Text style={[styles.title, { color: themes.colors.darkGray }]}>{title}</Text>
        <Text style={[styles.subtitle, { color: themes.colors.gray }]}>{subtitle}</Text>
      </View>
      <View style={[styles.divider, { backgroundColor: themes.colors.lightGray }]} />
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={[styles.iconBox, { backgroundColor: themes.colors.primaryLight }]}>
            <MaterialIcons name="access-time" size={24} color={themes.colors.primary} />
          </View>
          <View>
            <Text style={[styles.valueText, { color: themes.colors.primary }]}>{time}</Text>
            <Text style={[styles.smallText, { color: themes.colors.gray }]}>Horário</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.iconBox, { backgroundColor: themes.colors.secondaryLight }]}>
            <MaterialIcons name="person" size={24} color={themes.colors.secondary} />
          </View>
          <View>
            <Text style={[styles.valueText]}>{client}</Text>
            <Text style={[styles.smallText, { color: themes.colors.gray }]}>Cliente</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.iconBox, { backgroundColor: themes.colors.successLight }]}>
            <MaterialIcons name="attach-money" size={24} color={themes.colors.success} />
          </View>
          <View>
            <Text style={[styles.valueText, { color: themes.colors.success }]}>{price}</Text>
            <Text style={[styles.smallText, { color: themes.colors.gray }]}>Valor</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
