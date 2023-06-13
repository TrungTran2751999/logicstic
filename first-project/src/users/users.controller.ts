import { Body, Controller, Get, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Response } from "express";
import { Users } from "./users.entity";

@Controller('users')
export class UsersController{
    constructor(
        private readonly userService:UsersService
    ){}
    @Get()
    async findAll(@Res() res:Response){
        const result = await this.userService.findAll();
        res.status(HttpStatus.OK).json(result)
    }
    // @Post('register')
    // async register(@Body() users:Users, @Res() res:Response){
    //     const result = await this.userService.create(users);
    //     return res.status(HttpStatus.OK).json(result);
    // }
    @Get("/name")
    async findBySQL(@Query() query:{name:string}, @Res() res:Response){
        const result = await this.userService.findBySQL(query.name);
        res.status(HttpStatus.OK).json(result)
    }
}