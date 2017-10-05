export class Car {
    private kennzeichen: string;
    private hersteller: string;
    private baujahr: number;


	constructor(data: ICar) {
		if (!data.kennzeichen || typeof data.kennzeichen != 'string') {
            throw new Error('kennzeichen fehlt');
        }
        this.$kennzeichen = data.kennzeichen;

        if (!data.hersteller || typeof data.hersteller != 'string') {
            throw new Error('hersteller fehlt');
        }
        this.$hersteller = data.hersteller;

        if(Object.da)

	}
    

	public get $kennzeichen(): string {
		return this.kennzeichen;
	}

	public set $kennzeichen(value: string) {
		this.kennzeichen = value;
	}

	public get $hersteller(): string {
		return this.hersteller;
	}

	public set $hersteller(value: string) {
		this.hersteller = value;
	}

	public get $baujahr(): number {
		return this.baujahr;
	}

	public set $baujahr(value: number) {
		this.baujahr = value;
	}
}

export interface ICar {
    kennzeichen: String;
    hersteller: String;
    baujahr?: number;
}
