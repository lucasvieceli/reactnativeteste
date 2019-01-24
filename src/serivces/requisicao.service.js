import axios from 'axios';
import Auth from "./auth.service";



export interface RequisicaoParametros{
    url: string,
    data?: any,
    config?: any,
    semToken: boolean,
    parametros: any
};

export default class Requisicao {
    static BASE_URL = 'http://192.168.15.3:3001';
    static AXIOS = axios.create({
        baseURL: Requisicao.BASE_URL
    });
    static CONFIG = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };


    static async get(parametros: RequisicaoParametros){
        return Requisicao.AXIOS.get(parametros.url);
    }

    static async post(params: Requisicao){
        if(params.hasOwnProperty('config')){
            params.config = Object.assign(this.CONFIG, params.config) ;
        }else{
            params.config = this.CONFIG;
        }

        const url = await Requisicao.getUrl(params.url, params.semToken, params.parametros);
        return Requisicao.AXIOS.post(url, params.data, params.config);
    }

    static async head(params: Requisicao){
        const url = await Requisicao.getUrl(params.url, params.semToken, params.parametros);

        return Requisicao.AXIOS.head(url, params.config);
    }

    static async getUrl(url, semToken, parametros = {}, completa){

        if (typeof semToken == 'undefined' || semToken == false) {
            const usuario = await Auth.getUsuario();
            parametros['access_token'] = usuario.access_token;

        }
        if (parametros) {
            for (let parametro in parametros){
                if (url.indexOf('?') == -1) {
                    url += '?';
                } else {
                    url += '&';
                }
                url += parametro + '=' + parametros[parametro];
            }
        }

        if (typeof completa == 'undefined' && completa == false) {
            return url;
        }else{
            return Requisicao.BASE_URL+url;
        }

    }

}