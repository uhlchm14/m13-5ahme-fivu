import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

class Main
{
    private _privateKey: Buffer;
    private _publicKey: Buffer;
    
    constructor ()
    {
        this._publicKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-public.pem'));
        this._privateKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-private.pem'));

        console.log('Schlüssel san drin');
    }
}

const main = new Main();

const server = express();
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;


server.use(bodyParser.urlencoded());

// 1. Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});

// 2. Schicht
server.post('/login', (req, res, next) => {
    // res.render('index.pug');
    if (req.body)
    {
        console.log(req.body);
    }

    if (req.body.name === 'I bims' && req.body.password === '')
    {
        res.send('Is OK');
    }
    else
    {
        res.status(401).send('Is net OK');
    }
});

// 3. Schicht
server.use(express.static('public'));

server.listen(4711);
console.log('1 Server läuft (http://localhost:4711)');
