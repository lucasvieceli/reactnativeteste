import RNFetchBlob from 'react-native-fetch-blob';
import Requisicao from "../../serivces/requisicao.service";

export default class ImageCacheService {

    diretorio = RNFetchBlob.fs.dirs.CacheDir+'/';
    url;
    static init() {


    }

    async getArquivo(){
        try {
            const existe = await this.verificaExiste();
            if (existe) {
                return this.getDiretorioArquivo();
            } else {
                const baixou = await this.download();
                return this.getDiretorioArquivo();

            }
        }catch (e) {
            console.log(e)
        }

    }

    async verificaAtualizou(){
        try {
            const resultado = await Requisicao.AXIOS.head(this.url, {'baseURL' : ''});
            const arquivo = await RNFetchBlob.fs.stat(this.getDiretorioArquivo());

            if(resultado.headers['content-length'] != arquivo.size){
                let a = await this.download();
                return true;
            }else{
                return false;
            }
        }catch (e) {
            console.log(e)
        }
    }

    getDiretorioArquivo(){
        return this.diretorio + this.getNomeArquivo();
    }



    getNomeArquivo(){
        return Array.from(this.url)
            .reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0).toString()+'.jpg'
    }

    verificaExiste(){
        try {
            return RNFetchBlob.fs.exists(this.getDiretorioArquivo());
        }catch (e) {
            throw e;
        }
    }

    async download(){
        try {
            let res = await RNFetchBlob
                .config({
                    path: this.getDiretorioArquivo(),
                    fileCache: false,
                })
                .fetch('GET', this.url, {});

            return res.path();
        }catch (e) {
            throw e;
        }
    }


}