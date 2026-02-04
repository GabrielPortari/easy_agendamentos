import { themes } from '@/src/global/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
    subtitle: { fontSize: 16, color: themes.colors.gray, marginRight: 6 },
    tableCard: {},
    row: { flexDirection: 'row', alignItems: 'center' },
    col: { flex: 1, paddingHorizontal: 8 },
    colRight: { flex: 1, paddingHorizontal: 8 },
    colCenter: { flex: 1, paddingHorizontal: 8 },
    header: { fontWeight: '500', color: themes.colors.darkGray },
    cell: { fontSize: 14 },
    divider: { height: 1, backgroundColor: themes.colors.lightGray, marginVertical: 12 }
});
