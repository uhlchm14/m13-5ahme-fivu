

class Car {

    private kennzeichen: string;
    private _hersteller: string;   // Atribute die intern verarbeitet weren bekommen ein _
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
        this._hersteller = value;
    }

    public get hersteller (): string
    {
        return this._hersteller;
    }
}

const meinAuto = new Car('G 75EHB');
meinAuto.hersteller = 'Honda';
// (<any>meinAuto).hersteller = 'Honda'; // nicht gut (Typecast)

console.log(meinAuto.hersteller);