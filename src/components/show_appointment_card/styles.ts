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
  title: { fontSize: 16, fontWeight: '500' },
  divider: { height: 1, width: '100%' },
  content: { paddingHorizontal: 16, paddingBottom: 16, paddingTop: 12, gap: 12 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  iconBox: { marginRight: 8, borderRadius: 8, padding: 4 },
  valueText: { fontSize: 16, fontWeight: '500' },
  smallText: { fontSize: 14 },
  menuButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalBox: {
    width: '90%',
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 8,
    paddingVertical: 8,
    elevation: 8,
    alignSelf: 'center',
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  menuText: { fontSize: 16, marginLeft: 8 },
});
