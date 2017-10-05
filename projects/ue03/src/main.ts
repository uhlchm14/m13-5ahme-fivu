
class Car {
    private _kennzeichen: string;
    private _hersteller: string;
    private _modell: string;
    private _baujahr: number;
    private _einsatzbereit: boolean;

    public constructor (kennzeichen: string) {
        this._kennzeichen = kennzeichen;
    }

    public getKennzeichen (): string {
        return this._kennzeichen;
    }

    public set hersteller (value: string) {
        // if (value === 'Honda') {
        //     throw new Error('Will ich nicht');
        // }
        this._hersteller = value;
    }

    public get hersteller (): string {
        return this._hersteller;
    }

}

const autos: Car [] = []; // new Array

autos.push(new Car('DL 677AW'));
autos.push(new Car('DL 732BB'));
autos.push(new Car('DL 5PLB'));
autos.push(new Car('DL 88HH'));

// alternative ....
// autos = [ new Car('DL 11111'), new Car('DL 22222')];

for (const a of autos) {
    console.log(a);
}





console.log(meinAuto.hersteller);
