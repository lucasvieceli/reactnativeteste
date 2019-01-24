import {StyleSheet} from 'react-native';
import StyleDefault from '../../../config/style';

export default StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCentro: {
        width: '80%',
        height: '80%'
    },
    logo: {
        width: null,
        height: 100
    },
    form: {
        marginTop: 20,
    },
    input: {
        height: StyleDefault.inputHeight,
        borderColor: '#efefef',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fafafa',
        color: '#ababab',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttomAcessar: {
        height: StyleDefault.inputHeight,
        width: null,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#efefef',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#3797f0'
    },
    buttonAcessarTexto: {
        color: 'white',
    }
})