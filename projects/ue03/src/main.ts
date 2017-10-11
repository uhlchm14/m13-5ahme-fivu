
import * as fs from 'fs'; //fs ... filesystem

class Car 
{
    private kennzeichen: string;
    private _hersteller: string;
    private modell: string;
    private baujahr: number;
    private einsatzbereit: boolean; 

    public constructor (kennzeichen: string)
    {
        this.kennzeichen = kennzeichen;
    }

    public getKennzeichen (): string 
    {
        return this.kennzeichen; 
    }

    public set hersteller (value: string)
    {
        this._hersteller = value; 
        //if (value === 'Audi')
        //    throw new Error('Hallo i bims a Error!')
    }

    public get hersteller (): string
    {
        return this._hersteller; 
    }


}

const autos: Car [] = []; //new Array []

autos.push(new Car ('DL 11111'));
autos.push(new Car ('DL 22222'));
autos.push(new Car ('DL 33333'));
autos.push(new Car ('DL 44444'));

//Alternative
//autos = [new Car('DL 11111'), new Car('DL 22222')]; 

for (const a of autos)
{
    console.log(a);
}

console.log(autos);

fs.writeFileSync('C:\\Users\\Florian\\Desktop\\autos.json',JSON.stringify(autos)); 

try
{
    const buffer = fs.readFileSync('C:\\Users\\Florian\\Desktop\\autos.json');
    const str = buffer.toString();
    
    const autos2 = JSON.parse(str); //Objekt aus dem String erzeugt //any ... kann jedes Objekt sein

    console.log(autos2);
    //problem: die eingelesenen objekte müssen nicht mit der Klassendeklaration übereinstimmen
    // -> keine automatische Überprüfung
}
catch (err)
{
    console.log('Fehler aufgetreten!');
    console.log('err'); 
}


