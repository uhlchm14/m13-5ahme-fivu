class Car {
    private kennzeichen: string;
    private _hersteller: string;
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor(kennzeichen: string) {
        this.kennzeichen = kennzeichen;
    }

    public getKennzeichen (): string {
        return this.kennzeichen;
    }

    public set hersteller(value: string)
    {
        this._hersteller = value;
    }

    public get hersteller (): string {
        return this._hersteller;
    }
}

const meinAuto = new Car ('DL 12345');
meinAuto.hersteller = 'Honda';

console.log(meinAuto.hersteller);
