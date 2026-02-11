import { layout } from '@/src/global/styles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...layout.cardBase,
    ...layout.cardMargin,
    marginBottom: 48,
    padding: 24,
    gap: 12,
  },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '500' },
  subtitle: { fontSize: 14, marginTop: 4 },
  count: { fontSize: 32, fontWeight: '400' },
  divider: { ...layout.divider, marginVertical: 8 },
  rowFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footerLabel: { fontSize: 14 },
  footerValue: { fontSize: 16 },
});
