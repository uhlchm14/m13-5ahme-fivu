class Car {

    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

    constructor(kennzeichen: string, hersteller: string, baujahr: number) {
        this._kennzeichen = kennzeichen;
        this._hersteller = hersteller;
        this._baujahr = baujahr;
 }

    public get kennzeichen (): string {
        return this._kennzeichen;
    }

    public get hersteller (): string {
        return this._hersteller;
    }

    public get baujahr (): number {
        return this._baujahr;
    }

    public set kennzeichen (value: string) {
       this._kennzeichen = value;
    }

    public set hersteller(value: string) {
       this._hersteller = value;
    }

     public set baujahr(value: number) {
       this._baujahr = value;
    }
}

interface ICar {
    kennzeichen: string;
    hersteller: string;
    baujahr?: number;
}
