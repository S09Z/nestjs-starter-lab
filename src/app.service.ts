import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getPort(): string {
    // Safely get the port value with a fallback default
    return this.configService.get<string>('PORT', '3000');
  }

  getDatabaseUrl(): string {
    // Safely get the DATABASE_URL environment variable
    return this.configService.get<string>('DATABASE_URL');
  }
}
