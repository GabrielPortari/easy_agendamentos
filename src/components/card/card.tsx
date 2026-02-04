import { themes } from '@/src/global/themes';
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
    marginTop: 24,
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: 'white',
    elevation: 2,
    borderColor: themes.colors.lightGray,
    borderRadius: 16,
    borderWidth: 1,
  },
});
