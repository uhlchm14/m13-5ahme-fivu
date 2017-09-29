'use strict';
const sprintf = require('sprintf-js').sprintf;

const str = sprintf('Version %d.%02d',1,3);

console.log('Hello world');
console.log(str);

let x = 3;
console.log(str);
console.log(typeof(str));
console.log(typeof(x));
x = str;
console.log(typeof(x));

for(let i = 1; i <= 10; i++)
{
    console.log('Schleife: ' + i);
}