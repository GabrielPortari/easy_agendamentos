import Card from '@/src/components/card/card';
import FilterButton from '@/src/components/filter_button/filter_button';
import SearchInput from '@/src/components/search_input/search_input';
import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type FilterBy = 'all' | 'done' | 'canceled' | 'pending';
type OrderBy = 'date' | 'name' | 'value';

type Props = {
  query: string;
  setQuery: (q: string) => void;
  filterBy: FilterBy;
  setFilterBy: (f: FilterBy) => void;
  orderBy: OrderBy;
  setOrderBy: (o: OrderBy) => void;
};

export default function FilterPanel({ query, setQuery, filterBy, setFilterBy, orderBy, setOrderBy }: Props) {
  return (
    <Card>
      <SearchInput value={query} onChangeText={setQuery} />

      <View style={styles.controlsRow}>
        <MaterialIcons name="filter-list" size={24} color={themes.colors.gray} />
        <Text>Filtrar por</Text>
        <FilterButton label="Todos" isSelected={filterBy === 'all'} selectedColor={themes.colors.primary} onPress={() => setFilterBy('all')} />
        <FilterButton label="Concluídos" isSelected={filterBy === 'done'} selectedColor={themes.colors.success} onPress={() => setFilterBy('done')} />
        <FilterButton label="Pendentes" isSelected={filterBy === 'pending'} selectedColor={themes.colors.warning} onPress={() => setFilterBy('pending')} />
        <FilterButton label="Cancelados" isSelected={filterBy === 'canceled'} selectedColor={themes.colors.error} onPress={() => setFilterBy('canceled')} />
      </View>

      <View style={styles.controlsRow}>
        <MaterialIcons name="compare-arrows" size={24} color={themes.colors.gray} />
        <Text>Ordenar por</Text>
        <FilterButton label="Data" isSelected={orderBy === 'date'} onPress={() => setOrderBy('date')} />
        <FilterButton label="Nome" isSelected={orderBy === 'name'} onPress={() => setOrderBy('name')} />
        <FilterButton label="Valor" isSelected={orderBy === 'value'} onPress={() => setOrderBy('value')} />
      </View>
    </Card>
  );
}

 
