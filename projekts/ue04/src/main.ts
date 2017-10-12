import * as fs from 'fs';

import {Car} from './car';

const car = new Car({kennzeichen: 'Ra 1111', hersteller: 'VW'});

const carAsJSON = JSON.stringify(car.toObject);
fs.writeFileSync('./tmp/car.json', carAsJSON);