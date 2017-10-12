import * as fs from 'fs';
import { Car } from './car';

const car = new Car({kennzeichen: 'GU 210FC', hersteller: 'Peugeot'});
console.log(car);
const carAsJSON = JSON.stringify(car.toObject);
console.log(carAsJSON);
fs.writeFileSync('car.json',carAsJSON);