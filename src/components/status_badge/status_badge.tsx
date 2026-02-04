import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

type Props = {
  status: 'done' | 'canceled' | 'pending' | string;
  size?: number;
};

export default function StatusBadge({ status, size = 20 }: Props) {
  const map: Record<string, { name: string; color: string }> = {
    done: { name: 'check-circle', color: themes.colors.success },
    canceled: { name: 'cancel', color: themes.colors.error },
    pending: { name: 'hourglass-bottom', color: themes.colors.warning },
  };

  const resolved = map[status] || { name: 'help-outline', color: themes.colors.darkGray };

  return (
    <View>
      <MaterialIcons name={resolved.name as any} size={size} color={resolved.color} />
    </View>
  );
}
