import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import HeaderStyle from './header.style';
import PropTypes from 'prop-types';
import Icon from '../icon/icon.component'

export default class Header extends Component{

	getBtnBack = () => {
		let home = ['Home', 'ConversaLista', 'Perfil', 'Configuracoes'];

		if(!home.includes(this.props.navigation.state.routeName)) {
			return (

				<TouchableOpacity onPress={() => {this.props.navigation.goBack()}} style={{width: 40, paddingLeft: 10}}>
					<Icon nome="ios-arrow-round-back-outline" tamanho={40}  />
				</TouchableOpacity>
			);
		}
	}


	render() {
		return (
			<View style={HeaderStyle.container} {...this.props}>
				<View style={HeaderStyle.left}>
					{this.getBtnBack()}
				</View>
				<View style={HeaderStyle.body}>
					{this.props.children}
				</View>
			</View>
		);
	}

}


Header.propTypes = {
	navigation: PropTypes.any,
};