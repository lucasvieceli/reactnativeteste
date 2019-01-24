import {StyleSheet} from 'react-native';
import StyleDefault from '../../../config/style';

export default StyleSheet.create({
    searchBar: {
        marginHorizontal: 10,
        marginTop: 10
    },
    containerItem: {
        padding: StyleDefault.marginHorizontal,
        borderBottomColor: '#c3c3c3',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    containerThumb: {
        flex: 1,
        justifyContent: 'center'
    },
    containerNome: {
        flex: 9,
        marginLeft: 20,
        justifyContent: 'center'
    },
    containerOpcoes: {
        flex: 2,
        alignItems: 'flex-end'
    },
    mensagens: {
        borderRadius: 50,
        width: 20,
        justifyContent: 'flex-end',
        height: 20,
        backgroundColor: '#c3c3c3'
    },
    mensagensText: {alignSelf: 'center'}
})