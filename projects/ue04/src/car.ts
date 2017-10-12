
export class Car implements ICar {
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

    constructor (data: ICar) {
        if (!data.kennzeichen || typeof data.kennzeichen !== 'string') {
            throw new Error('Kennzeichen fehlt');
        }
        this._kennzeichen = data.kennzeichen;

        if (!data.hersteller || typeof data.hersteller !== 'string') {
            throw new Error('Hersteller fehlt');
        }
        this._hersteller = data.hersteller;

        if (data.baujahr !== undefined) {
            if (typeof data.baujahr !== 'number') {
            throw new Error('Falscher Datentyp');
            }
            this._baujahr = data.baujahr;
        }

        if (Object.keys(data).length !== Object.keys(this).length) {
            throw new Error ('data hat üngültige Attribute');
        }
    }
    public get kennzeichen(): string {
        return this._kennzeichen;
    }
    public get hersteller(): string {
        return this._hersteller;
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

    public set baujahr(value: number) {
        this._baujahr = value;
    }
}

export interface ICar {
    kennzeichen: string;
    hersteller: string;
    baujahr?: number;
}
