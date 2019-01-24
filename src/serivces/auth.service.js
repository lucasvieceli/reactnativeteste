import storage from "../config/storage";
import Requisicao from "./requisicao.service";

export default class Auth {

    constructor(){

    }

    static async estaLogado() {
        let valor = await this.getUsuario()
            .catch(e =>{
                return false;
            });
        if(valor){
            return true;
        }else{
            return false;
        }
    }

    static async getUsuario() {
        return await storage
            .load({
                key: 'usuario',
                autoSync: false,
            });
    }

    static async acessar(accessToken: string) {
        try{
            let resultado: any = await Requisicao.post({
                url: '/base/oauth/token',
                data: {
                    access_token: accessToken
                },
                semToken: true
            });

            await storage.save({
                key: 'usuario',
                data: resultado.data
            });
            return true;

        }catch (e) {
            throw e;
        }
    }
}