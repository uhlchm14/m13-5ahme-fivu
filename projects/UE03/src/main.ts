
class Car {
    private kennzeichen: string;
    private _hersteller: string;
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor (kennzeichen: string) {
        this.kennzeichen = kennzeichen;
    }

    public getKennzeichen (): string {
        return this.kennzeichen;
    }

    public set hersteller (value: string) {
        this._hersteller = value;
    }

    public get hersteller (): string {
        return this._hersteller;
    }
}

const autos: Car [] = []; // Array ()

autos.push(new Car('DL 11111'));
autos.push(new Car('DL 22222'));
autos.push(new Car('DL 33333'));
autos.push(new Car('DL 44444'));

// autos = [ new Car('DL 11111'), new Car('DL 22222')]; // Alternative Möglichkeit

for (const a of autos) {
    console.log(a);
}

// (<any>meinAuto).hersteller = 'Dodge'; // nicht gut :( Type Cast
// meinAuto.hersteller = 'Honda';
// console.log(meinAuto.hersteller);
