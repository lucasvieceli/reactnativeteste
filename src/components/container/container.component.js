import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './container.style'


export default class Container extends Component{
	
	render() {
		return (
			<View style={Style.container} {...this.props} >
				{this.props.children}
			</View>
		);
	}
}