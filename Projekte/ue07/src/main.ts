
import { sprintf } from 'sprintf-js';
import * as express from 'express'; // Name express wird verwendet vom Modul 'express'
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';


class Main {
    private _server: express.Express
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

        this._server = express();

        this._server.use(bodyParser.urlencoded({ extended: true}));
        this._server.get('/', (req, res, next) => {
            // res.render('index.pug');
            next();
        });
        this._server.post('/login', (req, res, next) => this.getLogin(req, res, next));
        this._server.use(express.static('public'));
        this._server.post('/data', (req, res, next) => this.getData(req, res, next));
    }

    public startServer(port: number) {
        this._server.listen(port);
        console.log('Server gestartet (http://localhost:4711');
    }

    private getLogin ( req: express.Request, res: express.Response, next: express.NextFunction){
        if (req.body) {
            console.log(req.body);
        } 
        if (req.body.name === 'Dominik' && req.body.password === 'geheim') {
            const token = jwt.sign({name: 'Dominik'}, this._privateKey, { expiresIn: '10min', algorithm: 'RS256'});
            console.log(token);
            res.json({ token: token});
            res.send('OK (' + req.body.name + ')');
        } else {
            res.status(401).send('Error');
        }
    }

    private getData ( req: express.Request, res: express.Response, next: express.NextFunction)
    {
            const token = req.headers.authorization;
            if (token.startWith('Bearer: ')) {
            const token = value.substr(8);
            console.log(token);
            const data = jwt.verify(token, this._publicKey, )
            }
            res.status(500).send('Not implemented')
    }
}

const main = new Main();
main.startServer(4711);