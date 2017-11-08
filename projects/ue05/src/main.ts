import {sprintf} from 'sprintf-js';
import * as express from 'express';

class Main
{
    constructor()
    {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();
// Verzeichnis für statiscje HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
