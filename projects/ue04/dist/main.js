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
const meinAuto = new Car('DL 12345');
meinAuto.hersteller = 'Honda';
console.log(meinAuto.hersteller);

//# sourceMappingURL=main.js.map
