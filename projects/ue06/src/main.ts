
import {sprintf} from 'sprintf-js';
import * as express from 'express'; // express importieren

class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();
// Rendering engine pug in Express einbinden
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});
// 2 Schicht
// Verzeichnis public für statische HTML Seiten erstellen
server.use(express.static('public'));

server.listen(4711); // Port des Servers = 4711
console.log('Server auf Port 4711 gestartet (http://localhost:4711)');

