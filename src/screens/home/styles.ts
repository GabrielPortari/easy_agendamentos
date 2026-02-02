import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#fff' },
	boxTop:{
		paddingTop: 48,
		paddingBottom: 16,
		paddingHorizontal: 24,
		height: "25%",
		justifyContent: 'center',
		backgroundColor: '#f5f5f5',
	},
	fab: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: 28,
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: '#2558ff',
		justifyContent: 'center',
		alignItems: 'center',
		...Platform.select({
			ios: { shadowColor: '#000', shadowOpacity: 0.18, shadowOffset: { width: 0, height: 8 }, shadowRadius: 10 },
			android: { elevation: 6 },
		}),
	},
});