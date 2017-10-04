class car {
    private kennzeichen: string;
    private hersteller: string;
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean;

    public constructor (kennzeichen: string)
    {
        this.kennzeichen = kennzeichen; 
    }

    public getKennzeichen (): string{
        return  this.kennzeichen;
    }


	public set setKennzeichen(value: string) {
		this.kennzeichen = value;
    }

	public get getHersteller(): string {
		return this.hersteller;
	}
}

const meinAuto = new car('GU 6666');
meinAuto.hersteller = 'Seat';
console.log(meinAuto.getHersteller);
