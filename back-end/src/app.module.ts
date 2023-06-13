import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
// import { DataInitModule } from './init/data.module';
// import { AuthModule } from './auth/auth.module';
// import { UtilModule } from './util/util.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

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
          database:'logicstics',
          entities:[User],
          synchronize: true,
        };
      },
    }), UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

