
import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import { decode } from 'jsonwebtoken';

class Main {

    private _server: express.Express;
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

        // Express Web Server erstellen
        this._server = express();

        this._server.use(bodyParser.urlencoded({extended: true}));
        // 1. Schicht
        this._server.get('/', (req, res, next) => {
            next();
        });
        // 2. Schicht
        this._server.post('/login', (req, res, next) => this.getLogin(req,res,next));
        // 3. Schicht
        this._server.get('/data', (req, res, next) => this.getData(req,res,next))
        // 4. Schicht
        this._server.use(express.static('public'));
    }

    public startServer(port: number) {
        this._server.listen(port);
        console.log('Server gestartet (http://localhost:4711)')
    }
    private getLogin ( req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body) {
            console.log(req.body);
        }
        if (req.body.name === 'maxi' && req.body.password === 'geheim') {
            const token = jwt.sign({
                                        name: 'maxi'},
                                        this._privateKey,
                                        { expiresIn: '10min', algorithm: 'RS256'}
                                    );
            console.log(token);
            res.json({ token: token});
            // res.send('OK (' + req.body.name + ')');
        } else {
            res.status(401).send('ERROR');
        }
        // next();
    }

    private getData ( req: express.Request, res: express.Response, next: express.NextFunction) {
        const value = <string>req.headers.authorization;
        if(value.startsWith('Bearer: ')) {
            const token = value.substr(8);
            console.log(token);
            jwt.verify(token, this._publicKey, (err, decoded) => {
                console.log(decoded);
            });
        }
        res.status(500).send('Not implemented');
    }
}

const main = new Main();
main.startServer(4711);

