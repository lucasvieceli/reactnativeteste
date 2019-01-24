import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import Icon from '../icon/icon.component'
import Style from './search-bar.style';
import PropTypes from "prop-types";


export default class SearchBar extends Component {

    timeOut = null;

    onSearch = (text) => {
        if(!this.props.onSearch){
            return false;
        }

        if(this.timeOut) {
            clearTimeout(this.timeOut);
        }

        this.timeOut = setTimeout(() => {
            this.props.onSearch(text);
        }, 500);
    }

    render(){
        return (
            <View style={Style.container}>
                <Icon nome="ios-search-outline" cor="#c3c3c3" style={Style.icone}/>
                <TextInput
                    style={Style.input}
                    returnKeyType="search"
                    placeholder="Buscar"
                    onChangeText={(text) => this.onSearch(text)}

                />
            </View>
        );
    }
}


SearchBar.propTypes = {
    onSearch: PropTypes.func,
};
