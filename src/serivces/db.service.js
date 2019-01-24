import SQLite from 'react-native-sqlite-storage';
import dbUpgrade from '../config/versao-db';

class BDService{
    instancia;

    constructor(){
        console.log('construtor');
    }

    async connectar() {
        return new Promise((resolve, reject) => {
            try {
                this.instancia = SQLite.openDatabase({name: "database", createFromLocation: "~database.db"});

                this.instancia.transaction( (tx) => {
                        try {
                            tx.executeSql('CREATE TABLE IF NOT EXISTS version (version INTEGER)');
                            tx.executeSql('INSERT INTO version(version) SELECT  0 WHERE NOT EXISTS(SELECT 1 FROM version)')
                            // tx.executeSql('SELECT max(version) as max FROM version', [], (tx, results) => {
                            //     let version = results.rows.item(0).max;
                            //     if (version < dbUpgrade.version) {
                            //         this.upgradeFrom( version);
                            //     }
                            // });
                        }catch (e) {
                            console.log(e)
                        }
                    },
                    (completo) => {
                        console.log('terminou')
                        resolve(true);
                    }
                );

                return true;
            }catch (e) {

                console.log(e)
            }
        })
    }

    upgradeFrom(previousVersion) {
        let version = dbUpgrade.version - (dbUpgrade.version - previousVersion) + 1;

        for (let i = version; i <= dbUpgrade.version; i += 1) {
            let upgrade = dbUpgrade.upgrades[`to_v${i}`];
            if(!upgrade){
                continue;
            }
            this.instancia.transaction(tx => {

                upgrade.map(array => {
                    const sql = array[0];
                    let params = [];
                    if(array[1]){
                        params = array[1];
                    }
                    tx.executeSql(sql, params);
                });
                tx.executeSql('REPLACE into version (version) VALUES (?)', [i]);
            })
        }


    }

}

const BD = new BDService();
export default BD;