import * as fs from 'fs';

class Car {
    private kennzeichen: string;
    private _hersteller: string;    // Für Namenskonflikte: private Variable mit _ kennzeichnen
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
        if (value === 'VW') {
            throw new Error('Kein VW!');
        }
    }

    public get hersteller(): string {
        return this._hersteller + ', der beste Hersteller';
    }
}

let autos: Car[] = [];

autos.push(new Car('RA 1111'));
autos.push(new Car('RA 2222'));
autos.push(new Car('RA 3333'));
autos.push(new Car('RA 4444'));


for (const a of autos){
    console.log(a);
}

//console.log(autos);

fs.writeFileSync('./dist/autos.json', JSON.stringify(autos));

try{
const buffer = fs.readFileSync('./dist/autos.json');
const str = buffer.toString();
const autos2 = JSON.parse(str);
console.log(autos2);
} catch(err) {
    console.log('Fehler aufgetreten');
    console.log(err);
}
