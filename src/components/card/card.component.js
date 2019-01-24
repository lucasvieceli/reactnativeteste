import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CardStyle from './card.style';
import Thumbnail from "../thumbnail/thumbnail.component";
import Icon from "../icon/icon.component";
import Swiper from 'react-native-swiper';


export default class Card extends Component{

	getImagens() {
		return [
			{url:require('./1.jpg'), height: 350, width: null},
			{url:require('./1.jpg'), height: 350, width: null},
			{url:require('./1.jpg'), height: 350, width: null},
		];
	}

	teste = () => {
		return <Text>asd</Text>
	}

	render() {
		return (
			<View style={CardStyle.container}>
				<View style={CardStyle.containerTop} >
					{/*<Thumbnail small source={require('./1.jpg')} />*/}
					<View style={CardStyle.containerTitulo}>
						<Text style={CardStyle.titulo}>{this.props.nome}</Text>
						<Text style={CardStyle.subTitulo}>5 KM</Text>
					</View>
				</View>
				<View >
					<Swiper showsButtons={true}  height={350} showsButtons={false}  >
						<View >
							<Image style={CardStyle.imagem} source={require('./1.jpg')} />
						</View>
						<View >
							<Image style={CardStyle.imagem} source={require('./1.jpg')} />
						</View>
						<View >
							<Image style={CardStyle.imagem} source={require('./1.jpg')} />
						</View>
					</Swiper>
					{/*<Image style={CardStyle.imagem} source={require('./1.jpg')}/>*/}
				</View>
				<View style={CardStyle.opcoes}>
					<TouchableOpacity style={CardStyle.button} onPress={() => {}}>
						<Icon nome="ios-thumbs-up-outline" />
					</TouchableOpacity>
					<TouchableOpacity style={CardStyle.button} onPress={() => {}}>
						<Icon nome="ios-chatbubbles-outline" />
					</TouchableOpacity>
				</View>

			</View>

		);
	}
}