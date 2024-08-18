// auth/dto/login.dto.ts
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;s
}

// auth/dto/token.dto.ts
export class TokenDto {
  accessToken: string;
  refreshToken: string;
}
