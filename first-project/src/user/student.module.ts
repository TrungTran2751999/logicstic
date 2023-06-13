import { Module } from "@nestjs/common";
import { StudentService } from "./student.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { StudentController } from "./student.controller";
import { ClassService } from "src/class/class.service";
import { ClassModule } from "src/class/class.module";
import { RoleModule } from "src/role/role.module";

@Module({
    imports:[ClassModule, TypeOrmModule.forFeature([Student])],
    controllers: [StudentController],
    providers:[StudentService]
})
export class StudentModule{}