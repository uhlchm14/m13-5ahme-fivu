import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

class Main {

    private _privateKey: Buffer;
    private _publicKey: Buffer;
    constructor ()
    {
        const pubFileName = path.join(__dirname, '..', 'keys');
        const priFileName = path.join(__dirname, '..', 'keys');
        console.log('Start');
        console.log(__dirname);
        
        console.log('Key-pair read from files');
    }

}

const main = new Main();
// Express Web Server erstellen
const server = express();
// Rendering engine pug in Express einbinden
const PugRenderingEngine = server.set('view engine', 'pug');
PugRenderingEngine.locals.pretty = true;

// Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext

server.use(bodyParser.urlencoded());

// 1 Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});

// 2 Schicht
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    if (req.body) {
        console.log(req.body);
    }
    next();
});

server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');