
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
// Verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);


