import { Injectable } from "@nestjs/common";
import { Class } from "./class.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ClassService{
    constructor(
        @InjectRepository(Class)
        private classRepository: Repository<Class>,
    ){}
    findAll(): Promise<Class[]> {
        return this.classRepository.find({
            relations:['student']
        });
    }
    findById(id: number): Promise<Class> {
        return this.classRepository.findOne({
            where:{
                id:id
            }
        })
    }
    create(classDTO:Class): Promise<Class> {
        return this.classRepository.save(classDTO);
    }
    update(id: number, classDTO:Class) {
        this.classRepository.update(id, classDTO);
    }
    remove(id: number) {
        this.classRepository.delete(id);
    }
    
}