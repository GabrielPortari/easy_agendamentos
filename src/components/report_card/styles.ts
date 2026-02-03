import { themes } from '@/src/global/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    marginHorizontal: 24,
    elevation: 2,
    padding: 24,
    borderRadius: 16,
    borderColor: themes.colors.lightGray,
    backgroundColor: 'white',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  title: { fontSize: 16, fontWeight: '500', color: themes.colors.gray },
  iconBox: { padding: 4, borderRadius: 8 },
  value: { marginTop: 8, fontSize: 24, fontWeight: '400' },
});
