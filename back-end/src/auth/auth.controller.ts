// import { Body, Controller, HttpStatus, Post, Request, Res, UseGuards } from "@nestjs/common";
// import { AuthGuard } from "@nestjs/passport";
// import { AuthService } from "./auth.service";
// import { Users } from "src/users/users.entity";
// import { RoleGuard } from "src/role.guard";
// import { UsersService } from "src/users/users.service";
// import { RoleRepository } from "src/role/role.repository";
// import { UserDTO } from "src/dto/userDTO";
// import { Response } from "express";

// @Controller('/api/auth')
// export class AuthController{
//     constructor(
//         private authService:AuthService,
//         private userService:UsersService,
//     ){}
//     @Post('/login')
//     @UseGuards(AuthGuard('local'))
//     async login(@Request() req){
//         let user = await this.userService.findById(req.user.id);
//         const result = this.authService.generateToken(user);
//         return result;
//     }
//     @Post("/loginadmin")
//     @UseGuards(AuthGuard('jwt'),new RoleGuard(["ADMIN", "USERS"]))
//     loginAdmin():string{
//         return "login Admin andd Users";
//     }
//     @Post("/loginuser")
//     @UseGuards(AuthGuard('jwt'),new RoleGuard(["USERS"]))
//     loginUser():string{
//         return "login User";
//     }
//     @Post('/register')
//     async register(@Body() userDTO:UserDTO, @Res() res:Response){
//         let result = await this.userService.create(userDTO);
//         res.status(HttpStatus.OK).json(result);
//     }
// }