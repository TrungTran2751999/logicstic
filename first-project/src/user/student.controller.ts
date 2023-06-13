import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "./student.entity";
import { Response } from 'express';
import { StudentDTO } from "src/dto/user/studentDTO";
@Controller('student')
export class StudentController{
    constructor(
        private studentService: StudentService
    ){}
    @Get()
    async findAll(@Res() res: Response){
        const result = await this.studentService.findAll();
        res.status(HttpStatus.OK).json(result);
    }
    @Get(":id")
    async findById(@Param() id:number, @Res() res:Response){
        const result = await this.studentService.findOne(id);
        if(result===null){
            res.status(HttpStatus.BAD_REQUEST).json({message:"Not found"});
        }else{
            res.status(HttpStatus.OK).json(result);
        }
    }
    @Post()
    async create(@Body() studentDTO:StudentDTO, @Res() res:Response){
        const result = await this.studentService.create(studentDTO);
        res.status(HttpStatus.OK).json({message: "SUCCESS"});
    }
    @Put(":id")
    async update(@Param() id:number, @Body() updateDTO:Student, @Res() res:Response){
        const result = await this.studentService.update(id, updateDTO);
        res.status(HttpStatus.OK).json({message: "SUCCESS"});
    }
    @Delete(":id")
    async delete(@Param() id:number, @Res() res:Response){
        const check = this.studentService.findOne(id);
        if(check===null){
            return res.status(HttpStatus.BAD_REQUEST).json({message:"Not Found"});
        }
        const result= this.studentService.delete(id);
        res.status(HttpStatus.OK).json({message: "SUCCESS"})
    }
}