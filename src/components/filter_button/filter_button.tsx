import { themes } from '@/src/global/themes';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  label: string;
  isSelected: boolean;
  selectedColor?: string;
  onPress: () => void;
  minWidth?: number;
};

export default function FilterButton({ label, isSelected, selectedColor, onPress, minWidth = 88 }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        { backgroundColor: isSelected ? (selectedColor || themes.colors.primary) : themes.colors.lightGray, minWidth },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.btnText, { color: isSelected ? 'white' : themes.colors.darkGray }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { paddingVertical: 8, paddingHorizontal: 8, borderRadius: 8, marginLeft: 8, minWidth: 88, alignItems: 'center', justifyContent: 'center', marginTop: 8 },
  btnText: { color: 'white', fontWeight: '600', fontSize: 14 },
});
