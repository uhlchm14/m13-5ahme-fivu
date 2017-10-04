let x = 2;
let s: string;
let str: 'Guten Morgen';

console.log(x);
console.log(s);

s = str;

class Person {
    private nachName: string;
    private vorName: string;

    public constructor(nachName: string, vorName: string) {
        this.nachName = nachName;
        this.vorName = vorName;
    }

    public getNachName(): string {
        return this.nachName;
    }

    public getVorName(): string {
        return this.vorName;
    }
}

const p = new Person('Markus', 'Mörth');
console.log(p.getVorName() + ' ' + p.getNachName())