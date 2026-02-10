import FilterButton from '@/src/components/filter_button/filter_button';
import SearchInput from '@/src/components/search_input/search_input';
import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  query?: string;
  onQueryChange?: (q: string) => void;
  orderBy?: 'date' | 'name' | 'value';
  onOrderByChange?: (o: 'date' | 'name' | 'value') => void;
  orderDirection?: 'asc' | 'desc';
  onOrderDirectionChange?: (d: 'asc' | 'desc') => void;
}

export default function SearchContainer({ query: queryProp, onQueryChange, orderBy: orderByProp, onOrderByChange, orderDirection: orderDirectionProp, onOrderDirectionChange }: Props) {

  const [internalQuery, setInternalQuery] = useState(queryProp ?? '');
  const [orderBy, setOrderBy] = useState<'date' | 'name' | 'value'>(orderByProp ?? 'date');
  const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>(orderDirectionProp ?? 'asc');

  React.useEffect(() => {
    if (queryProp !== undefined && queryProp !== internalQuery) setInternalQuery(queryProp);
  }, [queryProp]);

  const query = queryProp !== undefined ? queryProp : internalQuery;

  return (
    <View style={styles.container}
    >
      <SearchInput
        value={query}
        onChangeText={(t) => {
          if (queryProp === undefined) setInternalQuery(t);
          onQueryChange?.(t);
        }}
      />

      <View style={styles.controlsRow}>
        <MaterialIcons name="compare-arrows" size={24} color={themes.colors.gray} style={styles.icon} />
        <Text style={{ color: themes.colors.darkGray }}>Ordenar por: </Text>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: orderBy === 'date' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => { setOrderBy('date'); onOrderByChange?.('date'); }}
        >
          <Text style={[styles.btnText, { color: orderBy === 'date' ? 'white' : themes.colors.darkGray }]}>Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: orderBy === 'name' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => { setOrderBy('name'); onOrderByChange?.('name'); }}
        >
          <Text style={[styles.btnText, { color: orderBy === 'name' ? 'white' : themes.colors.darkGray }]}>Nome</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: orderBy === 'value' ? themes.colors.primary : themes.colors.lightGray },
          ]}
          onPress={() => { setOrderBy('value'); onOrderByChange?.('value'); }}
        >
          <Text style={[styles.btnText, { color: orderBy === 'value' ? 'white' : themes.colors.darkGray }]}>Valor</Text>
        </TouchableOpacity>

        <FilterButton
          label={orderDirection === 'asc' ? '↑ Crescente' : '↓ Decrescente'}
          isSelected={true}
          onPress={() => {
            const next = orderDirection === 'asc' ? 'desc' : 'asc';
            setOrderDirection(next);
            onOrderDirectionChange?.(next);
          }}
        />
      </View>
    </View>
  );
}