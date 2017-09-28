const sprintf = require("sprintf-js").sprintf;


console.log("Hello world");
const str = sprintf("Version %d.%02d",1,3);
console.log(str);
let x=3;
console.log(typeof(str));
console.log(typeof(x));
x=str;
console.log(typeof(x));

for( let i=1 ; i<=10; i++)
{
    console.log("Schleife: " + i + "weiter");

}

