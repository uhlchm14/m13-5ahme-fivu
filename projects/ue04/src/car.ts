
export class Car
{
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number; 

    constructor (data: ICar)
        {
            if (!data.kennzeichen || typeof data.kennzeichen !== 'string')
            {
                throw new Error('Kennzeichen bimst net da!');  
            }
            this._kennzeichen = data.kennzeichen; 

           // Object.keys(data).length; //Anzahl der Attribute
           //Object.keys(data) //Attribute als Feld

        }

    public get hersteller (): string
    {
        return this._hersteller; 
    }

    public get kennzeichen(): string
    {
        return this._kennzeichen; 
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

interface ICar
{
    kennzeichen: string;
    hersteller: string;
    baujahr?: number; // ? ... optianales Attribut, es muss nicht angegeben werden
}