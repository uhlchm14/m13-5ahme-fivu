var x = 2;
var s;
var str = 'Guten Morgen';
console.log(s);
console.log(x);
s = str;
var Person = /** @class */ (function () {
    function Person(nachname, vorname) {
        this.nachname = nachname;
        this.vorname = vorname;
    }
    Person.prototype.getNachname = function () {
        return this.nachname;
    };
    Person.prototype.getVorname = function () {
        return this.vorname;
    };
    return Person;
}());
var p = new Person('Markus', 'Mörth');
console.log(p.getVorname() + ' ' + p.getNachname());
