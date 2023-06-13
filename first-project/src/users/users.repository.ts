import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import {Repository, DataSource, EntityRepository} from "typeorm";
import { Role } from "src/role/role.entity";

@Injectable()
export class UsersRepository{
    constructor(
        @InjectRepository(Users)
        private userRepository:Repository<Users>,
        private dataSource:DataSource
    ){}
    async getAll():Promise<Users[]>{
       return this.userRepository.find();
    }
    async findByNameSQL(name:string):Promise<Users[]>{
        return await this.dataSource.transaction(async manager=>{
           return await manager.query(`SELECT * FROM users WHERE use_name=${name}`)
        })
    }
    async findByName(name:string):Promise<Users[]>{
        return await this.userRepository.find({
            where:{
                name:name
            }
        })
    }
    async findById(id:number):Promise<Users>{
        let result = await this.userRepository.findOne({
            where:{
                id:id
            },
            relations:['role']
        })
        return result;
    }
}