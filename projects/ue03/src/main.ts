import * as  fs from 'fs';

class Car {
    private kennzeichen: string;
    private hersteller: string;
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor (kennzeichen: string) {
        this.kennzeichen = kennzeichen;
    }

    public getKennzeichen (): string {
        return  this.kennzeichen;
    }


    public setKennzeichen(value: string) {
        return this.kennzeichen = value;
    }

    public get getHersteller(): string {
        return this.hersteller;
    }
}

const autos: Car [] = [];
autos.push(new Car('GU 12345'));
autos.push(new Car('GU 66666'));
autos.push(new Car('GU 11111'));
autos.push(new Car('GU 22222'));

for (const a of autos)
{
    console.log(a);
}

console.log(autos);

fs.writeFileSync('C://Users//User//Documents//Schule//Klassen//5.Jg//FIVU//m13-5ahme-fivu//files//autos.json', JSON.stringify(autos));

const buffer = fs.readFileSync('C://Users//User//Documents//Schule//Klassen//5.Jg//FIVU//m13-5ahme-fivu//files//autos.json');
