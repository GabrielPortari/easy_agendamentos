import FilterPanel from '@/src/components/filter_panel/filter_panel';
import ReportCard from '@/src/components/report_card/report_card';
import SummaryCard from '@/src/components/summary_card/summary_card';
import { themes } from '@/src/global/themes';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Reports() {

    const [query, setQuery] = useState('');
    const [filterBy, setFilterBy] = useState<'all' | 'done' | 'canceled' | 'pending'>('all');
    const [orderBy, setOrderBy] = useState<'date' | 'name' | 'value'>('date');
    const status = {
        done: { label: 'done', color: themes.colors.success },
        canceled: { label: 'canceled', color: themes.colors.error },
        pending: { label: 'pending', color: themes.colors.warning },
    };
    const reportStatus = status.canceled;
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
                <View style={styles.boxTop}>
                    <Text style={styles.title}>Relatórios</Text>
                    <Text style={styles.subtitle}>Histórico de agendamentos realizados</Text>
                </View>
                <ReportCard title="Concluídos" value="7" icon="check" iconBg={themes.colors.primaryLight} iconColor={themes.colors.primary} />
                <ReportCard title="Cancelados" value="3" icon="close" iconBg={themes.colors.errorLight} iconColor={themes.colors.error} />
                <ReportCard title="Receita total" value={'R$ 1025.00'} icon="attach-money" iconBg={themes.colors.successLight} iconColor={themes.colors.success} />

                <FilterPanel
                    query={query}
                    setQuery={setQuery}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                />

                <View style={styles.tableCard}>
                    <View style={styles.row}>
                        <View style={styles.col}><Text style={styles.header}>Data/Hora</Text></View>
                        <View style={styles.col}><Text style={styles.header}>Cliente</Text></View>
                        <View style={styles.colRight}><Text style={styles.header}>Valor</Text></View>
                        <View style={styles.colCenter}><Text style={styles.header}>Status</Text></View>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.row}>
                        <View style={styles.col}><Text style={styles.cell}>02 fev. 2026 14:30</Text></View>
                        <View style={styles.col}><Text style={styles.cell}>João A.</Text></View>
                        <View style={styles.colRight}><Text style={styles.cell}>R$200</Text></View>
                        <View style={styles.colCenter}>
                            {reportStatus.label === 'done' && <MaterialIcons name="check-circle" size={20} color={reportStatus.color} />}
                            {reportStatus.label === 'canceled' && <MaterialIcons name="cancel" size={20} color={reportStatus.color} />}
                            {reportStatus.label === 'pending' && <MaterialIcons name="hourglass-bottom" size={20} color={reportStatus.color} />}
                        </View>
                    </View>
                </View>

                <SummaryCard totalAppointments={10} totalValue={'R$200.00'} lostValue={'R$100.00'} completionRate={'25%'} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.bg,
    },
    boxTop: {
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 24,
        height: "auto",
    },
    controlsRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 12, justifyContent: 'flex-start' },
    btn: { paddingVertical: 8, paddingHorizontal: 8, borderRadius: 8, marginLeft: 8, minWidth: 88, alignItems: 'center', justifyContent: 'center', marginTop: 8 },
    btnText: { color: "white", fontWeight: '600', fontSize: 14 },
    title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
    subtitle: { fontSize: 16, color: themes.colors.gray, marginRight: 6 },
    tableCard: {
        marginTop: 24, marginHorizontal: 24, padding: 24,
        backgroundColor: 'white', elevation: 2,
        borderColor: themes.colors.lightGray, borderRadius: 16, borderWidth: 1
    },
    row: { flexDirection: 'row', alignItems: 'center' },
    col: { flex: 1, paddingHorizontal: 8 },
    colRight: { flex: 1, paddingHorizontal: 8 },
    colCenter: { flex: 1, paddingHorizontal: 8 },
    header: { fontWeight: '500', color: themes.colors.darkGray },
    cell: { fontSize: 14 },
    divider: { height: 1, backgroundColor: themes.colors.lightGray, marginVertical: 12 }
});