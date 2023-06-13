import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './user/student.entity';
import { StudentModule } from './user/student.module';
import { StudentController } from './user/student.controller';
import { StudentService } from './user/student.service';
import { Class } from './class/class.entity';
import { ClassModule } from './class/class.module';
import { DataSource } from 'typeorm';
import { Users } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.entity';
import { DataInitModule } from './init/data.module';
import { AuthModule } from './auth/auth.module';
import { UtilModule } from './util/util.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '123456',
          database:'nestjs',
          entities:[Student,Class,Users,Role],
          synchronize: true,
        };
      },

    }),StudentModule, ClassModule,UsersModule,RoleModule,DataInitModule, AuthModule, UtilModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

