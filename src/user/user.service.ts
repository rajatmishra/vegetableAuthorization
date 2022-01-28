import {UserInterface} from './user.interface';
import { Model,Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import {UserDTO} from './user.dto'


@Injectable()
export class UserService {

  constructor(@InjectModel('USER') private readonly userModel: Model<UserInterface>) { }

  async create(UserDTO: UserDTO) {
    const user =  new this.userModel(UserDTO);
    await user.save();
    delete user.password;
    return user;
  }

  async update(UserDTO: UserDTO) {
    const existingUser =this.findByEmail(UserDTO.email);
    const user =await  new this.userModel(existingUser);
    user.password=UserDTO.password;
    await user.save();
    delete user.password;
    return user;
  }

  async delete(UserDTO: UserDTO) {
    const existingUser =this.findByEmail(UserDTO.email);
    const user =  new this.userModel(existingUser);
    await user.delete(user._id);
    return "deleted";
  }

  async showById(id: number): Promise<UserInterface> {
    const user = await this.userModel.findById(id);
    delete user.password;
    return user;
  }

  async findByEmail(email) {
    return await this.userModel.findOne({email});
  }
}
