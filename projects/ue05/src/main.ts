import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor () {
        console.log('Hi');
    }
}

const main = new Main();
let counter = 1;
const server = express();
server.set('view engine', 'pug');

server.get('/test', (req, res, next) => {
    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '    <title>myPage</title>';
    html += '    <link rel="stylesheet" href="myStyle.css"/>';
    html += '</head>';
    html += '<body >';
    html += '<h1 >Hallo i bims</h1>';
    html += '<h1 >' + counter++ + ' .Aufruf</h1>';
    html += '<p id="eins">Erster Absatz</p>';
    html += '<p id="zwei">Zweiter Absatz</p>';
    html += '<p class="newClass">Dreiter Absatz</p>';
    html += '</body>';
    html += '</html>';
    res.send(html);
});

server.get('/pug', (req, res, next) => {
    res.render('test.pug');
});


server.use(express.static('sites'));



server.listen(4711);
console.log('Server auf Port 4711 gestartet');