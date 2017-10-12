export class Car implements ICar {

    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;
    private _farbe: 'rot' | 'blau' | 'gruen';

    constructor (data: ICar) {
        if (!data.kennzeichen || typeof data.kennzeichen !== 'string') {
         throw new Error ('Kennzeichen fehlt oder ist leer!');
        }
        this._kennzeichen = data.kennzeichen;

        if (typeof data.hersteller !== 'string') {
            throw new Error ('Hersteller fehlt oder ist leer!');
           }
        this._hersteller = data.hersteller;
        // Object.keys(data).length Anzahl der Attribute

        if (data.farbe !== undefined) {
           throw new Error ('Bitte richtige Farbe auswählen!');
        }

        if (data.baujahr !== undefined ) {
            if (typeof data.baujahr !== 'number') {
                throw new Error ('Baujahr ist keine Number!');
            }
            this._baujahr = data.baujahr;
        }

           if (Object.keys(data).length !== Object.keys(this).length) {
            throw new Error ('Data hat ungültige Attribute');
           }
    }

    public get kennzeichen (): string {
        return this._kennzeichen;
    }

    public get hersteller (): string {
        return this._hersteller;
    }

    public get farbe (): 'rot' | 'blau' | 'gruen' {
        return this._farbe;
    }

    public get baujahr (): number {
        return this._baujahr;
    }

    public set kennzeichen (value: string) {
       this._kennzeichen = value;
    }

    public set hersteller(value: string) {
       this._hersteller = value;
    }

    public set farbe(value: 'rot' | 'blau' | 'gruen')
    {
        this._farbe = value;
    }
     public set baujahr(value: number) {
       this._baujahr = value;
    }

    public toObject(): ICar {
      const rv: ICar = {
            kennzeichen: this._kennzeichen,
            hersteller: this._hersteller,
        };

        if (this._baujahr) {
            rv.baujahr = this._baujahr;
        }

        if (this._farbe) {
            rv.farbe = this._farbe;
        }
    }
}

export interface ICar {
    kennzeichen: string;
    hersteller: string;
    farbe: 'rot' | 'blau' | 'gruen'; // Somit sind NUR diese Farben zulässig!!!!
    baujahr?: number;

}
