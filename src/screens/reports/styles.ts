import { layout } from '@/src/global/styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: layout.screen,
    divider: { ...layout.divider, marginVertical: 12 }
});
