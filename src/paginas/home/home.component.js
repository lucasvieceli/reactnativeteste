import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card, Container, Content, Header} from '../../components';
import Style from './home.style';

export default class HomePage extends Component {


	render() {
		return (
			<Container>
				<Header  navigation={this.props.navigation}>
					<View>
						<Text style={Style.header.title}>Scissor</Text>
					</View>
				</Header>
			<Content>
				<FlatList
					data={[{key: 'Lucas vieceli', id: 1}, {key: 'Lucas vieceli', id: 2}, {key: 'Lucas vieceli', id: 3}]}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({item}) => <Card nome={item.key} />}
				>
				</FlatList>

			</Content>

			</Container>
		);
	}


}