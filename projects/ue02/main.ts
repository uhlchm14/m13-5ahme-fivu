let x = 2;
let s: string;
let str = "Guten Morgen";


s = str;


console.log (x);
console.log(s);

class Person {
    private nachname: string;
    private vorname: string;
    constructor(nachname:string, vorname:string){
        this.nachname = nachname;
        this.vorname = vorname;
    }
    public getNachname() :string {
        return this.nachname;
    }
    public getVorname() :string {
        return this.vorname;
    }
}

const p = new Person("Ritter","Mario");
console.log(p.getVorname() +" "+ p.getNachname());
