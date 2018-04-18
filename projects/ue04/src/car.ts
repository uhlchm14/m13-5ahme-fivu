export class Car implements ICar
{
    private _kennzeichen: string;
    private _hersteller: string;
    private _farbe: 'rot' | 'blau' | 'grün';
    private _baujahr: number;

    constructor(data: ICar)
    {
        if(!data.kennzeichen || typeof data.kennzeichen !== 'string')
        {
                throw new Error('Kennzeichen fehlt oder ist leer!');
        }
        this._kennzeichen = data.kennzeichen;

        if(typeof data.hersteller !== 'string')
        {
                throw new Error('Hersteller fehlt!');
        }
        this._hersteller = data.hersteller;

        if(data.baujahr !== undefined)
        {
            if(typeof data.baujahr !== 'number')
            {
                throw new Error('Baujahr ist keine number!');
            }
            this._baujahr = data.baujahr;
        }

        if(data.farbe !== undefined)
        {
            if(data.farbe !== 'rot' && data.farbe !== 'grün' && data.farbe !== 'blau')
            {
                throw new Error('Farbe hat falschen Wert');
            }
            this._farbe = data.farbe;
        }
        if(Object.keys(data).length !== Object.keys(this).length)
        {
            throw new Error('data hat ungültige Attribute!');
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

    public get farbe(): 'rot' | 'blau' | 'grün'
    {
        return this._farbe;
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

    public set farbe(f: 'rot' | 'blau' | 'grün')
    {
        this._farbe = f;
    }
    public toObject(): ICar
    {
        const rv: ICar = {
            kennzeichen: this._kennzeichen,
            hersteller: this._hersteller,
        };
        if(this._baujahr)
        {
            rv.baujahr = this._baujahr;
        } 
        if(this._farbe)
        {
            rv.farbe = this._farbe;
        }
        return  rv;
    }
}

export interface ICar // Interface erstellen
{
    kennzeichen: string;
    hersteller: string;
    farbe?: 'rot' | 'blau' | 'grün';
    baujahr?: number; // Baujahr muss nicht angegeben werden
}