export class Car
{
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

    constructor(data: ICar)
    {
        if(!data.kennzeichen || typeof data.kennzeichen !== 'string')
        {
                throw new Error("Kennzeichen fehlt!");
        }
        this._kennzeichen = data.kennzeichen;

        if(!data.hersteller || typeof data.hersteller !== 'string')
        {
                throw new Error("Hersteller fehlt!");
        }
        this._hersteller = data.hersteller;

        if(!data.baujahr || typeof data.baujahr !== 'string')
        {
                throw new Error("Baujahr fehlt!");
        }
        // this._baujahr = data.baujahr;

        // Object.keys(data).length; // Anzahl der Attribute in data
        // Object.keys(data) Attribute als Feld
    }

    public get kennzeichen(): string
    {
        return this._kennzeichen;
    }
    public get hersteller(): string
    {
        return this._hersteller
    }
    public get baujahr(): number
    {
        return this._baujahr;
    }

    public set kennzeichen(value: string)
    {
        this._kennzeichen = value;
    }

    public set hersteller(value: string)
    {
        this._hersteller = value;
    } 

    public set baujahr(value: number)
    {
        this._baujahr = value;
    } 

}

export interface ICar // Interface erstellen
{
    kennzeichen: string;
    hersteller: string;
    baujahr?: string; // Baujahr muss nicht angegeben werden
}