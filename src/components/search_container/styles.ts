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
  // search input moved to its own component (SearchInput)
  controlsRow: { flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 12, justifyContent: 'flex-start' },
  btn: { paddingVertical: 8, paddingHorizontal: 8, borderRadius: 8, marginLeft: 8, minWidth: 88, alignItems: 'center', justifyContent: 'center', marginTop: 8 },
  btnText: { color: "white", fontWeight: '600', fontSize: 14 },
  icon: { marginTop: 0, marginRight: 8 },
});
