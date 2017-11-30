"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Main {
    constructor() {
        console.log('Start');
    }
}
const main = new Main();
const server = express();
server.set('view engine', 'pug');
let counter = 1;
server.get('/test', (req, res, next) => {
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
    res.render('test.pug', { counterValue: counter++ });
});
server.use(express.static('public'));
server.listen(4711);
console.log('Server auf Port 4711 gestartet');

//# sourceMappingURL=main.js.map
