var x = 2;
var s;
var str;
console.log(x);
console.log(s);
s = str;
var Person = /** @class */ (function () {
    function Person(nachName, vorName) {
        this.nachName = nachName;
        this.vorName = vorName;
    }
    Person.prototype.getNachName = function () {
        return this.nachName;
    };
    Person.prototype.getVorName = function () {
        return this.vorName;
    };
    return Person;
}());
var p = new Person('Markus', 'Mörth');
console.log(p.getVorName() + ' ' + p.getNachName());
