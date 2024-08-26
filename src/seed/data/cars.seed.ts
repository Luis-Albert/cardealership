import { Car } from './../../cars/interface/car.interface';
import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED: Car[] = [
    {
        id: uuidv4(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuidv4(),
        brand: 'Nissan',
        model: 'Kicks'
    },
    {
        id: uuidv4(),
        brand: 'Mazda',
        model: 'CX30'
    },
    {
        id: uuidv4(),
        brand: 'Glory',
        model: '500'
    },
    {
        id: uuidv4(),
        brand: 'Honda',
        model: 'CRV'
    }
]