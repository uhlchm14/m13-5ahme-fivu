import * as fs from 'fs';

import { Car } from './car';

const car = new Car ({ kennzeichen: 'DL 12345', hersteller: 'Honda'});

const carAsJSON = JSON.stringify(car);
fs.writeFileSync('C:\\Dateien_Windows\\Dateien\\Schule_HTL\\Fiv\\autos.json' , carAsJSON);
