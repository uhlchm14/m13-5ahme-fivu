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
let counter = 0;
server.get('/test', (req, res, next) => {
    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<title>Meine Homepage</title>';
    html += '<link rel = "stylesheet" href = "myStyle.css" />';
    html += '</head>';
    html += '<body>';
    html += '<h1>Test</h1>';
    html += '<h2>' + counter++ + '.Aufruf </h2>';
    html += '<p>Das ist Orniks Testseite</p>';
    html += '<p>Stefan Ornik ist der Geilste</p>';
    html += '<p id = "absatz2"> Zweite Absatz </p>';
    html += '<p class = "gelbeAbsaetze"> Dritte </p>';
    html += '</body>';
    html += '</html>';
    res.send(html);
});
server.get('/pug', (req, res, next) => {
    res.render('test.pug');
});
server.use(express.static('public'));
server.listen(4711);
console.log('Server ist gestartet');

//# sourceMappingURL=main.js.map
