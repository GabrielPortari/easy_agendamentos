import StatusBadge from '@/src/components/status_badge/status_badge';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type RowProps = {
  date: string;
  client: string;
  value: string;
  status: 'done' | 'canceled' | 'pending' | string;
};

export function TableHeader() {
  return (
    <View style={styles.row}>
      <View style={styles.col}><Text style={styles.header}>Data/Hora</Text></View>
      <View style={styles.col}><Text style={styles.header}>Cliente</Text></View>
      <View style={styles.colRight}><Text style={styles.header}>Valor</Text></View>
      <View style={styles.colCenter}><Text style={styles.header}>Status</Text></View>
    </View>
  );
}

export function TableRow({ date, client, value, status }: RowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.col}><Text style={styles.cell}>{date}</Text></View>
      <View style={styles.col}><Text style={styles.cell}>{client}</Text></View>
      <View style={styles.colRight}><Text style={[styles.cell, { textAlign: 'right' }]}>{value}</Text></View>
      <View style={styles.colCenter}><StatusBadge status={status} /></View>
    </View>
  );
}

 
