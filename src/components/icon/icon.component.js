import React, {Component} from 'react';
import {Text} from 'react-native';
import Mapa from './map';
import PropTypes from "prop-types";

export default class Icon extends Component{

    getEscaped = (nome: string) => {
        if(Mapa.hasOwnProperty(nome) ){
            return String.fromCharCode(Mapa[nome]);
        }
    }

    getStyle = () => {
        return {
            fontFamily: 'Ionicons',
            fontSize: this.props.tamanho ? this.props.tamanho : 30,
            color: this.props.cor ? this.props.cor : 'black',
        }
    }

    render() {
        return(
            <Text style={this.getStyle()} >{this.getEscaped(this.props.nome)}</Text>
        );
    }
}


Icon.propTypes = {
    cor: PropTypes.string,
    tamanho: PropTypes.number || PropTypes.string,
    nome: PropTypes.string,
};