import FilterButton from '@/src/components/filter_button/filter_button';
import ReportCard from '@/src/components/report_card/report_card';
import SearchInput from '@/src/components/search_input/search_input';
import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Reports() {

    const [query, setQuery] = useState('');
    const [filterBy, setFilterBy] = useState<'all' | 'done' | 'canceled' | 'pending'>('all');
    const [orderBy, setOrderBy] = useState<'date' | 'name' | 'value'>('date');
    const [descending, setDescending] = useState<boolean>(false);
    
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{paddingBottom: 40}}>
                <View style={styles.boxTop}>
                    <Text style={styles.title}>Relatórios</Text>
                    <Text style={styles.subtitle}>Histórico de agendamentos realizados</Text>
                </View>
                <ReportCard title="Concluídos" value="7" icon="check" iconBg={themes.colors.primaryLight} iconColor={themes.colors.primary} />
                <ReportCard title="Cancelados" value="3" icon="close" iconBg={themes.colors.errorLight} iconColor={themes.colors.error} />
                <ReportCard title="Receita total" value={'R$ 1025.00'} icon="attach-money" iconBg={themes.colors.successLight} iconColor={themes.colors.success} />

                <View style={{ marginTop: 24, marginHorizontal: 24, padding: 24, backgroundColor: "white", elevation: 2, borderColor: themes.colors.lightGray, borderRadius: 16, borderWidth: 1 }}>
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
                        <FilterButton label="Todos" isSelected={orderBy === 'date'} onPress={() => setOrderBy('date')} />
                        <FilterButton label="Concluídos" isSelected={orderBy === 'name'} onPress={() => setOrderBy('name')} />
                        <FilterButton label="Pendentes" isSelected={orderBy === 'value'} onPress={() => setOrderBy('value')} />
                    </View>
                </View>

                <View style={{ marginTop: 24, marginHorizontal: 24, padding: 24, backgroundColor: "white", elevation: 2, borderColor: themes.colors.lightGray, borderRadius: 16, borderWidth: 1 }}>
                    <Text>Resumo do período</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Total de agendamentos:</Text>
                        <Text>10</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Valor total (concluídos):</Text>
                        <Text style={{color: themes.colors.success}}>R$200.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Valor perdido (cancelados):</Text>
                        <Text style={{color: themes.colors.error}}>R$100.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>Taxa de conclusão:</Text>
                        <Text style={{color: themes.colors.primary}}>25%</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.bg,
    },
    boxTop:{
		paddingTop: 60,
		paddingHorizontal: 24,
		paddingBottom: 24,
		height: "auto",
	},
    controlsRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 12, justifyContent: 'flex-start' },
    btn: { paddingVertical: 8, paddingHorizontal: 8, borderRadius: 8, marginLeft: 8, minWidth: 88, alignItems: 'center', justifyContent: 'center', marginTop: 8 },
    btnText: { color: "white", fontWeight: '600', fontSize: 14 },
    title:{fontSize: 24, fontWeight: '600', marginBottom: 8},
    subtitle:{fontSize: 16, color: themes.colors.gray, marginRight: 6},
});