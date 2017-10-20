import * as fs from 'fs'; 
import {Car} from './car';

const car = new Car({kennzeichen: 'DL 1234', hersteller: 'Audi'});

const carAsJSON = JSON.stringify(car); 
fs.writeFileSync('C:\\Users\\Florian\\Desktop\\carAsJSON.json',carAsJSON);