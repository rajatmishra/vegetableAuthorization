import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO} from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  create(@Body() UserDTO: UserDTO) {
    return this.userService.create(UserDTO);
  }

  @Post('/update')
  update(@Body() UserDTO: UserDTO) {
    return this.userService.update(UserDTO);
  }

  @Post('/delete')
  delete(@Body() UserDTO: UserDTO) {
    return this.userService.delete(UserDTO);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.userService.showById(+id);
  }
}