import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCartById(@Param('id', ParseIntPipe) id: number) {
        console.log({ id })
        return this.carsService.findOneById(id)
    }

    @Post()
    create() {
        return {
            ok: true,
            method: 'POST'
        }
    }
}
