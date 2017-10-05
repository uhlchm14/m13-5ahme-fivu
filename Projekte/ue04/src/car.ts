export class Car {
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;


constructor (data: ICar) {
    if (!data.kennzeichen || typeof data.kennzeichen !== 'string') {
        throw new Error('kennzeichen fehlt');
    }
    this._kennzeichen = data.kennzeichen;

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

    public set kennzeichen (value: string) {
        this.kennzeichen = value;
    }
    public set hersteller (value: string) {
        this.hersteller = value;
    }
    public set baujahr (value: number) {
        this.baujahr = value;
    } 
}

export interface ICar {
    kennzeichen: string;
    hersteller: string;
    baujahr?: number; //? macht es optional
}
