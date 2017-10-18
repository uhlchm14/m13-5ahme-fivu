import * as fs from 'fs';
import {Car} from './/car';

const car = new Car ({kennzeichen: 'LB 967EU', hersteller: 'Seat'});

const carAsJSON = JSON.stringify(car.toObject());
fs.writeFileSync('C:/Users/User/Documents/Schule/5AHME/FIVU/ue04/car.json', carAsJSON);
