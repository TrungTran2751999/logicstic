// import { Injectable } from "@nestjs/common";
// import { UserDTO } from "src/dto/userDTO";
// import { Role } from "src/role/role.entity";
// import { Users } from "src/users/users.entity";

// @Injectable()
// export class UtilService{
//     async userDTOtoUsers(userDTO:UserDTO, role:Role):Promise<Users>{
//         let user:Users = new Users();
//         user.name=userDTO.username;
//         user.password = userDTO.password;
//         user.role=role;
//         return user;
//     }
// }