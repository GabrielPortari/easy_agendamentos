import SearchInput from '@/src/components/search_input/search_input';
import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function SearchContainer() {

  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'data' | 'nome' | 'valor'>('data');

  return (
    <View style={styles.container}
    >
      <SearchInput value={query} onChangeText={setQuery} />

      <View style={styles.controlsRow}>
        <MaterialIcons name="compare-arrows" size={24} color={themes.colors.gray} style={styles.icon} />
        <Text style={{ color: themes.colors.darkGray }}>Ordenar por: </Text>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: activeFilter === 'data' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => setActiveFilter('data')}
        >
          <Text style={[styles.btnText, { color: activeFilter === 'data' ? 'white' : themes.colors.darkGray }]}>Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: activeFilter === 'nome' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => setActiveFilter('nome')}
        >
          <Text style={[styles.btnText, { color: activeFilter === 'nome' ? 'white' : themes.colors.darkGray }]}>Nome</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: activeFilter === 'valor' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => setActiveFilter('valor')}
        >
          <Text style={[styles.btnText, { color: activeFilter === 'valor' ? 'white' : themes.colors.darkGray }]}>Valor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
