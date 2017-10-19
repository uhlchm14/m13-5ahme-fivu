import {sprintf} from 'sprintf-js';
import * as express from 'express';

class Main {

    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Web-Server erstellen
const server = express();

// Verzeichnis public für statische HTML-Seiten definieren
server.use(express.static('public')); // es gibt statische HTML-Seiten im Verzeichnis Public

server.listen(4711); // 4711 = Port



