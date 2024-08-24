import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['toyota', 'nissan', 'mazda'];

    @Get()
    getAllCars() {
        return this.cars
    }

    @Get(':id')
    getCartById(@Param('id') id: string) {
        console.log({ id })
        return this.cars[id]
    }
}
