import { ICar } from './car';
export class Car implements ICar {
    private _kennzeichen: string;
    private _hersteller: string;
    private _farbe: 'rot' | 'blau' | 'grün';
    private _baujahr: number;

    public constructor(data: ICar) {
        if (!data.kennzeichen
            || typeof data.kennzeichen !== 'string') {
            throw new Error('kennzeichen fehlt oder leer');
        }
        this._kennzeichen = data.kennzeichen;

        if (typeof data.hersteller !== 'string') {
            throw new Error('hersteller fehlt');
        }
        this._hersteller = data.hersteller;

        if (data.farbe !== undefined) {
            if (data.farbe !== 'rot'
            && data.farbe !== 'blau'
            && data.farbe !== 'grün') {
                throw new Error('farbe hat falschen wert');
            }
            this._farbe = data.farbe;
        }

        if (data.baujahr !== undefined) {
            if (typeof data.baujahr !== 'number') {
                throw new Error('hersteller fehlt oder leer');
            }
            this._baujahr = data.baujahr;
        }

        if (Object.keys(data).length !== Object.keys(this).length) {
            throw new Error('data hat ungültige attribute');
        }

        // attribute = Object.keys(data).length; --> Anzahl der Attribute
        // attribute[] = Object.keys(data); --> Attribute als Feld
    }

    public toObject(): ICar {
        const rv: ICar = {
            kennzeichen: this._kennzeichen,
            hersteller: this._hersteller
        };
        if (this._baujahr) {
            rv.baujahr = this._baujahr;
        }
        if (this._farbe) {
            rv.farbe = this._farbe;
        }
        return rv;
    }

    public get kennzeichen (): string {
        return this._kennzeichen;
    }

    public get hersteller(): string {
        return this._hersteller;
    }

    public get farbe(): 'rot' | 'blau' | 'grün' {
        return this._farbe;
    }

    public get baujahr(): number {
        return this._baujahr;
    }

    public set kennzeichen(value: string) {
        this._kennzeichen = value;
    }

    public set hersteller(value: string) {
        this._hersteller = value;
    }

    public set farbe(f: 'rot' | 'blau' | 'grün') {
        this._hersteller = f;
    }

    public set baujahr(value: number) {
        this._baujahr = value;
    }
}

export interface ICar {
    kennzeichen: string;
    hersteller: string;
    farbe?: 'rot' | 'blau' | 'grün';
    baujahr?: number;
}
