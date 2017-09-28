let x = 2;
let s;
let str = "Guten Morgen";
s = str;
console.log(x);
console.log(s);
class Person {
    constructor(nachname, vorname) {
        this.nachname = nachname;
        this.vorname = vorname;
    }
    getNachname() {
        return this.nachname;
    }
    getVorname() {
        return this.vorname;
    }
}
const p = new Person("Ritter", "Mario");
console.log(p.getVorname() + " " + p.getNachname());
