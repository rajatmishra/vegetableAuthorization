import { Module } from '@nestjs/common';
import { VegetableController } from './vegetable.controller';
import { VegetableService } from './vegetable.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VegetableSchema } from './vegetable.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Vegetable', schema: VegetableSchema }])],
  controllers: [VegetableController],
  providers: [VegetableService],
})
export class VegetableModule {}
