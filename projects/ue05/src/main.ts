
import {sprintf} from 'sprintf-js';
import * as express from 'express'; // express importieren

class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();
// Rendering engine pug in Express einbinden
server.set('view engine', 'pug');

let counter = 1;
// Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext
// Erste Schicht
server.get('/test', (req, res, next) => { // Ressource: /test
    // console.log(req);
    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '  <title>Meine Hompage</title>';
    html += '  <link rel="stylesheet" href="myStyle.css" />';
    html += '</head>';
    html += '<body>';
    html += '  <h1> Meine Hompage</h1>';
    html += '  <h2 id=absatz2test>' + counter++ + '.Aufruf</h2>';
    html += '  <p>Das ist eine Testseite</p>';
    html += '  <p id="absatz2"> Das ist der 2te Absatz</p>';
    html += '  <p class="gelbeAbsaetze"> Das ist der 2te Absatz</p>';
    html += '</body>';
    html += 'html>';
    res.send(html);
});

server.get('/pug', (req, res, next) => {
    res.render('test.pug');
});
// 2 Schicht
// Verzeichnis public für statische HTML Seiten erstellen
server.use(express.static('public'));

server.listen(4711); // Port des Servers = 4711
console.log('Server auf Port 4711 gestartet');

