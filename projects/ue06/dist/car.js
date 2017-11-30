"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(data) {
        if (!data.kennzeichen || typeof data.kennzeichen !== 'string') {
            throw new Error('Kennzeichen fehlt');
        }
        this._kennzeichen = data.kennzeichen;
        if (!data.hersteller || typeof data.hersteller !== 'string') {
            throw new Error('Hersteller fehlt');
        }
        this._hersteller = data.hersteller;
        if (data.baujahr !== undefined) {
            if (typeof data.baujahr !== 'number') {
                throw new Error('Falscher Datentyp');
            }
            this._baujahr = data.baujahr;
        }
        if (Object.keys(data).length !== Object.keys(this).length) {
            throw new Error('data hat üngültige Attribute');
        }
    }
    get kennzeichen() {
        return this._kennzeichen;
    }
    get hersteller() {
        return this._hersteller;
    }
    get baujahr() {
        return this._baujahr;
    }
    set kennzeichen(value) {
        this._kennzeichen = value;
    }
    set hersteller(value) {
        this._hersteller = value;
    }
    set baujahr(value) {
        this._baujahr = value;
    }
    tooObject() {
        return {
            kennzeichen: this._kennzeichen,
            hersteller: this._hersteller,
            baujahr: this._baujahr
        };
    }
}
exports.Car = Car;

//# sourceMappingURL=car.js.map
