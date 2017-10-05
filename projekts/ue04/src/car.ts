
public class Car {
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

    constructor() {

    }

    public get kennzeichen(): string{
        return this._kennzeichen;

    }
    public get hersteller(): string{
        return this._hersteller;

    }
    public get baujahr(): number{
        return this._baujahr;

    }

    public set kennzeichen(value:string){
        this._kennzeichen = value;
    }
    public set hersteller(value:string){
        this._hersteller = value;
    }
    public set_baujahr(value:number){
        this._baujahr = value;
    }
}