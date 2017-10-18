export class Car implements ICar
{
    private _kennzeichen: string;
    private _hersteller: string;
    private _farbe: 'weiß' | 'grau' | 'schwarz';
    private _baujahr: number;

    constructor (data: ICar)
    {
        if (!data.kennzeichen || typeof data.kennzeichen !== 'string')
        {
            throw new Error('Kennzeichen fehlt');
        }
        this._kennzeichen = data.kennzeichen;

        if (typeof data.hersteller !== 'string')
        {
            throw new Error('Hersteller fehlt');
        }
        this._hersteller = data.hersteller;

        if (data.farbe !== undefined)
        {
            if (data.farbe !== 'weiß' && data.farbe !== 'grau' && data.farbe !== 'schwarz')
            {
                throw new Error('Farbe ist ungültig');
            }
            this._farbe = data.farbe;
        }

        if (data.baujahr !== undefined)
        {
            if (typeof data.baujahr !== 'number')
            {
                throw new Error('Baujahr ist keine Zahl');
            }
            this._baujahr = data.baujahr;
        }

        if ( Object.keys(data).length !== Object.keys(this).length)
        {
            throw new Error('Üngültige Attribute');
        }
    }

    public get kennzeichen (): string
    {
        return this._kennzeichen;
    }

    public get hersteller (): string
    {
        return this._hersteller;
    }

    public get farbe (): 'weiß' | 'grau' | 'schwarz'
    {
        return this._farbe;
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

    public set farbe (farbe: 'weiß' | 'grau' | 'schwarz')
    {
        this._farbe = farbe;
    }

    public set baujahr (value: number)
    {
        this._baujahr = value;
    }

    public toObject(): ICar
    {
        const rv: ICar = {kennzeichen: this._kennzeichen, hersteller: this._hersteller, farbe: this._farbe};

        if (this._baujahr)
        {
            rv.baujahr = this._baujahr;
        }

        if (this._hersteller)
        {
            rv.hersteller = this._hersteller;
        }

        if (this._farbe)
        {
            rv.farbe = this._farbe;
        }

        return rv;
    }
}

export interface ICar
{
    kennzeichen: string;
    hersteller: string;
    farbe: 'weiß' | 'grau' | 'schwarz';
    baujahr?: number;
}
