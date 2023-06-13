// import { Injectable } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";
// import { Users } from "src/users/users.entity";

// @Injectable()
// export class AuthService{
//     constructor(
//         private readonly jwtService:JwtService
//     ){}
//     generateToken(param:Users):any{
//         return this.jwtService.sign({name:param.name, password:param.password, role:param.role.name});
//     }
// }