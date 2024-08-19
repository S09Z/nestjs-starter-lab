import { Injectable } from '@nestjs/common';
import { Book } from '@@/entity/book.entity';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', description: 'Dystopian novel' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'Classic novel' },
  ];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  create(book: Book): Book {
    book.id = this.books.length + 1;
    this.books.push(book);
    return book;
  }
}
