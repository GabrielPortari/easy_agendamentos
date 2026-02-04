import { themes } from '@/src/global/themes';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  totalAppointments: number | string;
  totalValue: string;
  lostValue: string;
  completionRate: string | number;
};

export default function SummaryCard({ totalAppointments, totalValue, lostValue, completionRate }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Período</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Total de agendamentos:</Text>
        <Text style={styles.value}>{totalAppointments}</Text>
      </View>

      <View style={styles.rowMargin}>
        <Text style={styles.label}>Valor total (concluídos):</Text>
        <Text style={[styles.value, { color: themes.colors.success }]}>{totalValue}</Text>
      </View>

      <View style={styles.rowMargin}>
        <Text style={styles.label}>Valor perdido (cancelados):</Text>
        <Text style={[styles.value, { color: themes.colors.error }]}>{lostValue}</Text>
      </View>

      <View style={styles.rowMargin}>
        <Text style={styles.label}>Taxa de conclusão:</Text>
        <Text style={[styles.value, { color: themes.colors.primary }]}>{completionRate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: 'white',
    elevation: 2,
    borderColor: themes.colors.lightGray,
    borderRadius: 16,
    borderWidth: 1,
  },
  title: { fontSize: 16, fontWeight: '600', marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  rowMargin: { flexDirection: 'row', marginTop: 8, justifyContent: 'space-between' },
  label: { fontSize: 14 },
  value: { fontSize: 14 },
});
