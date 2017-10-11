import * as fs from 'fs';

class Car
{
    private kennzeichen: string;
    private _hersteller: string;
    private modell: string;
    private farbe: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor (kennzeichen: string)
    {
        this.kennzeichen = kennzeichen;
    }

    public getKennzeichen(): string
    {
        return this.kennzeichen;
    }

    public set hersteller(value: string)
    {
        this._hersteller = value;
    }

    public get hersteller(): string
    {
        return this._hersteller + ' is supa';
    }
}

const autos: Car [] = [];

autos.push(new Car('LB 123AB'));
autos.push(new Car('LB 123CD'));
autos.push(new Car('LB 123EF'));
autos.push(new Car('LB 123GH'));
autos.push(new Car('LB 123IJ'));

for (const a of autos)
{
    console.log(a);
}

fs.writeFileSync('C:\\Schule\\5AHME\\FIVU\\autos.json', JSON.stringify(autos));

try
{
    const buffer = fs.readFileSync('C:\\Schule\\5AHME\\FIVU\\autos.json');
    const str = buffer.toString();
    const autos2 = JSON.parse(str);  // eingelesener String wird nicht auf Kompatibilität mit Klasse Car geprüft
    console.log(autos2);
}
catch (err)
{
    console.log('I bims 1 Fehler');
    console.log(err);
}
