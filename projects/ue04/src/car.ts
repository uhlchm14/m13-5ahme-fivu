export class Car
{
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

    constructor (data: ICar)
    {
        if (!data.kennzeichen || typeof data.kennzeichen !== 'string')
        {
            throw new Error('Kennzeichen fehlt');
        }
        this._kennzeichen = data.kennzeichen;

        if( Object.keys(data).length > 3){}
    }

    public get kennzeichen (): string
    {
        return this._kennzeichen;
    }

    public get hersteller (): string
    {
        return this._hersteller;
    }
    public get baujahr (): number
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

export interface ICar
{
    kennzeichen: string;
    hersteller: string;
    baujahr?: number;
}