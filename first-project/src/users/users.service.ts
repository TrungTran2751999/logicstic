import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import {Connection, Repository, DataSource } from "typeorm";
import { Users } from "./users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { Student } from "src/user/student.entity";
import { UsersRepository } from "./users.repository";
import { UserDTO } from "src/dto/userDTO";
import { RoleRepository } from "src/role/role.repository";
import { UtilService } from "src/util/util.service";
import * as bscrypt from "bcrypt";
@Injectable()
export class UsersService{
    constructor(
        private readonly usersRepository:UsersRepository,
        private readonly roleRepository:RoleRepository,
        private readonly utilService:UtilService,
        private dataSource:DataSource,
    ){}
    async findById(id:number):Promise<Users>{
        return await this.usersRepository.findById(id);
    }
    async create(usersDTO:UserDTO):Promise<any>{
        let checkUser = await this.usersRepository.findByName(usersDTO.username);
        let role = await this.roleRepository.findById(usersDTO.roleId);

        if(checkUser.length>0) throw new BadRequestException("User exist");
        if(role===null) throw new BadRequestException("Role not exist");
        
        usersDTO.password = await bscrypt.hash(usersDTO.password,10);
        let user = await this.utilService.userDTOtoUsers(usersDTO, role);
    
        return await this.dataSource.transaction(async (manager)=>{
            return await manager.save(user);
        })
    }
    async findAll():Promise<Users[]>{
        const result = await this.usersRepository.getAll();
        return result;
    }
    async findBySQL(name:string):Promise<Users[]>{
        const result = await this.usersRepository.findByNameSQL(name)
        return result;
    }
    async findByName(name:string):Promise<Users[]>{
        const result = await this.usersRepository.findByName(name);
        return result;
    }
}