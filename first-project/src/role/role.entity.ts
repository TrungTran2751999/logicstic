import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity()
export class Role{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number;
    
    @Column()
    name: string
    constructor(id:number, name:string){
        this.id = id;
        this.name = name
    }
}