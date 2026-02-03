import { themes } from "@/src/global/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  wrapper: { width: '100%', alignItems: 'center' },
  modal: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  label: { fontSize: 14, color: themes.colors.gray },
  input: {
    borderWidth: 1,
    borderColor: themes.colors.lightGray,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  row: { flexDirection: 'row', marginTop: 8, marginBottom: 8, alignItems: 'center' },
  inputRow: { flexDirection: 'row', marginBottom: 8, alignItems: 'center' },
  pickerButton: {
    borderWidth: 1,
    borderColor: themes.colors.lightGray,
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
  },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 8 },
  btn: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, minWidth: 100, alignItems: 'center' },
  btnCancel: { backgroundColor: '#fff', borderWidth: 1, borderColor: themes.colors.lightGray, marginRight: 8 },
  btnAdd: { backgroundColor: themes.colors.primary },
  btnCancelText: { color: themes.colors.darkGray },
  btnAddText: { color: '#fff', fontWeight: '600' },
});