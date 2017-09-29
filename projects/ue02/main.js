let x = 2;
let s;
let str = "Guten Morgen";
console.log(x);
console.log(str);
s = str;
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
const p = new Person("Mörth", "Markus");
console.log(p.getVorname() + " " + p.getNachname());
