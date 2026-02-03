import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    marginHorizontal: 24,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    elevation: 2,
    overflow: 'hidden'
  },
  top: {
    padding: 16,
  },
  title: { fontSize: 18, fontWeight: '500' },
  subtitle: { fontSize: 15, marginTop: 4 },
  divider: { height: 1, width: '100%' },
  content: { paddingHorizontal: 16, paddingBottom: 16, paddingTop: 12, gap: 12 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  iconBox: { marginRight: 8, borderRadius: 8, padding: 4 },
  valueText: { fontSize: 16, fontWeight: '500' },
  smallText: { fontSize: 14 },
});
