
import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

//Express Websever erstellen.
const server = express();
// Rendering engine pug in Express einbinden.
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;


//1.Schicht
server.get('/', (req, res, next) => {  //pug erzeugt die HTML
   // res.render('index.pug');
   next();
});

// 2.Schicht
// Verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet(http://localhost:4711)');