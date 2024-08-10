import { Injectable } from '@nestjs/common';
import { User } from '../../common/interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async findOrCreate(user: User): Promise<User> {
    let foundUser = this.users.find(u => u.email === user.email);
    if (!foundUser) {
      foundUser = { ...user, id: this.users.length + 1 };
      this.users.push(foundUser);
    }
    return foundUser;
  }
}
