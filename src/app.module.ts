import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [HelloModule, UsersModule, BooksModule, ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
