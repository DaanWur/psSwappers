import { Injectable } from '@nestjs/common';
import { Rental } from '../models/rental.schema';

@Injectable()
export class RentalService {
  private readonly rental: Rental[] = [];

  create(rental: Rental) {
    this.rental.push(rental);
  }

  findAll(): Rental[] {
    return this.rental;
  }
}
