import {Dimensions} from "react-native";

const fontFamily = 'Roboto';

export default {
	deviceHeight: Dimensions.get("window").height,
	fontFamily: 'Roboto',
	marginHorizontal: 10,
	marginTop: 10,
	inputHeight: 45,

	container: {
		bgColor: '#fff',
	},
	header: {
		bgColor: '#fff',
		title: {
			fontSize: 17,
			fontFamily: fontFamily,
		},
		subTitle: {
			fontSize: 11,
			fontFamily: fontFamily,
		}
	},
	searchBar: {
		backgroundColor: '#efefef',
		corPrimaria: '#c3c3c3',
	},
	conversa:{
		texto: {
			backgroundColor: '#efefef',
			color: '#000',
		}
	}


};