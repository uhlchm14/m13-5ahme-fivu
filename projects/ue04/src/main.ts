import * as fs from 'fs';
import { Car } from './car';

const car = new Car({ kennzeichen: 'GU 69', hersteller: 'Honda' });

const carAsJSON = JSON.stringify(car.toObject());
fs.writeFileSync('./tmp/car.json', carAsJSON);
