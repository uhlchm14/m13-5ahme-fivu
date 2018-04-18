import * as fs from 'fs';

class Car
{
    private kennzeichen: string;
    private _hersteller: string;
    private model: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor(kennzeichen: string)
    {
        this.kennzeichen = kennzeichen;

    }

    public getKennzeichen(): string
    {
        return  this.kennzeichen;
    }

    public set hersteller (value: string)
    {
       /* if(value == "Honda")
        {
            throw new Error("Ich hasse das Auto!");
        } */
        this._hersteller = value;
    }

    public get hersteller (): string
    {
        return "Hersteller " + this._hersteller;
    }
}

const autos: Car[] = []; //Feld von car

autos.push(new Car("LB 967EU"));
autos.push(new Car("DL 962EU"));
autos.push(new Car("GU 961EU"));
autos.push(new Car("GU 960EU"));

for(const a of autos)
{
    console.log(a);
}

// console.log(autos);

// fs.writeFileSync('C:\\Users\\User\\Documents\\Schule\\5AHME\\FIVU\\ue03\\autos.json',JSON.stringify(autos));
try
{
    const buffer = fs.readFileSync('C:\\Users\\User\\Documents\\Schule\\5AHME\\FIVU\\ue03\\autos.json');
    const str = buffer.toString();
    const autos2 = JSON.parse(str);
    console.log(autos2);
    //Problem
}
catch(err)
{
    console.log("Fehler aufgetreten!");
    console.log(err);
}
// (<any>meinAuto).hersteller = "SEAT"; nicht gut!
// meinAuto.hersteller = "Seat";
// console.log(meinAuto.hersteller);