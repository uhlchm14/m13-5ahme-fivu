export class Car implements ICar{
    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;

	constructor(data: ICar) {
		if (!data.kennzeichen || typeof data.kennzeichen != 'string') {
            throw new Error('kennzeichen fehlt');
        }
        this._kennzeichen = data.kennzeichen;

        if (!data.hersteller || typeof data.hersteller != 'string') {
            throw new Error('hersteller fehlt');
        }
        this._hersteller = data.hersteller;

		if(data.baujahr !== undefined)
		{
			if(!data.baujahr || typeof data.hersteller != 'number')
			{
				throw new Error('baujahr keine number');
			}
			this._baujahr = data.baujahr;
		}

		if(Object.keys(data).length !== Object.keys(this).length)
		{
			throw new Error('data hat ungültige Attribute');
		}
	}
    

	public get kennzeichen(): string {
		return this._kennzeichen;
	}

	public set kennzeichen(value: string) {
		this._kennzeichen = value;
	}

	public get hersteller(): string {
		return this._hersteller;
	}

	public set hersteller(value: string) {
		this._hersteller = value;
	}

	public get baujahr(): number {
		return this._baujahr;
	}

	public set baujahr(value: number) {
		this._baujahr = value;
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

		return rv;
	}
}

export  interface ICar {
	kennzeichen: string;
    hersteller: string;
    baujahr?: number;
}
