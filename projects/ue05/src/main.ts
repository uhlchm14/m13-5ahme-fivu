import {sprintf} from 'sprintf-js';
import * as express from 'express';

class Main
{
    constructor()
    {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();
// Rendering engine pug in Express einbinden
server.set('view engine', 'pug');

let counter = 0;
// Express arbeitet in Schichten, nach der Reihenfolge der Definitionen im Quelletxt
// Schicht 1
server.get('/test', (req, res, next) => {
    // console.log(req);

    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<title>Meine Testseite</title>';
    html += '<link rel = "stylesheet" href = "myStyle.css" />';
    html += '</head>';
    html += '<body>';
    html += '<h1>Test</h1>';
    html += '<h2>' + counter++ + '. Aufruf</h2>';
    html += '<p>Das ist eine Testseite</p>';
    html += '<p id="Absatz2">Das ist der zweite Absatz</p>';
    html += '<p class="gelbeAbsaetze">Das ist der dritte Absatz</p>';
    html += '</body>';
    html += '</html>';

    res.send(html);
});

server.get('/pug', (req, res, next) => {
    res.render('test.pug', {counterValue: counter++});
});
// Verzeichnis für statiscje HTML Seiten definieren
// Schicht 2
server.use(express.static('public'));
server.listen(4711);
console.log('Server auf Port 4711 gestartet');