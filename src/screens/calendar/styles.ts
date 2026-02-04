import { themes } from '@/src/global/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{flex: 1, backgroundColor: themes.colors.bg},
    boxTop:{
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 24,
        height: "auto",
    },
    title:{fontSize: 24, fontWeight: '600', marginBottom: 8},
    subtitle:{fontSize: 16, color: themes.colors.gray, marginRight: 6},
});
