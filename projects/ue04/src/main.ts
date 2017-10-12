import * as fs from 'fs';

import { Car } from './car';

const car = new Car({ kennzeichen: 'DL 12345', hersteller: 'Honda' });

const carAsJSON = JSON.stringify(car.toObject);
fs.writeFileSync('/home/user/Desktop/car.json', carAsJSON);
