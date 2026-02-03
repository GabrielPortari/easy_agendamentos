import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string;
  value: string;
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
  iconBg?: string;
  iconColor?: string;
}

export default function ReportCard({ title, value, icon, iconBg, iconColor }: Props) {
  const resolvedIconColor = iconColor || (value.startsWith('R$') ? themes.colors.success : themes.colors.primary);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.iconBox, { backgroundColor: iconBg || themes.colors.primaryLight }]}>
          <MaterialIcons name={icon} size={24} color={resolvedIconColor} />
        </View>
      </View>
      <Text style={[styles.value, { color: resolvedIconColor }]}>{value}</Text>
    </View>
  );
}
