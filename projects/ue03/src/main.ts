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

const mySupiAuto = new Car('LB 123AB');
// (<any>mySupiAuto).hersteller = 'BMW';     //overruling private
mySupiAuto.hersteller = 'Audi';
console.log(mySupiAuto.hersteller);
