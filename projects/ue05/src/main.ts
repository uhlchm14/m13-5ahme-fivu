import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor() {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();
server.set('view engine', 'pug');

let counter = 1;

server.get('/test', (req, res, next) => {
    // console.log(req);
    let html = '';
    html += '<DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<meta charset="utf-8">';
    html += '<title>Meine Homepage</title>';
    html += '<base href="/">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1">';
    html += '<link rel="icon" type="image/x-icon" href="favicon.ico">';
    html += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous" />';
    html += '<link rel="stylesheet" href="myStyle.css" />';
    html += '<link rel="favicon" href="http://www.nametshop.com/products/3/square/10903203.png" />';
    html += '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>';
    html += '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>';
    html += '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>';
    html += '</head>';
    html += '<body>';
    html += '<div class="progress" style="height: 40px">';
    html += '<div class="text-center progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; height: 40px">';
    html += '<h2>TTTTEEEESSSSTTTT</h2>';
    html += '</div>';
    html += '</div>';
    html += '<h2>' + counter++ + '. Aufruf</h2>';
    html += '<p>Das ist eine Testseite</p>';
    html += '<p id="absatz2">Das ist der zweite Absatz</p>';
    html += '<p class="gelbeAbsaetze btn btn-lg btn-secondary container-fluid">Das ist der dritte Absatz</p>';
    html += '</body>';
    html += '</html>';

    res.send(html);
    next();
});

server.get('/pug', (req, res, next) => {
    res.render('test.pug');
});

server.use(express.static('public'));



server.listen(4711);
