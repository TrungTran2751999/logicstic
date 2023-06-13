import { IsNotEmpty, IsNumber } from "class-validator";
import { Class } from "src/class/class.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Student{
    @PrimaryGeneratedColumn({type:"bigint"})
    id: number;

    @IsNotEmpty()
    @Column({name:"name"})
    name: string;

    @IsNumber()
    @Column({name:"age"})
    age: number;
    
    @IsNotEmpty()
    @Column({name:"email"})
    email: string;

    @IsNotEmpty()
    @Column({name: "phone_number"})
    phone: string;

    @IsNotEmpty()
    @ManyToOne(()=>Class)
    @JoinColumn()
    class:Class;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}