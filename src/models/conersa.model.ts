import {Entity, Column, PrimaryColumn} from "typeorm/browser";

@Entity('conversa')
export class ConversaModel{

    /**
     * id do usuario
     */
    @PrimaryColumn()
    id: string;

    @Column({nullable: true})
    dataUltimaConversa: number = new Date().getTime();

    @Column({nullable: true})
    data: number = new Date().getTime();

    @Column({nullable: true})
    visualizado: boolean = true;



    @Column({nullable: true})
    nome: string;
}