import ReportCard from '@/src/components/report_card/report_card';
import { themes } from '@/src/global/themes';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Reports() {
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.boxTop}>
                    <Text style={styles.title}>Relatórios</Text>
                    <Text style={styles.subtitle}>Histórico de agendamentos realizados</Text>
                </View>
                <ReportCard title="Concluídos" value="7" icon="check" iconBg={themes.colors.primaryLight} iconColor={themes.colors.primary} />
                <ReportCard title="Cancelados" value="3" icon="close" iconBg={themes.colors.errorLight} iconColor={themes.colors.error} />
                <ReportCard title="Receita total" value={'R$ 1025.00'} icon="attach-money" iconBg={themes.colors.successLight} iconColor={themes.colors.success} />
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
    title:{fontSize: 24, fontWeight: '600', marginBottom: 8},
    subtitle:{fontSize: 16, color: themes.colors.gray, marginRight: 6},
});