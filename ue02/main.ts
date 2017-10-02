let x = 2;
let s: string;
let str = 'Guten Morgen';

console.log(x);
console.log(str);
s = str;

class Person{
    private nachname: string;
    private vorname: string;
    public constructor (nachname: string, vorname: string)
    {
        this.nachname = nachname;
        this.vorname = vorname;
    }

    public getNachname(): string{
        return this.nachname;
    }

    public getVorname(): string{
        return this.vorname;
    }
}

const p = new Person('Riegelnegg','Dominik');
console.log(p.getVorname() + ' ' + p.getNachname());