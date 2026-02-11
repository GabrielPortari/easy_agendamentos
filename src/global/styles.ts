import { themes } from '@/src/global/themes';
import { TextStyle, ViewStyle } from 'react-native';

type LayoutStyles = {
	screen: ViewStyle;
	screenHeader: ViewStyle;
	screenTitle: TextStyle;
	screenSubtitle: TextStyle;
	cardBase: ViewStyle;
	cardMargin: ViewStyle;
	row: ViewStyle;
	rowSpaceBetween: ViewStyle;
	divider: ViewStyle;
	controlsRow: ViewStyle;
};

export const layout: LayoutStyles = {
	screen: { flex: 1, backgroundColor: themes.colors.bg },
	screenHeader: {
		paddingTop: 60,
		paddingHorizontal: 24,
		paddingBottom: 24,
	},
	screenTitle: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
	screenSubtitle: { fontSize: 16, color: themes.colors.gray, marginRight: 6 },
	cardBase: {
		backgroundColor: 'white',
		borderRadius: 16,
		borderWidth: 1,
		borderColor: themes.colors.lightGray,
		elevation: 2,
	},
	cardMargin: { marginTop: 24, marginHorizontal: 24 },
	row: { flexDirection: 'row', alignItems: 'center' },
	rowSpaceBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
	divider: { height: 1, backgroundColor: themes.colors.lightGray },
	controlsRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		flexWrap: 'wrap',
		marginTop: 12,
		justifyContent: 'flex-start',
	},
};
