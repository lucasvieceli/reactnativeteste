import {StyleSheet} from 'react-native';
import StyleDefault from '../../config/style';

export default StyleSheet.create({
    container: {
        backgroundColor: StyleDefault.searchBar.backgroundColor,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    icone: {
        alignSelf: 'center',
        flex: 1,
    },
    input: {
        height: StyleDefault.inputHeight,
        color: StyleDefault.searchBar.corPrimaria,
        width: null,
        flexWrap: 'nowrap',
        flex:11,
        fontFamily: StyleDefault.fontFamily
    }
})