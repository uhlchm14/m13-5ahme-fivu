
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

const meinAuto = new Car('GU 310FC', 'Peugeot', '307', 2002, true);
console.log(meinAuto.$hersteller);