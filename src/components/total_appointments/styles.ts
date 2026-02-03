import { themes } from '@/src/global/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 48,
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 16,
    borderColor: themes.colors.lightGray,
    borderWidth: 1,
    elevation: 2,
    gap: 12,
  },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '500' },
  subtitle: { fontSize: 14, marginTop: 4 },
  count: { fontSize: 32, fontWeight: '400' },
  divider: { height: 1, backgroundColor: themes.colors.lightGray, marginVertical: 8 },
  rowFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footerLabel: { fontSize: 14 },
  footerValue: { fontSize: 16 },
});
