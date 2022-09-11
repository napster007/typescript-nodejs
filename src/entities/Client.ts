import {Entity, BaseEntity, Column} from "typeorm";

@Entity('client')
export class Client extends BaseEntity{
    @Column({
        
        name:"FIRSTNAME"
    })
    first_name: string;

    @Column({
        name:"LASTNAME"
    })
    last_name:string;

    @Column({
        unique:true,
        name:"EMAIL"
    })
    email: string;

    @Column({
        unique:true,
        length:10,
        name:"CARDNUMBER"
    })
    card_number: string;

    @Column({
        type: "numeric",
        name:"BALANCE"
    })
    balance:number;

    @Column({
        default:true,
        name:"ISACTIVE"
    })
    is_active:boolean

    @Column({
        type:"simple-json",
        nullable:true
    })
        additional_info:{
            age:number;
            hair_color:string;
        }
    @Column({
        type:"simple-array",
        default:[]
    })
    family_members: string[];
}