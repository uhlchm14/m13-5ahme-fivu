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
    setKennzeichen(value) {
        return this.kennzeichen = value;
    }
    get getHersteller() {
        return this.hersteller;
    }
}
const autos = [];
autos.push(new Car('GU 12345'));
autos.push(new Car('GU 66666'));
autos.push(new Car('GU 11111'));
autos.push(new Car('GU 22222'));
for (const a of autos) {
    console.log(a);
}
try {
    const buffer = fs.readFileSync('C://Users//User//Documents//Schule//Klassen//5.Jg//FIVU//m13-5ahme-fivu//files//autos.json');
    const str = buffer.toString();
    const autos2 = JSON.parse(str);
    console.log(autos2);
}
catch (error) {
    console.log('Fehler aufgetreten');
    console.log(error);
}

//# sourceMappingURL=main.js.map
