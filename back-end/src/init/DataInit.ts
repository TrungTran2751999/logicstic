// import { Injectable, OnModuleInit  } from "@nestjs/common";
// import { async } from "rxjs";
// import { Role } from "src/role/role.entity";
// import { RoleRepository } from "src/role/role.repository";
// import {DataSource} from 'typeorm';

// @Injectable()
// export class DataInit implements OnModuleInit{
//     constructor(
//         private dataSource:DataSource,
//         private roleRepository:RoleRepository
//     ){}
//     async onModuleInit() {
//         let count = await this.roleRepository.countRow();
//         if(count===0){
//             await this.dataSource.transaction(async (manager)=>{
//                 let roleList:Role[] = [
//                     new Role(null, 'ADMIN'),
//                     new Role(null, 'USERS'),
//                 ]
//                 for(let i:number = 0; i<roleList.length; i++){
//                     await manager.save(roleList[i]);
//                 }
//             })
//         }
//     }
// }