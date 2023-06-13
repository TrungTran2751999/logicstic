import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "./role.entity";
import {Repository} from 'typeorm';

@Injectable()
export class RoleRepository{
    constructor(
        @InjectRepository(Role)
        private roleRepository:Repository<Role>
    ){}
    async create(role:Role):Promise<Role>{
       const result =  await this.roleRepository.save(role);
       return result; 
    }
    async countRow():Promise<number>{
        const result = await this.roleRepository.count();
        return result;
    }
    async findById(id:number):Promise<Role>{
        const result = await this.roleRepository.findOne({
            where:{
                id:id
            }
        })
        return result;
    }
}