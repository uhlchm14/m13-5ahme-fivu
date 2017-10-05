import * as fs from 'fs';

class Car {
    private kennzeichen: string;
    private _hersteller: string;
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor (kennzeichen: string) {
        this.kennzeichen = kennzeichen;
    }
public getKennzeichen(): string {
    return this.kennzeichen;
}

public set hersteller (value: string)
{
   // if(value === 'Honda')
    // {
      //  throw new Error('Will ich nicht');
    // }
    this.hersteller = value;
}

public get hersteller (): string {
    return this._hersteller;
}
}

const autos: Car[] = []; // new Array();

autos.push(new Car('LB 214RD'));
autos.push(new Car('LB 1303R'));
autos.push(new Car('LB 214DR'));
autos.push(new Car('LB DRR99'));

// autos = [ new Car('LB DRR99'), new Car('LB 99 DRR') ] // andere Variante

for (const a of autos) {
    console.log(a);
}

console.log(autos);

// fs.writeFileSync('C:\\Users\\Dominik\\Documents\\FIV\\m13-5ahme-fivu\\Projekte\\ue03' , JSON.stringify(autos));

try {
    const buffer = fs.readFileSync('C:\\Users\\Dominik\\Documents\\FIV\\m13-5ahme-fivu\\Projekte\\ue03');
    const str = buffer.toString();
    const autos2 = JSON.parse(str);
    console.log(autos2);
} catch (err) {
    console.log('Fehler aufgetreten');
    console.log(err);
}
