import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main
{
    constructor ()
    {
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
    html += '<title>I bims 1 Website</title>';
    html += '<link rel = "stylesheet" href = "myStyle.css"/>';
    html += '</head>';
    html += '<body>';
    html += '<h1>mySupiTestHomepage</h1>';
    html += '<h2>Anfrage Nummer ' + counter++ + '.</h2>';
    html += '<p id="zeile2">Test? Test?</p>';
    html += '<p class="gelberAbsatz">Are you receiving me?</p>';
    html += '</body>';
    html += '</html>';

    res.send(html);
}
);


server.get('/pug', (req, res, next) => {
    res.render('test.pug', {counterValue: counter++});
});

server.use(express.static('public'));  // Verzeichnis public für statische HTML-Seiten definieren

server.listen(4711);  // http://localhost:4711/index.html
