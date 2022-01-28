import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDTO } from './auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() authDTO: AuthDTO) {
    return this.authService.login(authDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return 'Authenticated!';
  }
}