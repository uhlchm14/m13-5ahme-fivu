import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

class Main {

    private _server: express.Express;
    private _privateKey: Buffer;
    private _publicKey: Buffer;

    constructor () {
        const pubFileName = path.join(__dirname, '..', 'keys/server-public.pem');
        const privFileName = path.join(__dirname, '..', 'keys/server-private.pem');
        this._publicKey = fs.readFileSync(pubFileName);
        this._privateKey = fs.readFileSync(privFileName);
        console.log('Key-pair read from files');

        this._server = express();


        this._server.use(bodyParser.urlencoded());

        // 1.Schicht
        this._server.get('/', (req, res, next) => {
            next();
        });


        // 2.Schicht
        this._server.post('/login', (req, res, next) => this.postLogin(req, res, next));

        this._server.get('/data', (req, res, next) => this.getData(req, res, next));

        this._server.use(express.static('sites'));

    }

    public startServer(port: number) {
        this._server.listen(port);
        console.log('Server gestartet (http://localhost:4711)');
    }

    private postLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body) {
            console.log(req.body);
        }
        if (req.body.name === 'maxi' && req.body.passwort === 'geheim') {
            const token = jwt.sign({name: 'maxi'}, this._privateKey, {expiresIn: '2h', algorithm: 'RS256'});
            console.log(token);
            res.json({token: token})
        }
        next();
    }

    private getData(req: express.Request, res: express.Response, next: express.NextFunction) {
        const value = <string> req.headers.authorization;
        if (value.startsWith('Bearer: ')) {
            const token = value.substr(8);
            console.log(token);
            jwt.verify(token, this._publicKey, (err, decoded: any) => {
                try {
                    if (err) {
                        throw err;
                    }
                    if (decoded.name && decoded.name === 'maxi') {
                        res.send('Ok');
                    } else {
                        throw new Error('Invalid token object');
                    }
                } catch (err) {
                    console.log(err);
                    res.status(401).send('Error');
                }
            });
        }
        res.status(500).send('Not implemented');
    }

}

const main = new Main();
main.startServer(4711);
