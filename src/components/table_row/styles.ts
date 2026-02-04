import { themes } from '@/src/global/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  col: { flex: 1, paddingHorizontal: 8 },
  colRight: { flex: 1, paddingHorizontal: 8 },
  colCenter: { flex: 1, paddingHorizontal: 8, alignItems: 'flex-start' },
  header: { fontWeight: '500', color: themes.colors.darkGray },
  cell: { fontSize: 14 },
});
