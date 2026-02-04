import Card from '@/src/components/card/card';
import { themes } from '@/src/global/themes';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  totalAppointments: number | string;
  totalValue: string;
  lostValue: string;
  completionRate: string | number;
};

function SummaryCard({ totalAppointments, totalValue, lostValue, completionRate }: Props) {
  return (
    <Card>
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
    </Card>
  );
}

export default React.memo(SummaryCard);

 
