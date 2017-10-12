import * as fs from 'fs';

import {Car} from './car';

const car = new Car({kennzeichen: 'Ra 1111', hersteller: 'VW'});

const carAsJSON = JSON.stringify(car);
fs.writeFileSync('./tmp/car.json', carAsJSON);