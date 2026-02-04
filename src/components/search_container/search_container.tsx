import SearchInput from '@/src/components/search_input/search_input';
import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function SearchContainer() {

  const [query, setQuery] = useState('');
  const [orderBy, setOrderBy] = useState<'date' | 'name' | 'value'>('date');

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
            { backgroundColor: orderBy === 'date' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => setOrderBy('date')}
        >
          <Text style={[styles.btnText, { color: orderBy === 'date' ? 'white' : themes.colors.darkGray }]}>Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: orderBy === 'name' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => setOrderBy('name')}
        >
          <Text style={[styles.btnText, { color: orderBy === 'name' ? 'white' : themes.colors.darkGray }]}>Nome</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: orderBy === 'value' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => setOrderBy('value')}
        >
          <Text style={[styles.btnText, { color: orderBy === 'value' ? 'white' : themes.colors.darkGray }]}>Valor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}