import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Profile } from "./Profile";

@Entity({schema: 'public'})
export class User{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email:string;

    @OneToOne(()=>Profile, {cascade:true, eager:true, onDelete:"CASCADE"})
    @JoinColumn()
    profile: Profile;
}