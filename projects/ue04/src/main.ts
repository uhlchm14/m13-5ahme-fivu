import * as fs from 'fs';

class Car {
    private kennzeichen: string;
    private _hersteller: string;    // Für Namenskonflikte: private Datenelemente mit '_' kennzeichnen
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor(kennzeichen: string) {
        this.kennzeichen = kennzeichen;
    }

    public getKennzeichen (): string {
        return this.kennzeichen;
    }

    public set hersteller(value: string) {
        this._hersteller = value;
        if (value === 'Honda') {
            throw new Error('Mag ich net!');
        }
    }

    public get hersteller(): string {
        return this._hersteller + ', der beste Hersteller';
    }
}

const autos: Car[] = [];

autos.push(new Car('GU 754'));
autos.push(new Car('GU 666'));
autos.push(new Car('GU 88'));
autos.push(new Car('GU 69'));
autos.push(new Car('GU 1234'));

// autos = [ new Car('GU 1111'), new Car('GU 2222') ];

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
} catch (err) {
    console.log('Fehler aufgetreten');
    console.log(err);
}

