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

// Express Web Server einstellen
const server = express();

// verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);

