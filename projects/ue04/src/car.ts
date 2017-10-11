export class Car {

    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

    constructor(data: ICar) {
        if (!data.kennzeichen || typeof data.kennzeichen !== 'string') {
            throw new Error('kennzeichen fehlt');
        }
        this._kennzeichen = data.kennzeichen;

        Object.keys(data).length; // anzahl der Antribute in Objekt 
    }


    public get kennzeichen(): string
    {
        return this._kennzeichen;
    }
    public get hersteller(): string
    {
        return this._hersteller;
    }
    public get baujahr(): number

    {
        return this._baujahr;
    }

    public set kennzeichen (value: string) 
    {
         this._kennzeichen = value;
    }
    public set hersteller (value: string)
    {
        this._hersteller = value;
    }

    public set baujahr (value: number) 
    {
        this._baujahr = value;
    }
}

export interface ICar{

    kennzeichen: string;
    hersteller: string;
    baujahr?: number;
}
