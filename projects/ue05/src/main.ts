import * as express from 'express';

class Main {
    constructor (){
        console.log('Start');
    }

}

const main = new Main();
// Express Web Server erstellen
const server = express();
// Rendering engine pug in Express einbinden
server.set('view engine', 'pug');
// Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext

let counter = 1;

// 1.Schicht
// => error operator
server.get('/test', (req, res, next) => {
    // console.log(req);
    // next(); wird nicht aufgerufen weil wir behandeln die abfrage
    let html = '';

    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<title>Meine Testseite</title>';
    html += '<link rel= "stylesheet" href = "mystyle.css" />';
    html += '</head>';
    html += '<body>';
    html += '<h1>Test</h1>';
    html += '<h2>' + counter++ + '. Aufruf</h2>';
    html += '<p id = "absatz2">Hallo mein Name ist</p>';
    html += '<p>Hallo mein Name ist</p>';
    html += '<p class = "gelbeAbsaetzte">Hallo mein Name ist</p>';
    html += '</body>';
    html += '</html>';

    res.send(html);
});

server.get('/pug', (req, res, next) => {
    res.render('test.pug', {counterValue: counter++});
});

// 2.Schicht
server.use(express.static('public'));


server.listen(4711);