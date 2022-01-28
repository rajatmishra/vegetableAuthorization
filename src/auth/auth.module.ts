
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UserModule } from './../user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserService} from './../user/user.service';
import {UserInterface} from './../user/user.interface';
import {UserSchema} from './../user/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret:'abc',
      })
    }),
    MongooseModule.forFeature([{ name: 'USER', schema: UserSchema }])
   
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserService],
})
export class AuthModule {}