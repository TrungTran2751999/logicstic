import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn, Repository, Connection } from "typeorm";
import { Student } from "./student.entity";
import { Class } from "src/class/class.entity";
import { StudentDTO } from "src/dto/user/studentDTO";
import { ClassService } from "src/class/class.service";

@Injectable()
export class StudentService{
    transactionalEntityManager: any;
    constructor(
        private readonly connection: Connection,
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
        @Inject(ClassService)
        private classService: ClassService
    ){};

    findAll(): Promise<Student[]>{
        return this.studentRepository.find({
            relations:['class']
        });
    }
    findOne(id: number): Promise<Student>{
        return this.studentRepository.findOne({
            where:{
                id:id
            },
            relations:['class']
        });
    }
    async create(student:StudentDTO): Promise<any>{
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();
        const classStudent = await this.classService.findById(student.classId);
        try{
            if(classStudent!=null){
                let studentResult:Student = this.toStudent(classStudent, student);
                const saved = await queryRunner.manager.save(studentResult);
                await queryRunner.commitTransaction();
                return saved;
            }else{
                throw new Error("classNotFound");
            }
        }catch(err){
            await queryRunner.rollbackTransaction();
            const error: any = {
                status: false,
                error: err.message,
            };
            return error;
        
        }finally {
            await queryRunner.release();
        }
    }
    async update(id:number, student:Student){
        await this.studentRepository.update(id,student);
    }
    async delete(id:number){
        await this.studentRepository.delete(id);
    }
    toStudent(param:Class, studentDTO:StudentDTO):Student{
        const student = new Student();
        student.class = param;
        student.age = studentDTO.age;
        student.email = studentDTO.email;
        student.phone = studentDTO.phone;
        student.name = studentDTO.name;
        return student;
    }
}

function getConnection() {
    throw new Error("Function not implemented.");
}

