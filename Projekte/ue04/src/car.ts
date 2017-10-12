export class Car implements ICar{
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;
    private _farbe: string;


constructor (data: ICar) {
    if (!data.kennzeichen || typeof data.kennzeichen !== 'string') {
        throw new Error('kennzeichen fehlt oder ist leer');
    }
    this._kennzeichen = data.kennzeichen;

    if (typeof data.hersteller !== 'string') {
        throw new Error('hersteller fehlt');
    }
    this._hersteller = data.hersteller;

    if (data.baujahr !== undefined) {
        if(typeof data.baujahr !== 'number') {
        throw new Error('baujahr ist keine nummer');
        }
    this._baujahr = data.baujahr;
    }
    if (data.farbe !== undefined) {
        if(data.farbe !== 'rot' && data.farbe !== 'grün' &&
           data.farbe !== 'blau') {
        throw new Error('Farbe hat falsche Wert');
        }
    this._farbe = data.farbe;

    if(Object.keys(data).length != Object.keys(this).length) {
        throw new Error('data hat ungültige Attribute')
    }
   // Object.keys(data).length; // anzahl der atribute
   // Object.keys(data) // Atributte als Feld
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
    public get farbe (): string {
        return this._farbe;
    }


    public set kennzeichen (value: string) {
        this.kennzeichen = value;
    }
    public set hersteller (value: string) {
        this.hersteller = value;
    }
    public set baujahr (value: number) {
        this.baujahr = value;
    }
    public set farbe (value: string) {
        this.farbe = value;
    }

    public toObject(): ICar {
        const rv: ICar {
        kennzeichen : this._kennzeichen,
        hersteller : this._hersteller
        };
        if (this.baujahr) {
        rv.baujahr = this._baujahr;
        }
        if (this.farbe) {
        rv.farbe = this._farbe;
        }
        return rv;
    }
}

export interface ICar {
    kennzeichen: string;
    hersteller: string;
    baujahr?: number; // ? macht es optional
    farbe?: 'rot' | 'blau' | 'grün';   // Nur die angegebenen Strings sind zulässig
}
