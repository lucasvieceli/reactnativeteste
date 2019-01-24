import {StyleSheet} from "react-native";
import StyleDefault from '../../config/style';

export default  StyleSheet.create({
    container:{
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
    },
    containerTop: {
        flexDirection: 'row',
        margin: 10,

    },
    containerTitulo: {
        marginLeft: 10,

    },
    titulo: {
	    fontFamily: StyleDefault.fontFamily,
        color: '#000',
        fontSize: 17,
        alignContent: 'flex-start',
        marginTop: -1,
        fontWeight: 'normal',
    },
    subTitulo: {
	    fontFamily: StyleDefault.fontFamily,
        color: '#6d6d6d',
        fontSize: 10,
        fontWeight: '200'
    },
    imagem:{
	    height: 350,
        width: null,
    },
    opcoes:{
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginHorizontal: 10
    }
});