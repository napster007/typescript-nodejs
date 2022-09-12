import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne} from "typeorm";
import { Company } from "./Company";

@Entity({schema: 'public'})
export class Product{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    price:number;

    @Column()
    description:string;

    @ManyToOne(() => Company, (company) => company.products)
    company : Company;
}