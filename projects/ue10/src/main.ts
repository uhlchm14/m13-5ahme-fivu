import * as fs from 'fs';

class Car {
    private kennzeichen: string;
    private hersteller: string;
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;


    constructor($kennzeichen: string, $hersteller: string, $modell: string, $baujahr: number, $einsatzbereit: boolean) {
        this.kennzeichen = $kennzeichen;
        this.hersteller = $hersteller;
        this.modell = $modell;
        this.baujahr = $baujahr;
        this.einsatzbereit = $einsatzbereit;
    }

    public get $kennzeichen(): string {
        return this.kennzeichen;
    }

    public get $hersteller(): string {
    return this.hersteller;
    }

    public get $modell(): string {
        return this.modell;
    }

    public get $baujahr(): number {
        return this.baujahr;
    }

    public get $einsatzbereit(): boolean {
        return this.einsatzbereit;
    }
}

const autos: Car [] = [];

autos.push(new Car('GU 310FC', 'Peugeot', '307', 2002, true));
autos.push(new Car('GU 715KN', 'Seat', 'Altea', 2006, true));
autos.push(new Car('LB 310EU', 'Seat', 'Ibiza', 2008, true));
autos.push(new Car('LAU CH01', 'Tesla', '3S', 2017, true));

// fs.writeFileSync('C:\\Schule\\5AHME\\FIVU\\projects\\m13-5ahme-fivu\\projects\\ue03\\autos.json', JSON.stringify(autos));

try {
    const buffer = fs.readFileSync('C:\\Schule\\5AHME\\FIVU\\projects\\m13-5ahme-fivu\\projects\\ue03\\autos.json');
    const str = buffer.toString();
    const autos2 = JSON.parse(str);
    console.log(autos2);
} catch (err) {
    console.log('Fehler');
    console.log(err);

}


console.log(autos);
