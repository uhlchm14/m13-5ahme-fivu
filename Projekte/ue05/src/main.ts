
import { sprintf } from 'sprintf-js';
import * as express from 'express'; // Name express wird verwendet vom Modul 'express'

class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();

// Render engine pug in Express einbinden
server.set('view engine', 'pug');
// Verzeichnis public für statische HTML Seiten definieren

let counter = 1;

// 1.Schicht
server.get('/test', (req, res, next) => {
    // console.log(req);
    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<title>Meine Homepage für ue05</title>';
    html += '<link rel = "stylesheet" href = "myStyle.css" />';
    html += '</head>';
    html += '<body>';
    html += '<h1> Meine Homepage für ue05</h1>';
    html += '<h2>' + counter++ +'.Aufruf </h2>';
    html += '<p>Das ist eine Testseite</p>';
    html += '<p id="absatz2">Das ist der zweite Absatz</p>';
    html += '<p class="yellowAbsaetze">Das ist der dritte Absatz</p>';
    html += '</body>';
    html += '</html>';

    res.send(html);
});

server.get('/pug', (req, res, next) => {
    res.render('test.pug', { counterValue: counter++});
});
// 2.Schicht
server.use(express.static('public'));

server.listen(4711);


