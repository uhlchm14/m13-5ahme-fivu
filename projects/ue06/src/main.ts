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
const pugRenderringEngine = server.set('view engine', 'pug');
pugRenderringEngine.locals.pretty = true;

// Schicht 1
server.get('/', (req, res, next) => {
    // res.render('index.pug'); // dynamisch
    next();
});

// Schicht 2
// verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
console.log('Server auf Port 4711 gestartet (http://localhost:4711)');
