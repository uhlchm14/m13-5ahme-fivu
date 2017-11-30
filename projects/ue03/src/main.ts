import * as fs from 'fs';

class Car {

    private kennzeichen: string;
    private _hersteller: string;   // Atribute die intern verarbeitet weren bekommen ein _ gekennzeichnet
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor(kennzeichen: string)
    {
        this.kennzeichen = kennzeichen;

    }

    public getKennzeichen(): string
    {
        return this.kennzeichen;
    }

    public set hersteller (value: string)
    {
        if(value == 'Honda')
         {
            throw new Error('Mag ich nicht');
         }
        this._hersteller = value;
    }

    public get hersteller (): string
    {
        return this._hersteller;
    }
}

const autos: Car [] = []; // new Array()

// let auto = new Car('G 75EHB');
// auto.hersteller = 'Honda';
// (<any>meinAuto).hersteller = 'Honda'; // nicht gut (Typecast)

autos.push(new Car('G 75EHB'));
autos.push(new Car('LB 757AG'));
autos.push(new Car('G 11111'));
autos.push(new Car('G 44444'));

// nicht möglich [ new Car('G 5555')] dafür muss das Feld von const auf let sein das es Funktioniert

for (const a of autos)
{
    console.log(a);
}

// console.log(autos);
try {
     fs.writeFileSync('/tmp/autos.json', JSON.stringify(autos));
    const buffer = fs.readFileSync('/tmp/autos.json');

    const str = buffer.toString();

    const autos2 = JSON.parse(str);

    console.log(autos2);
    // Problem: die eingelesenen Obejekte müssen nicht mit der Klassendeklaration übereinstimmt ==> keine automatische 
} catch (err) {
    console.log('Fehler');
    console.log(err);
}

// console.log(meinAuto.hersteller);