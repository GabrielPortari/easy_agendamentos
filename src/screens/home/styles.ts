import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#f3f3ff' },
	boxTop:{
		paddingTop: 60,
		paddingHorizontal: 24,
		height: "20%",
		justifyContent: 'center',
	},
	boxMiddle:{
		flex: 2,
		paddingHorizontal: 24,
		paddingTop: 16,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		gap: 12,
		justifyContent: 'space-between',
	},
	welcomeRow:{
		flexDirection: 'row',
		gap: 12,
		alignItems: 'center',
	},
	infoAppointments:{
		marginTop: 16,
		fontSize: 16,
	},
	welcomeText:{
		fontSize: 24,
		fontWeight: '500',
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