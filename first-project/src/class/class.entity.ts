import { IsNotEmpty } from "class-validator";
import { Student } from "src/user/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class{
    @PrimaryGeneratedColumn({type: "bigint"})
    id: number;

    @IsNotEmpty()
    @Column()
    name: string;
}