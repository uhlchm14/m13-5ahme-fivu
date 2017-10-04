
class Car {
    private kennzeichen: string;
    private _hersteller: string;
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;
    
    public constructor (kennzeichen)
    {
        this.kennzeichen = kennzeichen;
    }

public getKennzeichen(): string
{
    return this.kennzeichen;
}

public set hersteller (value: string)
{
    this.hersteller = value;
}

public get hersteller (): string 
{
    return this._hersteller;
}
}
const meinAuto = new Car('LB 214 RD');
meinAuto.hersteller = 'Nissan';

console.log(meinAuto.hersteller);