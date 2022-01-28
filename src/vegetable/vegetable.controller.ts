import { Controller, Get, Res, HttpStatus, Post, Body, Param,Req, Delete,UseGuards } from '@nestjs/common';
import { VegetableService } from './vegetable.service';
import { VegetableDTO } from './vegetable.dto';
import RoleGuard from './../auth/role.guard';
import Role from './../auth/role.enum';
import {JwtAuthGuard} from './../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('vegetable')
export class VegetableController {
  constructor(private readonly vegetableService: VegetableService) {}
  

 // @UseGuards(RoleGuard(Role.Admin))
  @Get('all')
    async getAllVegetables(@Res() res) {
        const vegetables = await this.vegetableService.getAllVegetable();
        return res.status(HttpStatus.OK).json(vegetables);
    }

    @Get(':id')
  async findVegetableBasedOnId(@Param('id') id: string) {
    return this.vegetableService.findOne(id);
  }

  async findVegetableBasedOnName(@Param('name') name: string) {
    return this.vegetableService.findOneByName(name);
  }

    @Post('/create')
    async addVegetableDetails(@Body() vegetableDTO: VegetableDTO) {
        const customer = await this.vegetableService.addVegetable(vegetableDTO);
        return  customer;
        }

    @Post('/update/:id')
    async  createAndUpdateVegetableDetails(@Body() VegetableDTO: VegetableDTO, @Param() urlParams) {
      if(this.findVegetableBasedOnName(VegetableDTO.name)!=null)
      {
        return await this.vegetableService.updateVegetable(urlParams.id,VegetableDTO);
      }
      else{
        return this.addVegetableDetails(VegetableDTO);
      }

      }

    @Delete('/delete/:id')
    async delete(@Param('id') id): Promise<any> {
      return this.vegetableService.deleteById(id);
    } 
    }

