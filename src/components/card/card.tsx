import { layout } from '@/src/global/styles';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export default function Card({ children, style }: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    ...layout.cardBase,
    ...layout.cardMargin,
    padding: 24,
  },
});
