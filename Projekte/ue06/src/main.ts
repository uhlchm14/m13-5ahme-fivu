
import { sprintf } from 'sprintf-js';
import * as express from 'express'; // Name express wird verwendet vom Modul 'express'

class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();

// Render engine pug in Express einbinden
const pugRenderingEgine = server.set('view engine', 'pug');
pugRenderingEgine.locals.pretty = true;

// Verzeichnis public für statische HTML Seiten definieren


server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});
// 2.Schicht
server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet (http://localhost:4711');
