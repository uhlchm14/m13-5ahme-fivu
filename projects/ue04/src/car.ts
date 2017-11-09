import * as fs from 'fs';

export class Car {
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

    constructor (data: ICar || typeof data.kennzeichen !== 'string') {
        if (!data.kennzeichen) {
            throw new Error('kennzeichen fehlt');
        }
        this.kennzeichen = data.kennzeichen;

        if (!data.hersteller) {

        }


        //Constructor fertig stellen
        // + Überprüfen ob mehr Attribute drinnen stehen
        //Object.keys(data).length -> Anzahl der Attribute in data
        //Object.keys(data) -> Attribute als Feld
    }

    public get kennzeichen (): string{
        return this._kennzeichen;
    }
    public get hersteller (): string{
        return this._hersteller;
    }
    public get baujahr (): number {
        return this._baujahr;
    }

    public set kennzeichen (value: string) {
        this._kennzeichen = value;
    }
    public set hersteller (value: string) {
        this._hersteller = value;
    }
    public set baujahr (value: number) {
        this._baujahr = value;
    }
}

export interface ICar {
    kennzeichen: string;
    hersteller: string;
    baujahr?: number;

}
