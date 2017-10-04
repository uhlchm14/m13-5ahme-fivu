class Car {
    private kennzeichen: string;
    private _hersteller: string;    // Für Namenskonflikte: private Variable mit _ kennzeichnen
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor(kennzeichen: string) {
        this.kennzeichen = kennzeichen;
    }

    public getKennzeichen (): string {
        return this.kennzeichen;
    }

    public set hersteller(value: string) {
        this._hersteller = value;
        if (value === 'Honda') {
            throw new Error('Mag ich net!');
        }
    }

    public get hersteller(): string {
        return this._hersteller + ', der beste Hersteller';
    }
}

const meinAuto = new Car('GU 69');
// (<any>meinAuto).hersteller = 'Honda'; --> nix gut (Typecast)
meinAuto.hersteller = 'Honda';
console.log(meinAuto.hersteller);
