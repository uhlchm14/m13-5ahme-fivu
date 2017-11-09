import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();

// Rendering engine pug in express einbinden
server.set('view engine', 'pug');

let counter = 1;

// Express arbeitet in Schichten nach der Reihenfolge der Definitionen im Quelltext
// 1. Schicht
server.get('/test', (req, res, next) => {
    // console.log(req);
    // next();
    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html lang="de">';
    html += '<head>';
    html += '<!-- Required meta tags -->';
    html += '<meta charset="utf-8">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">';
    html += '<title>Meine Homepage</title>';
    html += '<link href="./assets/favicon.ico" rel="icon">';
    html += '<!-- Bootstrap CSS -->';
    html += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">';
    html += '<!-- Custom CSS -->';
    html += '<link rel="stylesheet" href="./myStyle.css">';
    html += '</head>';
    html += '<body>';
    html += '<div class="container">';
    html += '<div class="text-center">';
    html += '<h1>Test</h1>';
    html += '<h2>' + counter++ + '. Aufruf</h2>';
    html += '<p>Das ist eine Testseite</p>';
    html += '<p id="absatz2">Das ist der zweite Absatz</p>';
    html += '<p class="gelbeAbsaetze">Das ist der dritte Absatz</p>';
    html += '</div>';
    html += '</div>';
    html += '<!-- Bootstrap JavaScript -->';
    html += '<!-- Faster loading because JS is placed at the end... -->';
    html += '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>';
    html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>';
    html += '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>';
    html += '</body>';
    html += '</html>';

    res.send(html);
});
server.get('/pug', (req, res, next) => {
    res.render('test.pug');
});
// 2. Schicht
// Verzechnis public für statische HTML Seiten definieren
server.use(express.static('public'));

const port = 666;
server.listen(port);
console.log('Server auf ' + port + ' gestartet');
