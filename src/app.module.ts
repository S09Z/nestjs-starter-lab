import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HelloModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
