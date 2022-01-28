import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserInterface } from './../user/user.interface';
import { UserService } from './../user/user.service';
import { AuthDTO } from './auth.dto';
import { Hash } from './../utils/Hash';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(authDTO: AuthDTO) {
    const user = await this.validateUser(authDTO);

    const payload = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(authDTO: AuthDTO): Promise<UserInterface> {
    const { email, password } = authDTO;

    const user = await this.userService.findByEmail(email);
    if (!user || password!=user.password) {
      throw new UnauthorizedException('Invalid credentials!');
    }

    return user;
  }
  
}