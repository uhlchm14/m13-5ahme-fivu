
import { sprintf } from 'sprintf-js';
import * as express from 'express'; // Name express wird verwendet vom Modul 'express'
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';


class Main {
    private _server: express.Express;
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
         // Schicht 2
        this._server.post('/login', (req, res, next) => this.getLogin(req, res, next));
        // Schicht 3
        this._server.post('/data', (req, res, next) => this.getData(req, res, next));
            // Schicht 4
        this._server.use(express.static('public'));
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
            const token = jwt.sign({name: 'Dominik'}, this._privateKey, { expiresIn: '2h', algorithm: 'RS256'});
            console.log(token);
            res.json({ token: token});
            res.send('OK (' + req.body.name + ')');
        } else {
            res.status(401).send('Error');
        }
    }

    private getData ( req: express.Request, res: express.Response, next: express.NextFunction) {
            const value = <string> req.headers.authorization;
            if (value.startsWith('Bearer')) {
                const token = value.substr(8);
                console.log(token);
                const data = jwt.verify(token, this._publicKey, (err, decoded: any) => {
                    try {
                        if (err) {
                            throw err;
                        }
                        if (decoded.name && decoded.name === 'Dominik') {
                            console.log(decoded);
                            const issuedAt = new Date (decoded.iat * 1000);
                            console.log(issuedAt.toLocaleString);
                            res.send('Ok');
                        } else {
                            throw new Error ('invalid token object');
                        }
                    } catch (err) {
                        console.log(err);
                        res.status(401).send('Error');
                    }
            });
        }
    }
}

const main = new Main();
main.startServer(4711);
