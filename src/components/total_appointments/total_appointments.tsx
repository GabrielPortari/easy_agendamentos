import { themes } from '@/src/global/themes';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  count?: number;
  total?: string;
}

export default function TotalAppointments({ count = 0, total = 'R$ 0,00' }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.rowHeader}>
        <View>
          <Text style={styles.title}>Total de agendamentos</Text>
          <Text style={styles.subtitle}>Programados para os próximos dias</Text>
        </View>
        <Text style={[styles.count, { color: themes.colors.primary }]}>{count}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.rowFooter}>
        <Text style={styles.footerLabel}>Valor total esperado:</Text>
        <Text style={[styles.footerValue, { color: themes.colors.success }]}>{total}</Text>
      </View>
    </View>
  );
}
