
import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

//Express Websever erstellen.
const server = express();
// Rendering engine pug in Express einbinden.
server.set('view engine', 'pug');

let counter = 1;
// 1.Schicht
// Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext
server.get('/test', (req, res, next) => { // => ARROW Operator, schaut ob das Obejekt gebunden wird. f12 auf get suchen nach RequestHandler drei Paramter ausgelesen
    //console.log(req); // req => Request das ich vom Client kriege.
    //next(); // Damit man in eine ander Schicht weiter kommt. 
    // Ist eine Probeprogramm zum Testen ob unser Test Programm läuft.
    let html = '';
    html += '<!DOCTYPE html>'
    html += '<html>'
    html += '<head>'
    html += '<title>Meine Testseite</title>'
    html += '<link rel = "stylesheet" href = "myStyles.css" />'
    html += '</head>'
    html += '<body>';
    html += '<h1>Test<h1>';
    html += '<h2>' + counter++ +'.Aufruf</h2>'; 
    html += '<p>Das ist eine vom Testgenerierte Testseite</p>';
    html += '<p id = "absatz2" >Das ist der zweite Absatz</p>';
    html += '<p class="gelbeAbsaetze" >Das ist der dritte Absatz</p>';
    html += '</body>';
    html += '</html>';

    res.send(html);
   
});
server.get('/pug', (req, res, next) => {  //pug erzeugt die HTML
    res.render('test.pug');
});

// 2.Schicht
// Verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
console.log('Server auf Port 4711 gestartet');