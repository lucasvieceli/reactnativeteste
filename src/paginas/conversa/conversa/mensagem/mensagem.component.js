import React, {Component} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import Style from './mensagem.style';
import Icon from "../../../../components/icon/icon.component";

export default class Mensagem extends Component{

    getContainerTexto = () => {

        return(
              <Text style={[Style.texto, Style.textoDireita]}>{this.props.mensagem.texto}</Text>
        );
    }

    getContainerImagem = () => {
        let style = [Style.imagem];

        // return(
        //       <Image style={style}  source={require('../../../../components/card/1.jpg')} />
        // );

        style.push(Style.imagemNaoBaixada);
        return (
            <ImageBackground style={style} imageStyle={style} blurRadius={5} source={require('../../../../components/card/1.jpg')} >
                <TouchableOpacity onPress={() => {}} style={Style.imagemNaoBaixadaButton}>
                    <Icon nome="ios-cloud-download-outline" cor="white" />
                </TouchableOpacity>
            </ImageBackground>
        );
    }

    getContainer = () => {
        let container = null;
        if(this.props.mensagem.tipo == 'upload'){
            container = this.getContainerImagem();
        }else{
            container = this.getContainerTexto()
        }
        let styleContiner = [Style.container];

        if(this.props.mensagem.id %2 == 0){
            styleContiner.push(Style.containerDireita);
        }

        return (

            <View style={styleContiner}>{container}</View>
        )
    }

    render() {
        return (
            <View>
                {this.getContainer()}
            </View>
        );
    }
}

Mensagem.propTypes = {
    mensagem: PropTypes.any,
};
