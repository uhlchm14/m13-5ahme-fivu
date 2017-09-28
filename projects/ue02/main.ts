let x = 3;
let s: string;
let str = 'Guten Morgen';

console.log(x);
console.log(s);
s= str;

class Person {
    private nachname: string;
    private vorname: string;

    constructor(nachname: string,vorname: string) {
        this.nachname = nachname;
        this.vorname = vorname;
    }

    public getNachname(): string {
        return this.nachname;
    }

    public getVorname(): string {
        return this.vorname;
    }
};

const p = new Person('Mörth','Markus');
console.log(p.getVorname() + ' ' + p.getNachname());