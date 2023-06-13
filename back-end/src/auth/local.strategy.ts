// import { Injectable, UnauthorizedException } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import {Strategy} from "passport-local";
// import { Users } from "src/users/users.entity";
// import { UsersService } from "src/users/users.service";
// import * as bscypt from 'bcrypt';
// import { ExtractJwt } from "passport-jwt";
// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy){
//     constructor(
//         private userService:UsersService
//     ){
//         super();
//     }
//     async validate(username:string, password:string):Promise<Users>{
//         const checkExist:Users[] = await this.userService.findByName(username);
//         if(checkExist.length===0) throw new UnauthorizedException();
        
//         if(checkExist[0]!==undefined && await bscypt.compare(password,checkExist[0].password)){
//             return checkExist[0];
//         }else{
//             throw new UnauthorizedException();
//         }
//     }
// }