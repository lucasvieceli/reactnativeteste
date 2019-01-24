import React, {Component} from 'react';
import {View} from 'react-native';
import Style from './content.style';


export default class Content extends Component{
	
	render() {
		return (
			<View style={Style.content} {...this.props}>
				{this.props.children}
			</View>
		);
	}
}