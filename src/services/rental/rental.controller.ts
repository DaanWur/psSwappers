import { Controller, Get, Post, Body } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Rental } from '../models/rental.schema';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
  constructor(private rentalService: RentalService) {}

  @Post()
  async create(@Body() createRental: Rental) {
    this.rentalService.create(createRental);
  }

  @Get()
  async findAll(): Promise<Rental[]> {
    return this.rentalService.findAll();
  }
}
