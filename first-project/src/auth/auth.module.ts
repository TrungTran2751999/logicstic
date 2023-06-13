import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import {JwtModule} from '@nestjs/jwt';
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { RoleGuard } from "src/role.guard";
import { UserDTO } from "src/dto/userDTO";
import { RoleModule } from "src/role/role.module";
import { UsersService } from "src/users/users.service";
import { UtilModule } from "src/util/util.module";
@Module({
    imports:[PassportModule, UsersModule, RoleGuard, RoleModule, UtilModule,
        JwtModule.register({
            global:true,
            secret: "key",
            signOptions: { expiresIn: '60s' },
        })
    ],
    controllers:[AuthController],
    providers:[LocalStrategy, AuthService, JwtStrategy]
})
export class AuthModule{}
