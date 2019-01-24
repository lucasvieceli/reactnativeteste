import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../../components';
import Style from './acessar.style'
import {AccessToken, LoginButton} from 'react-native-fbsdk';
import Auth from "../../../serivces/auth.service";
import AwesomeAlert from 'react-native-awesome-alerts';
import PropTypes from "prop-types";

export default class Acessar extends Component{

    state = {
        spinner: false
    };

    facebook = (erro, resultado) => {
        if (erro) {
            console.log("login has error: " + resultado.error);
        } else if (resultado.isCancelled) {
            Alert.alert('Acesso cancelado');
        } else {
            this.setState({spinner: true});
            AccessToken.getCurrentAccessToken().then(
                (data) => {
                    this.acessar(data.accessToken);
                }
            )
        }
    }

    acessar = (token) => {
        Auth.acessar(token).then(resultado => {
            this.props.onLogin(true);
        }).catch((e: any) => {
            Alert.alert(e.response.data.mensagem);
            this.setState({spinner: false});
        })
    }

    teste = () => {
        this.setState({spinner: true});
        this.acessar('EAAffr2GD7wwBALFZA1Xvf7qGWGR5sqZBlqzhEOJwaAJf2c3DUTgiQKhmOux2Cffm7y8HBafGFv7OI5sru9MmuoYCHv96j9CQQ5Aew8rIHaLUcEzCS4XuJCvn7svB981zW5hYmtrZCsvIWVZBF4zlksfqYJROCHe8uuZCCkbOhU0VG6YGNjNd0xZBF07OL48fSaR0Gn8O8sgZCAlVvhVBBav')
    }

    render() {
        return (
            <Container >
                <View style={Style.container}>
                    <View style={Style.containerCentro}>
                        <Image style={Style.logo} source={require('../../../assets/logo.png')}/>

                        <View style={Style.form}>

                            <TouchableOpacity style={Style.buttomAcessar} onPress={()=> {this.teste()}}>
                                <Text style={Style.buttonAcessarTexto}>Simular</Text>
                            </TouchableOpacity>
                            <LoginButton
                                readPermissions={['user_birthday','user_gender', 'email']}
                                onLoginFinished={this.facebook}
                                onLogoutFinished={() => console.log("logout.")}/>
                        </View>
                    </View>
                </View>

                <AwesomeAlert
                    show={this.state.spinner}
                    showProgress={true}
                    message="Carregando"
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={false}
                />
            </Container>
        );
    }
}


Acessar.propTypes = {
    onLogin: PropTypes.func,
};