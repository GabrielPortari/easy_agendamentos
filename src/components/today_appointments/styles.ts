import { layout } from '@/src/global/styles'
import { themes } from '@/src/global/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    card: {
        ...layout.cardBase,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 12,
    },
    textTitle:{
        fontSize: 15,
        fontWeight: '500',
    },
    rowItem:{
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 8, 
        marginBottom: 4,
        marginTop: 10,
    },
    emptyState: { height: 64, justifyContent: 'center', alignItems: 'center' },
    emptyText: { color: themes.colors.gray },
    cellTime: { flex: 1, color: themes.colors.primary },
    cellClient: { flex: 1 },
    cellPrice: { flex: 1, color: themes.colors.success },
})