import {sprintf} from 'sprintf-js';
import * as express from 'express';

class Main {

    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Web-Server erstellen
const server = express();

// Rendering engine pug in Express einbinden
server.set('view engine', 'pug');


let counter = 0;


// Express arbeitet in Schichten nach der Reihenfolge
// der Definitio im Quelltext

// 1.Schicht

server.get('/test', (req, res, next) => {
    // console.log(req);

    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>'
    html += '<title>Meine Homepage</title>'
    html += '<link rel = "stylesheet" href = "myStyle.css" />'
    html += '</head>'
    html += '<body>'
    html += '<h1>Test</h1>'
    html += '<h2>' + counter++ + '.Aufruf </h2>'
    html += '<p>Das ist Orniks Testseite</p>'
    html += '<p>Stefan Ornik ist der Geilste</p>'
    html += '<p id = "absatz2"> Zweite Absatz </p>'
    html += '<p class = "gelbeAbsaetze"> Dritte </p>'
    html += '</body>'
    html += '</html>'

    res.send(html);

});

server.get('/pug', (req, res, next) => {
    res.render('test.pug');
});

// 2.Schicht
// Verzeichnis public für statische HTML-Seiten definieren
server.use(express.static('public')); // es gibt statische HTML-Seiten im Verzeichnis Public
server.listen(4711); // 4711 = Port
console.log('Server ist gestartet');
