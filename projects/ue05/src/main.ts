
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

// Verzeichnis public für statische HTML Seiten erstellen
server.use(express.static('public'));

server.listen(4711); // Port des Servers = 4711


