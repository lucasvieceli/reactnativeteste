import {Platform, StyleSheet} from 'react-native';
import StyleDefault from '../../config/style';

export default StyleSheet.create({
	container: {
		marginTop: Platform.OS === 'ios' ? 20 : 0,
		paddingVertical: 11,
		borderBottomWidth: 1,
		borderColor: '#bbb',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 2,

		backgroundColor: StyleDefault.header.bgColor,
		flexDirection: 'row',
		alignContent: 'center',

	},

	left: {
		marginLeft: 3,
		justifyContent: 'center',
	},

	body: {
		flex: 1,
		// flexDirection: 'row',
borderRightColor: 'red',
		borderRightWidth: 5,
		marginHorizontal: 5,
	},
	title: {
		color: '#000',
		fontFamily: StyleDefault.header.title.fontFamily,
		fontSize: StyleDefault.header.title.fontSize,
		alignSelf: 'flex-start',
	},


});