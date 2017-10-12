import * as fs from 'fs';

import { Car } from './car';

const car = new Car ({kennzeichen: 'LB 214DR', hersteller: 'Nissan'});

const carAsJSON = JSON.stringify(car);
fs.writeFileSync('/tmp/data', carAsJSON);
