import * as fs from 'fs';

import {Car} from './car';

const car = new Car ({kennzeichen: 'Dl 2323', hersteller: 'Honda', baujahr: 1717});


const obj = car.toObject;
fs.writeFileSync('/tmp/data', JSON.stringify(obj));