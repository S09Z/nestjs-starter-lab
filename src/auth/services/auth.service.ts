import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/services/users.service';
import { User } from '@/common/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateOAuthLogin(user: User): Promise<string> {
    const foundUser = await this.usersService.findOrCreate(user);
    if (!foundUser) {
      throw new UnauthorizedException();
    }
    const payload = { email: foundUser.email, sub: foundUser.id };
    return this.jwtService.sign(payload);
  }

  async login(user: User): Promise<any> {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
