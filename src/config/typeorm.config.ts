import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres', // Database type (e.g., 'postgres', 'mysql')
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: configService.get<number>('DB_PORT', 5432),
  username: configService.get<string>('DB_USERNAME', 'postgres'),
  password: configService.get<string>('DB_PASSWORD', 'password'),
  database: configService.get<string>('DB_NAME', 'my_database'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Path to the entities
  synchronize: configService.get<boolean>('DB_SYNC', true), // Auto sync schema in dev; set to false in production
  logging: configService.get<boolean>('DB_LOGGING', true), // Enable logging for debugging purposes
});

