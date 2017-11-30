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
        const pubFileName = path.join(__dirname, '..', 'keys/server-public-pem');
        const privFileName = path.join(__dirname, '..', 'keys/server-private-pem');
        this._publicKey = fs.readFileSync(pubFileName);
        this._privateKey = fs.readFileSync(privFileName);
        console.log('Key-pair read from files');
    }
}

const main = new Main();

const server = express();
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;

server.use(bodyParser.urlencoded());

// 1.Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});


// 2.Schicht
server.post('/saveuser', (req, res, next) => {
    if(req.body){
        console.log(req.body);
    }
    
    // res.render('index.pug');
    // res.send('Hallo ' + req.body.name);

    next();
})

server.use(express.static('sites'));



server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');