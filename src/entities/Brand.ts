import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";


@Entity({schema: 'public'})
export class Brand{
    
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    description:string ;

}