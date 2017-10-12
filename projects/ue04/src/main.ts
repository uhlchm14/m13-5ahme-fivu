import * as fs from 'fs';
import { Car } from './/car';

const car = new Car({kennzeichen: 'GU 12345', hersteller: 'SEAT'});

const carAsJSON = JSON.stringify(car);
fs.writeFileSync('C:/Users/User/Documents/Schule/Klassen/5.Jg/FIVU/m13-5ahme-fivu/files/car.json', carAsJSON);
