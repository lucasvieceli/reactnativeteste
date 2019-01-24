import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Container, Content, Header, SearchBar, Thumbnail} from "../../../components";
import Style from './lista.style';

export default class ConversaListaPage extends Component {

    componentDidMount() {
        this.setState({lista: this.getLista()});
    }

    state = {
        lista: null
    };

    getLista = () => {
        return [
            {nome: 'lucas Teste', _id:'5c4714f3bdb9b61e30e00ef9', url: '/base/usuario/5c4714f3bdb9b61e30e00ef9/foto/40'},
            // {nome: 'lucas', _id:2, url: '/base/usuario/2/foto/40'},
            // {nome: 'lucas', _id:3, url: '/base/usuario/3/foto/40'},
            // {nome: 'lucas', _id:4, url: '/base/usuario/4/foto/40'},
        ]
    }



    renderItem = (item) => {
        return (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate("ConversaConversa")}>
            <View style={Style.containerItem}>

                    <View style={Style.containerThumb}>
                        <Thumbnail  source={item.url} small />
                    </View>
                    <View style={Style.containerNome}>
                        <Text numberOfLines={1}>ooooo iadsjdiasj diasjd iasd asoidjasoidj asiodjasiodjasiod jasid</Text>
                    </View>
                    <View style={Style.containerOpcoes}>
                        <Text>13:50</Text>

                        <View style={Style.mensagens}><Text style={Style.mensagensText}>1
                        </Text></View>
                    </View>
            </View>
            </TouchableOpacity>

        );
    }



    render() {
        return (
            <Container>
                <Header  navigation={this.props.navigation}>
                    <View>
                        <Text >Conversas</Text>
                    </View>
                </Header>
                <Content>
                    <View style={Style.searchBar}>
                        <SearchBar />
                    </View>
                    <FlatList
                        data={this.state.lista}
                        renderItem={({item}) => this.renderItem(item)}
                        keyExtractor={(item) => item._id.toString()}
                    />
                </Content>
            </Container>

        );
      }
}

