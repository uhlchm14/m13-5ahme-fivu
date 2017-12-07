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
            // res.render('index.pug');
            next();
        });


        // 2.Schicht
        this._server.post('/login', (req, res, next) => this.getLogin(req, res, next));

        this._server.post('/data', (req, res, next) => this.getData(req, res, next));

        this._server.use(express.static('sites'));

    }

    public startServer(port: number) {
        this._server.listen(port);
        console.log('Server gestartet (http://localhost:4711)');
    }

    private getData(req: express.Request, res: express.Response, next: express.NextFunction) {
        const value = <string> req.headers.authorization;
        if (value.startsWith('Bearer: ')) {
            const token = value.substr(8);
            console.log(token);
            jwt.verify(token, this._publicKey, (err, decoded) => {
                console.log(decoded);
            });
        }


        res.status(500).send('Not implemented');
        }
    }

    private getLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body) {
            console.log(req.body);
        }
        if (req.body.name === 'Maxi' && req.body.passwort === 'geheim') {
            const token = jwt.sign({name: 'maxi'}, this._privateKey, {expiresIn: '10min', algorithm: 'RS256'});
            console.log(token);
            res.json({token: token})
            // res.send('Hallo ' + req.body.name);
        }
        next();
    }

}

const main = new Main();
main.startServer(4711);
