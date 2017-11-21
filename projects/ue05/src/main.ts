import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main
{
    constructor ()
    {
        console.log('start');
    }
}

const main = new Main();

// dynamische Webseite: Inhalt und Aussehen können vom Server verändert werden

// Express Web Server einstellen
const server = express();

// Renderung engine pug in Express einbinden
server.set('view engine', 'pug');

let counter = 1;

// Express arbeitet in Schichten nach der Reihenfolge
// Definition im Quelltest
// Schicht 1
server.get('/test', (req, res, next) => {
    // console.log(req);
    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<title>Meine TESThomepage</title>';
    html += '<link rel = "stylesheet" href = mystyle.css /> ';
    html += '</head>';
    html += '<body>';
    html += '<h1>Meine TESThomepage</h1>';
    html += '<h1>' + counter++ + '. Aufruf</h1>';
    html += '<p>Das ist eine Testtestseite!</p>';
    html += '<p>Das bimst der zweite Absatz vong der Webseite!</p>';
    html += '<p id = "absatz3">Das bimst der dritte Absatz vong der Webseite!</p>';
    html += '<p class = "lesbareAbsätze">Das bimst der vierte Absatz vong der Webseite!</p>';
    html += '</body>';
    html += '</html>';
    res.send(html);
    // next();
}); // Funktion direkt hier erstellen oder die Funktion aufrufen

server.get('/pug', (req, res, next) => {
    res.render('test.pug', {counterValue: counter++});
});

// Schicht 2
// verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
console.log('Server auf Port 4711 gestartet');
