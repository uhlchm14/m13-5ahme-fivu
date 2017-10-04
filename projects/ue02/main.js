var x = 3;
var s;
var str = 'Guten Morgen';
console.log(x);
console.log(s);
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
var p = new Person('Mörth', 'Markus');
console.log(p.getVorname() + ' ' + p.getNachname());
//console.log(p.vorname) //geht nicht 
