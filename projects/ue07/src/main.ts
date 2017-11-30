
import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

class Main {

    private _privateKey: Buffer;
    private _publicKey: Buffer;
    constructor () {
        console.log('Start');
        const pubFileName = path.join(__dirname, '..', 'keys/server-public.pem');
        const privateFileName = path.join(__dirname, '..', 'keys/server-private.pem');
        this._publicKey = fs.readFileSync(pubFileName);
        console.log('reading public Key from : ' + pubFileName);
        this._privateKey = fs.readFileSync(privateFileName);
        console.log('reading private Key from : ' + privateFileName);
        console.log('Key-Pair read from files');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();

// Rendering engine pug in Express einbinden
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;

// Express arbeitet in Schichten nach der Reihefolge der
// Definition im Quelltext


server.use(bodyParser.urlencoded());

// 1. Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});

// 2. Schicht
server.post('/login', (req, res, next) => {
    // res.render('index.pug');
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        res.send('OK (' + req.body.name + ')');
    } else {
        res.status(401).send('ERROR');
    }
    // next();
});

// 3. Schicht
// Verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));


server.listen(4711);
console.log('Server gestartet (http://localhost:4711)')

