
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
        console.log('Start');
        const pubFileName = path.join(__dirname, '..', 'keys/server-public.pem');
        const privFileName = path.join(__dirname, '..', 'keys/server-private.pem');
        console.log('reading public key from ' + pubFileName);
        this._publicKey = fs.readFileSync(pubFileName);

        console.log('reading private key from ' + privFileName);

        this._privateKey = fs.readFileSync(privFileName);
        console.log('Schlüsselpaar von Datei eingelesen!');

        // Express Server erstellen
        this._server = express();
        this._server.use(bodyParser.urlencoded({extended: true}));
        // Express arbeitet in Schichten nach der Reihefolge der
        // Definition im Quelltext
        this._server.get('/', (req, res, next) => {
                next();
            });
        // 2 Schicht
        this._server.post('/login', (req, res, next) => this.getLogin(req, res, next));

        // 3. Schicht
        this._server.get('/data', (req, res, next) => this.getData(req, res, next));

        // 4. Schicht
        // Verzeichnis public für statische HTML Seiten definieren
        this._server.use(express.static('public'));
    }

    public startServer(port: number)
    {
        this._server.listen(port);
        console.log('Server gestartet (http://localhost:4711)')
    }

    private getData(req: express.Request, res: express.Response, next: express.NextFunction)
    {
        const value = <string> req.headers.athorization;
        if(value.startsWith('Bearer: '))
        {
            const token = value.substr(8);
            console.log(token);
            const data = jwt.verify(token, this._publicKey, (err, decoded) => {
                console.log(decoded);
            });
            console.log(data);
        }
        res.status(500).send('Not implemented');
    }

    private getLogin(req: express.Request, res: express.Response, next: express.NextFunction)
    {
        if (req.body) {
            console.log(req.body);
        }
        if (req.body.name === 'maxi' && req.body.password === 'geheim') {
            const token = jwt.sign({name: 'maxi'}, this._privateKey,
                        {expiresIn: '10min', algorithm: 'RS256'}); // Webtoken erzeugen, name, key, ablaufzeit, algorithmus

            console.log(token);
            res.json({token: token});
            // res.send('OK (' + req.body.email + ')');
        } else {
            res.status(401).send('ERROR');
        }
    }
}

const main = new Main();
main.startServer(4711);


// server.use(bodyParser.urlencoded({extended: true}));





