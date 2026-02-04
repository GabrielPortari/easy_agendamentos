import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

function SearchInput({ value, onChangeText, placeholder = 'Buscar por nome do cliente..' }: Props) {
  return (
    <View style={styles.searchRow}>
      <MaterialIcons name="search" size={20} color={themes.colors.gray} style={styles.icon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={themes.colors.gray}
        style={[styles.input, { color: themes.colors.darkGray }]}
      />
    </View>
  );
}

export default React.memo(SearchInput);
