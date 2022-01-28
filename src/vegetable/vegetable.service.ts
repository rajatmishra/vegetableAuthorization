import { Injectable } from '@nestjs/common';
import { Model,Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Vegetable} from './vegetable.interface';
import {VegetableDTO} from './vegetable.dto';


@Injectable()
export class VegetableService {

  constructor(@InjectModel('Vegetable') private readonly vegetableModel: Model<Vegetable>) { }

  async getAllVegetable(): Promise<Vegetable[]> {
    const vegetable = await this.vegetableModel.find().exec();
    return vegetable;
}

 async addVegetable(VegetableDTO: VegetableDTO): Promise<Vegetable> {
    const newCustomer =  new this.vegetableModel(VegetableDTO);
    return newCustomer.save();
}

async updateVegetable(id,VegetableDTO: VegetableDTO): Promise<Vegetable> {
  const newCustomer =  new this.vegetableModel(VegetableDTO);
  return await this.vegetableModel.findByIdAndUpdate(id, VegetableDTO, { new: true });
 // return newCustomer.update();
}

  async findOne(id) {
    var mid = Types.ObjectId(id);
    const vegetable = await  this.vegetableModel.findById({_id:mid}).exec();
    return vegetable;
  }

  async findOneByName(name) {
    const vegetable = await  this.vegetableModel.findById(name).exec();
    return vegetable;
  }

  async deleteById(id) {
    var mid = Types.ObjectId(id);
    const vegetable = await  this.vegetableModel.findByIdAndDelete({_id:mid});
    return vegetable;
  }
}
