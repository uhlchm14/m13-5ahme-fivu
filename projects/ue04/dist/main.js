"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const car_1 = require(".//car");
const car = new car_1.Car({ kennzeichen: 'GU 12345', hersteller: 'SEAT' });
const carAsJSON = JSON.stringify(car.tooObject());
fs.writeFileSync('C:/Users/User/Documents/Schule/Klassen/5.Jg/FIVU/m13-5ahme-fivu/files/car.json', carAsJSON);

//# sourceMappingURL=main.js.map
