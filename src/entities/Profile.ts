import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({schema: 'public'})
export class Profile{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    gender: string;

    @Column()
    photo: string;

}