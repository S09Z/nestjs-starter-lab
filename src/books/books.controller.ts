import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@@/entity/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Book | undefined {
    return this.booksService.findOne(+id);
  }

  @Post()
  create(@Body() book: Book): Book {
    return this.booksService.create(book);
  }
}
