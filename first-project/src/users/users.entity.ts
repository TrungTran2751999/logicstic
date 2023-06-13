import { Role } from "src/role/role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn({type:"bigint"})
    id:number;

    @Column({name:"use_name"})
    name:string;

    @Column({name:"password"})
    password:string;
    
    @ManyToOne(()=>Role)
    role:Role;
}