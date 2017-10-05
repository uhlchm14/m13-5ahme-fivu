"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Car {
    constructor(kennzeichen) {
        this.kennzeichen = kennzeichen;
    }
    getKennzeichen() {
        return this.kennzeichen;
    }
    set hersteller(value) {
        this._hersteller = value;
    }
    get hersteller() {
        return this._hersteller;
    }
}
const autos = [];
autos.push(new Car('DL 12345'));
autos.push(new Car('DL 54321'));
autos.push(new Car('DL 32145'));
autos.push(new Car('DL 54123'));
for (const a of autos) {
    console.log(a);
}
const buffer = fs.readFileSync('C:\\Dateien_Windows\\Dateien\\Schule_HTL\\Fiv\\autos.json');
const str = buffer.toString();
const autos2 = JSON.parse(str);
console.log(autos2);

//# sourceMappingURL=main.js.map
