import Card from '@/src/components/card/card';
import FilterPanel from '@/src/components/filter_panel/filter_panel';
import ReportCard from '@/src/components/report_card/report_card';
import SummaryCard from '@/src/components/summary_card/summary_card';
import { TableHeader, TableRow } from '@/src/components/table_row/table_row';
import { themes } from '@/src/global/themes';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

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

                <Card style={{ paddingVertical: 12 }}>
                    <TableHeader />
                    <View style={styles.divider} />
                    <TableRow date={'02 fev. 2026 14:30'} client={'João A.'} value={'R$200'} status={reportStatus.label as any} />
                </Card>

                <SummaryCard totalAppointments={10} totalValue={'R$200.00'} lostValue={'R$100.00'} completionRate={'25%'} />
            </ScrollView>
        </View>
    );
}

 