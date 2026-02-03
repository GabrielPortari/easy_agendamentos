import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function SearchContainer() {

  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}
    >
      <View style={styles.searchRow}>
        <MaterialIcons name="search" size={24} color={themes.colors.gray} />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Pesquisar agendamentos..."
          placeholderTextColor={themes.colors.gray}
          style={[styles.input, { borderColor: themes.colors.lightGray, color: themes.colors.darkGray }]}
        />
      </View>

      <View style={styles.controlsRow}>
        <MaterialIcons name="compare-arrows" size={24} color={themes.colors.gray} style={styles.icon} />
        <Text style={{ color: themes.colors.darkGray }}>Ordenar por: </Text>

        <TouchableOpacity style={[styles.btn, { backgroundColor: themes.colors.primary }]} onPress={() => {}}>
          <Text style={styles.btnText}>Data</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: themes.colors.primary }]} onPress={() => {}}>
          <Text style={styles.btnText}>Nome</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: themes.colors.primary }]} onPress={() => {}}>
          <Text style={styles.btnText}>Valor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
