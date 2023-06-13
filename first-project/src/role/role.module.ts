import { Module } from "@nestjs/common";
import { Role } from "./role.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleRepository } from "./role.repository";

@Module({
    imports:[TypeOrmModule.forFeature([Role])],
    controllers:[],
    providers:[RoleRepository],
    exports:[RoleRepository]
})
export class RoleModule{}