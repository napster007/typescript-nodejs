import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Company } from "./Company";
import { Brand } from "./Brand";
import { Product } from "./Product";

@Entity({schema: 'public'})
export class ApplicationForm{
    
    @PrimaryGeneratedColumn()
    id:number ;

    @Column()
    reference_code:string ;

    @Column()
    ad_title:string;

    @Column()
    type_of_medium:string ;

    @Column()
    decision_status:string ;

    @Column()
    main_attachment_reference: string;

    @Column()
    supporting_attachment_reference:string ;

    @Column()
    bar_code:string ;

    @Column()
    qr_code:string;

    @OneToOne(()=>Company, {cascade:true, eager:true, onDelete:"CASCADE"})
    @JoinColumn()
    company_id: Company;

    @OneToOne(()=>Brand, {cascade:true, eager:true, onDelete:"CASCADE"})
    @JoinColumn()
    brand_id: Brand;

    @OneToOne(()=>Product, {cascade:true, eager:true, onDelete:"CASCADE"})
    @JoinColumn()
    product_id: Product;

}