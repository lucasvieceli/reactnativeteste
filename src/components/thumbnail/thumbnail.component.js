import React, {Component} from 'react';
import Style from './thumbnail.style';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import ImageCache from "../image-cache/image-cache.component";


export default class Thumbnail extends Component{


	getStyle = () => {
		if(this.props.small){
			return Style.small;
		}
		if(this.props.large){
			return Style.large;
		}
	}

	render() {
		return (
			<ImageCache url={this.props.source} style={this.getStyle()}/>
		);
	}
}

Thumbnail.propTypes = {
	titleCenter: PropTypes.bool,
	// source: PropTypes.string
};