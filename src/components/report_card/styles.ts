import { layout } from '@/src/global/styles';
import { themes } from '@/src/global/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    ...layout.cardBase,
    ...layout.cardMargin,
    padding: 24,
  },
  row: { ...layout.rowSpaceBetween, gap: 8 },
  title: { fontSize: 16, fontWeight: '500', color: themes.colors.gray },
  iconBox: { padding: 4, borderRadius: 8 },
  value: { marginTop: 8, fontSize: 24, fontWeight: '400' },
});
