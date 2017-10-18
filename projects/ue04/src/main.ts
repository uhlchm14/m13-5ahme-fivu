import * as fs from 'fs';
import {Car} from './car';

const car = new Car({kennzeichen: 'LB 123', hersteller: 'Audi'});

const carAsJSON = JSON.stringify(car.toObject());
fs.writeFileSync('C:\\Schule\\5AHME\\FIVU\\autos.json', carAsJSON);
