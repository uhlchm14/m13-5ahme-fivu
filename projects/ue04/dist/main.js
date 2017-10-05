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
        if (value === 'Honda') {
            throw new Error('Mag ich net!');
        }
    }
    get hersteller() {
        return this._hersteller + ', der beste Hersteller';
    }
}
const autos = [];
autos.push(new Car('GU 754'));
autos.push(new Car('GU 666'));
autos.push(new Car('GU 88'));
autos.push(new Car('GU 69'));
autos.push(new Car('GU 1234'));
for (const a of autos) {
    console.log(a);
}
console.log(autos);
fs.writeFileSync('./dist/autos.json', JSON.stringify(autos));
try {
    const buffer = fs.readFileSync('./autos.json');
    const str = buffer.toString();
    const autos2 = JSON.parse(str);
    console.log(autos2);
}
catch (err) {
    console.log('Fehler aufgetreten');
    console.log(err);
}

//# sourceMappingURL=main.js.map
