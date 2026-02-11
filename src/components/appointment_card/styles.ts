import { layout } from '@/src/global/styles';
import { themes } from '@/src/global/themes';
import { StyleSheet } from 'react-native';

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
        marginTop: 4,
    },
    appointmentDoneBox:{
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: themes.colors.successLight,
    },
    appointmentCanceledBox:{
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 8,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'transparent',
        backgroundColor: themes.colors.errorLight,
    },
});