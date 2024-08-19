import { Injectable } from '@nestjs/common';
import { Review } from '@@/entity/review.entity';

@Injectable()
export class ReviewsService {
  private readonly reviews: Review[] = [
    { id: 1, bookId: 1, reviewer: 'John Doe', content: 'Great book!', rating: 5 },
    { id: 2, bookId: 1, reviewer: 'Jane Doe', content: 'Enjoyed it.', rating: 4 },
  ];

  findAll(): Review[] {
    return this.reviews;
  }

  findOne(id: number): Review | undefined {
    return this.reviews.find(review => review.id === id);
  }

  findByBookId(bookId: number): Review[] {
    return this.reviews.filter(review => review.bookId === bookId);
  }

  create(review: Review): Review {
    review.id = this.reviews.length + 1;
    this.reviews.push(review);
    return review;
  }

  update(id: number, updatedReview: Review): Review | undefined {
    const reviewIndex = this.reviews.findIndex(review => review.id === id);
    if (reviewIndex > -1) {
      this.reviews[reviewIndex] = { ...this.reviews[reviewIndex], ...updatedReview };
      return this.reviews[reviewIndex];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const reviewIndex = this.reviews.findIndex(review => review.id === id);
    if (reviewIndex > -1) {
      this.reviews.splice(reviewIndex, 1);
      return true;
    }
    return false;
  }
}
