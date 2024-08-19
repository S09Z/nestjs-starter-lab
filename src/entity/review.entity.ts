export class Review {
    id!: number;
    bookId!: number; // The ID of the book being reviewed
    reviewer!: string;
    content!: string;
    rating!: number; // Rating out of 5
  }
  