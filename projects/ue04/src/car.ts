export class Car implements ICar{

    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;
    private _farbe: string;

    constructor(data: ICar) {
        if (!data.kennzeichen || typeof data.kennzeichen !== 'string') {
            throw new Error('kennzeichen fehlt oder ist leer');
        }
        this._kennzeichen = data.kennzeichen;

        if(typeof data.hersteller !== 'string')
        {
            throw new Error ('Hersteller fehlt');
        }
        this._hersteller = data.hersteller;

        if(data.baujahr !== undefined)
        {
            if(typeof data.baujahr !== 'number')
            {
                throw new Error ('Falscher Datentyp');
            }
            this.baujahr = data.baujahr; 
        }
        

        if(Object.keys(data).length !== Object.keys(this).length)
        {
            throw new Error ('data hat üngültige Attribute');
        }

        // Object.keys(data).length; // anzahl der Antribute in Objekt 
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
    public get farbe(): string
    {
        return this._farbe;
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



    public toObject(): ICar {
        const rv: ICar = {kennzeichen: this._kennzeichen, hersteller: this._hersteller};
        if (this._baujahr) {
            rv.baujahr = this._baujahr;
        }
        if (this._farbe) {
            rv.farbe = this._farbe;
        }
        return rv;
    }

}

export interface ICar{

    kennzeichen: string;
    hersteller: string;
    farbe: 'rot' | 'blau' | 'gelb';
    baujahr?: number;
}
