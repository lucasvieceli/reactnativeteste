import {StyleSheet} from 'react-native';
import StyleDefault from '../../../../config/style';



export default StyleSheet.create({

    container: {
        margin: 5,
        flexDirection: 'row',
    },
    containerDireita: {
        justifyContent: 'flex-end'
    },
    texto: {
        color: StyleDefault.conversa.texto.color,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: StyleDefault.conversa.texto.backgroundColor,
        borderRadius: 5,
        maxWidth: '80%',
    },
    containerImagem:{

    },
    imagem: {
        width: 200,
        height: 200,
        borderRadius: 5
    },
    imagemNaoBaixada: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagemNaoBaixadaButton: {
        borderRadius: 40,
        height: 50,
        width: 50,
        borderColor:  'rgba(0, 0, 0, 0.5)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }


})