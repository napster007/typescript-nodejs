import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Product } from "./Product";

@Entity({schema: 'public'})
export class Company{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @OneToMany(()=> Product, (product)=> product.company )
    products:Product[];
}