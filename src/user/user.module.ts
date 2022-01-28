import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import {UserService} from './user.service';
import {UserController} from './user.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'USER', schema: UserSchema }])],
  controllers:[UserController],
  providers: [UserService],
})
export class UserModule {}
