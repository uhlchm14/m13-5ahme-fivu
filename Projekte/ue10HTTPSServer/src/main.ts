
import { sprintf } from 'sprintf-js';
import * as express from 'express'; // Name express wird verwendet vom Modul 'express'
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';
import * as cookieParser from 'cookie-parser';

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



server.listen(4711);
console.log('Server gestartet (http://localhost:4711');
