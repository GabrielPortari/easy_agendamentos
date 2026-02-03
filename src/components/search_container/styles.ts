import { themes } from '@/src/global/themes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 24,
    backgroundColor: "white",
    elevation: 2,
    paddingHorizontal: 16,
    borderColor: themes.colors.lightGray,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
  },
  searchRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  input: { flex: 1, borderWidth: 1, borderColor: themes.colors.lightGray, borderRadius: 4, padding: 8, marginLeft: 8 },
  controlsRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'nowrap', marginTop: 16, flexShrink: 0 },
  btn: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, marginLeft: 8 },
  btnText: { color: "white", fontWeight: '600' },
  icon: { marginTop: 0 },
});
