import React, {Component} from 'react';
import {Container, Header, Thumbnail, Content, Icon} from "../../../components";
import {Text, TextInput, View, TouchableOpacity, FlatList} from "react-native";
import StyleDefault from '../../../config/style'
import Style from "../lista/lista.style";
import Mensagem from "./mensagem/mensagem.component";
export default class ConversaPage extends Component {

    getLista = () => {
        return [
            {texto: 'lucassu dhasu idha suhdas udhsa idh asud sad asdas dasod asd iasdi asdoi asodj asod iaso di aso', id:1, tipo: 'texto'},

            {texto: '', id:2, tipo: 'upload'},
            {texto: 'lucas', id:3, tipo: 'texto'},
            {texto: 'lucas', id:4, tipo: 'texto'},
        ]
    }



  render() {
    return (
        <Container>
            <Header navigation={this.props.navigation}>
                <View style={{flexDirection: 'row'}}>
                    <Thumbnail  source={require('../../../components/card/1.jpg')} small />
                    <View style={{  paddingLeft: 10}}>
                        <Text numberOfLines={1}>ooooo iadsjdiasj diasjd iasd asoidjasoidj asiodjasiodjasiod jasid</Text>
                        <Text >Digitandio...</Text>
                    </View>
                </View>
            </Header>
            <Content style={{flex: 1}}>
                <View style={{flex: 1, }}>
                    <FlatList
                        data={this.getLista()}
                        renderItem={({item}) => <Mensagem mensagem={item}/>}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View style={{height: 40, margin: 5, flexDirection: 'row', alignContent: 'center', borderRadius: 30, borderWidth: 1, borderColor: '#c3c3c3', paddingHorizontal: 5, paddingBottom: 2 }}>
                    <TouchableOpacity onPress={() => {}} style={{ padding: 5}}>
                        <Icon nome="ios-happy-outline" />
                    </TouchableOpacity>
                    <TextInput
                        style={{height: 40, flex:1}}
                        returnKeyType="search"
                        placeholder="Digite algo"

                    />
                    <TouchableOpacity onPress={() => {}} style={{ padding: 5}}>
                        <Icon nome="ios-cloud-upload-outline" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={{ padding: 5}}>
                        <Icon nome="ios-send-outline" />
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>
    );
  }
}
