import { Injectable } from '@nestjs/common';
import { User } from '@@/entity/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id) ?? { id: 0, name: '', email: '' };
  }
}
