import { themes } from '@/src/global/themes';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  label: string;
  isSelected: boolean;
  selectedColor?: string;
  onPress: () => void;
  minWidth?: number;
};

function FilterButton({ label, isSelected, selectedColor, onPress, minWidth = 88 }: Props) {
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

export default React.memo(FilterButton);

 
