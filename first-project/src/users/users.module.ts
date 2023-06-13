import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UsersRepository } from "./users.repository";
import { RoleModule } from "src/role/role.module";
import { UtilModule } from "src/util/util.module";

@Module({
    imports: [TypeOrmModule.forFeature([Users]), RoleModule,  UtilModule],
    controllers: [UsersController],
    providers: [UsersService, UsersRepository],
    exports: [UsersService]
})
export class UsersModule{}