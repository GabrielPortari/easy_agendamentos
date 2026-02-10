import Card from '@/src/components/card/card';
import FilterPanel from '@/src/components/filter_panel/filter_panel';
import ReportCard from '@/src/components/report_card/report_card';
import SummaryCard from '@/src/components/summary_card/summary_card';
import { TableHeader, TableRow } from '@/src/components/table_row/table_row';
import { themes } from '@/src/global/themes';
import { Appointment } from '@/src/models/appointment';
import { getAllAppointments } from '@/src/storage/appointments.repo';
import { formatDateAppointmentCard } from '@/src/utils/date_formatter';
import { useFocusEffect } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export default function Reports() {

    const [query, setQuery] = useState('');
    const [filterBy, setFilterBy] = useState<'all' | 'done' | 'canceled' | 'pending'>('all');
    const [orderBy, setOrderBy] = useState<'date' | 'name' | 'value'>('date');
    const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('desc');
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    async function loadAppointments() {
        try {
            const all = await getAllAppointments();
            setAppointments(all ?? []);
        } catch (err) {
            console.warn('Error loading appointments', err);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                await loadAppointments();
            })();
        }, [])
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = q
            ? appointments.filter((a) => (a.clientName ?? '').toLowerCase().includes(q))
            : [...appointments];

        if (filterBy !== 'all') {
            list = list.filter((a) => a.status === filterBy);
        }

        const dir = orderDirection === 'asc' ? 1 : -1;
        list.sort((x, y) => {
            if (orderBy === 'date') {
                return (new Date(x.date).getTime() - new Date(y.date).getTime()) * dir;
            }
            if (orderBy === 'name') {
                return String(x.clientName ?? '').localeCompare(String(y.clientName ?? '')) * dir;
            }
            return ((x.value ?? 0) - (y.value ?? 0)) * dir;
        });

        return list;
    }, [appointments, query, filterBy, orderBy, orderDirection]);

    const totals = useMemo(() => {
        const done = filtered.filter((a) => a.status === 'done');
        const canceled = filtered.filter((a) => a.status === 'canceled');
        const pending = filtered.filter((a) => a.status === 'pending');
        const totalValue = done.reduce((s, it) => s + (it.value ?? 0), 0);
        const lostValue = canceled.reduce((s, it) => s + (it.value ?? 0), 0);
        const pendingValue = pending.reduce((s, it) => s + (it.value ?? 0), 0);
        const completionRate = filtered.length > 0
            ? `${Math.round((done.length / filtered.length) * 100)}%`
            : '0%';

        return {
            doneCount: done.length,
            canceledCount: canceled.length,
            totalValue,
            lostValue,
            pendingValue,
            completionRate,
        };
    }, [filtered]);
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
                <View style={styles.boxTop}>
                    <Text style={styles.title}>Relatórios</Text>
                    <Text style={styles.subtitle}>Histórico de agendamentos realizados</Text>
                </View>
                <ReportCard title="Concluídos" value={`${totals.doneCount}`} icon="check" iconBg={themes.colors.primaryLight} iconColor={themes.colors.primary} />
                <ReportCard title="Cancelados" value={`${totals.canceledCount}`} icon="close" iconBg={themes.colors.errorLight} iconColor={themes.colors.error} />
                <ReportCard title="Receita total" value={`R$ ${totals.totalValue.toFixed(2)}`} icon="attach-money" iconBg={themes.colors.successLight} iconColor={themes.colors.success} />

                <FilterPanel
                    query={query}
                    setQuery={setQuery}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                    orderDirection={orderDirection}
                    setOrderDirection={setOrderDirection}
                />

                <Card style={{ paddingVertical: 12 }}>
                    <TableHeader />
                    <View style={styles.divider} />
                    {filtered.map((a) => (
                        <TableRow
                            key={a.id}
                            date={formatDateAppointmentCard(a.date)}
                            client={a.clientName}
                            value={`R$ ${(a.value ?? 0).toFixed(2)}`}
                            status={a.status}
                        />
                    ))}
                </Card>

                <SummaryCard
                    totalAppointments={filtered.length}
                    totalValue={`R$ ${totals.totalValue.toFixed(2)}`}
                    lostValue={`R$ ${totals.lostValue.toFixed(2)}`}
                    pendingValue={`R$ ${totals.pendingValue.toFixed(2)}`}
                    completionRate={totals.completionRate}
                />
            </ScrollView>
        </View>
    );
}

 