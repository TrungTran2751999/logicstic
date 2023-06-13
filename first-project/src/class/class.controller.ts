import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { ClassService } from "./class.service";
import { Response } from "express";
import { Class } from "./class.entity";

@Controller('class')
export class ClassController{
    constructor(
        private classService:ClassService
    ){}
    @Get()
    async findAll(@Res() res:Response){
        const result = await this.classService.findAll();
        res.status(HttpStatus.OK).json(result);
    }
    @Get(':id')
    async findById(@Param() id:number, @Res() res:Response){
        const result = await this.classService.findById(id)
        res.status(HttpStatus.OK).json(result);
    }
    @Post()
    async create(@Body() createDTO:Class, @Res() res:Response){
        const result = await this.classService.create(createDTO)
        res.status(HttpStatus.OK).json(result);
    }
    @Put(':id')
    async update(@Param() id:number,@Body() updateDTO:Class, @Res() res:Response){
        const result = this.classService.update(id, updateDTO);
        res.status(HttpStatus.OK).json(result);
    }
}