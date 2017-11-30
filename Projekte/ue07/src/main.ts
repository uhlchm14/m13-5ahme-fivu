
import { sprintf } from 'sprintf-js';
import * as express from 'express'; // Name express wird verwendet vom Modul 'express'
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';


class Main {

    private _privateKey: Buffer;
    private _publicKey: Buffer;
    constructor () {
        console.log('Start');
        const pubFileName = path.join(__dirname, '..', 'keys/server.public.pem');
        const privFileName = path.join(__dirname, '..', 'keys/server.private.pem');
        console.log(' reading public key from ' + pubFileName);
        this._publicKey = fs.readFileSync('keys/server-public.pem');
        console.log(' reading private key from ' + privFileName);
        this._privateKey = fs.readFileSync('keys/server-private.pem');
        console.log('Key-Pair read from files');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();

// Render engine pug in Express einbinden
const pugRenderingEgine = server.set('view engine', 'pug');
pugRenderingEgine.locals.pretty = true;

// Verzeichnis public für statische HTML Seiten definieren

server.use(bodyParser.urlencoded());


// 1.Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');

    next();
});

// 2.Schicht
server.post('/login', (req, res, next) => {
    // res.render('index.pug');
    if (req.body) {
        console.log(req.body);
    } 
    if (req.body.name === 'Dominik' && req.body.password === 'geheim') {
        res.send('OK (' + req.body.name + ')');
    } else {
        res.status(401).send('Error');
    }
    //////////////////////////////////////////// 777 next();
});

// 3.Schicht
server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet (http://localhost:4711');
