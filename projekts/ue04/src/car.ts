
export class Car implements ICar {
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

    constructor(data: ICar) {
        if(!data.kennzeichen
        || typeof data.kennzeichen !== 'string'){
            throw new Error('kennzeichen fehlt');
        }
        this._kennzeichen = data.kennzeichen; 

        if(typeof data.hersteller !== 'string'){
                throw new Error('hersteller fehlt');
            }
            this._hersteller = data.hersteller;

        if(data.baujahr !== undefined) {
            if(typeof data.baujahr !== 'number') {
                throw new Error('baujahr ist keine Nummer');
            }
            this._baujahr = data.baujahr;
        }

        if(Object.keys(data).length !== Object.keys(this).length){
            throw new Error('data hat ungültige Attribute')
        }
        //Object.keys(data).length -> Anzahl der Attribute in data
        //Object.keys(data) -> 
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

    public set kennzeichen(value:string) {
        this._kennzeichen = value;
    }

    public set hersteller(value:string) {
        this._hersteller = value;
    }

    public set baujahr(value:number) {
        this._baujahr = value;
    }
}

export interface ICar{
    kennzeichen: string;
    hersteller: string;
    baujahr?: number;
}