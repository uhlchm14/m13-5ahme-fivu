
export class Car implements ICar 
{
    private _kennzeichen: string;
    private _hersteller: string;
    private _farbe: 'rot' | 'blau' | 'grün'; 
    private _baujahr: number; 

    constructor (data: ICar)
        {
            if (!data.kennzeichen || typeof data.kennzeichen !== 'string')
            {
                throw new Error('Kennzeichen bimst net da!');  
            }
            this._kennzeichen = data.kennzeichen;

            if (typeof data.hersteller !== 'string')
            {
                throw new Error('Hersteller bimst net da!');  
            }
            this._hersteller = data.hersteller;

            if (data.farbe !== undefined)
            {
                if (data.farbe !== 'rot' && data.farbe !== 'blau' && data.farbe !== 'grün')
                {
                    throw new Error('farbe hat falschen wert'); 
                }
                this._farbe = data.farbe; 
            }

            if (data.baujahr !== undefined)
            {
                if (typeof data.baujahr !== 'number')
                {
                    throw new Error('Baujahr bimst ka numma!');  
                }
                this._baujahr = data.baujahr;
            }

            if (Object.keys(data).length !== Object.keys(this).length)
            {
                throw new Error('data hat ungültige Attribute'); 
            }

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

    public get farbe(): 'rot' | 'blau' | 'grün'
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

    public set farbe (f: 'rot' | 'blau' | 'grün')
    {
        this._farbe = value; 
    }
     
     
    public toObject(): ICar
     {
        const rv: ICar =  
        {
            kennzeichen: this._kennzeichen,
            hersteller: this._hersteller,
        };
        if (this.baujahr)
        {
            rv.baujahr = this._baujahr; 
        }

        return rv; 
    }
}

export interface ICar
{
    kennzeichen: string;
    hersteller: string;
    farbe: 'rot' | 'blau' | 'grün'; 
    baujahr?: number; // ? ... optianales Attribut, es muss nicht angegeben werden
}