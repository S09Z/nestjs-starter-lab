import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('hello')
export class HelloController {
    @Get()
    getHello(@Res() res: Response) {
        res.status(HttpStatus.OK).json({ message: 'Hello World!' });
    }
}
