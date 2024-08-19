import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from '@@/entity/review.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  findAll(): Review[] {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Review | undefined {
    return this.reviewsService.findOne(+id);
  }

  @Get('book/:bookId')
  findByBookId(@Param('bookId') bookId: string): Review[] {
    return this.reviewsService.findByBookId(+bookId);
  }

  @Post()
  create(@Body() review: Review): Review {
    return this.reviewsService.create(review);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() review: Review): Review | undefined {
    return this.reviewsService.update(+id, review);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.reviewsService.delete(+id);
  }
}
