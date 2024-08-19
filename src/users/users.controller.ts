import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string[]{
        return ['User 1', 'User 2', 'User 3'];
    }
}
