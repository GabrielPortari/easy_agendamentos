import { themes } from '@/src/global/themes'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    card: {
            width: '100%',
            height: 'auto',
            borderRadius: 16,
            borderWidth: 1,
            justifyContent: 'center',
            backgroundColor: 'white',
            borderColor: themes.colors.lightGray,
            padding: 20,
            marginBottom: 12,
            elevation: 2,
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
})