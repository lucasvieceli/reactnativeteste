import React, {Component} from 'react';
import {Image} from 'react-native';
import PropTypes from "prop-types";
import Requisicao from "../../serivces/requisicao.service";
import ImageCacheService from "./image-cache.service";

export default class ImageCache extends Component {

    state = {
        urlExibir: ''
    };
    url = '';
    service = new ImageCacheService();

    static defaultProps = {
        urlExterna: false,
    };
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.verificaExiste();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.url != prevProps.url){
            this.verificaExiste().then();
        }
    }

    verificaExiste = async () => {
        try {
            this.url = await this.getUrl();
            this.service.url = this.url;
            const novaUrl = await this.service.getArquivo();
            this.setUrl(novaUrl);

            this.service.verificaAtualizou().then(atualizou =>{
                if(atualizou){
                    this.setUrl(novaUrl);
                }
            });

            return null;
        }catch (e) {
            // console.log(this.state.url)
            console.log(e, 'verificaExiste')

        }

    }

    setUrl = (url) => {
        this.setState({urlExibir: 'file://'+url+'?random_number='+ new Date().getTime()});
    }

    async getUrl(){
        if(this.props.urlExterna){
            return this.props.url;
        }else{
            return await Requisicao.getUrl(this.props.url, false, {}, true);
        }
    }


    render() {
        return (
            <Image source={{uri: (this.state.urlExibir) ? this.state.urlExibir : '/'}} style={this.props.style}/>
        );
    }
}

ImageCache.propTypes = {
    url: PropTypes.string,
    style: PropTypes.object,
    urlExterna: PropTypes.bool
};