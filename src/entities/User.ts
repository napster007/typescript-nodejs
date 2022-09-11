import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Profile } from "./Profile";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email:string;

    @OneToOne(()=>Profile, {cascade:true})
    @JoinColumn()
    profile: Profile;
}