import { sprintf } from 'sprintf-js';
import * as express from 'express'

class Main 
{     
    constructor () 
    {
        console.log('Start');
   }
}

const main = new Main();

//Express Web Server erstellen
const server = express();

//Rendering engine pug in Express einbinden
server.set('view engine', 'pug');

//Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext

let counter: number = 1;

//1.Schicht
// '=>' Error Operator (Das die Funktion ans aktuelle Objekt gebunden ist) 
server.get('/test', (req, res, next) => {
    //console.log(req);
    let html = ' ';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<title>Meine Homepage</title>';
    html += '<link rel = "stylesheet" href = "myStyle.css"/>';
    html += '</head>';
    html += '<body>';
    html += '<h1>Test</h1>';
    html += '<h2>' + counter++ + '</h2>';
    html += '<p>Das ist eine vom Server generierte Website.</p>';
    html += '<p id="absatz2">Das ist der zweite Absatz</p>';
    html += '<p class="gelbeAbsaetze">Das ist der dritte Absatz</p>';
    html += '</body>';
    html += '</html>';

    res.send(html);
});

server.get('/pug', (req, res, next) => {
    res.render('test.pug', { counterValue: counter++ });


});

//2.Schicht
//Verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
console.log("Server auf Port 4711 gestartet");