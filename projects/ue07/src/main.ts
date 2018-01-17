import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import { join } from 'path';

class Main
{
    private _server: express.Express;
    private _privateKey: Buffer;
    private _publicKey: Buffer;

    constructor ()
    {
        this._publicKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-public.pem'));
        this._privateKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-private.pem'));

        console.log('Schlüssel san drin');

        this._server = express();

        this._server.use(bodyParser.urlencoded({ extended: true }));

        // 1. Schicht
        this._server.get('/', (req, res, next) => {
            next();
        });

        // 2. Schicht
        this._server.post('/login', (req, res, next) => this.postLogin(req, res, next));

        // 3. Schicht
        this._server.get('/data', (req, res, next) => this.getData(req, res, next));

        // 4. Schicht
        this._server.use(express.static('public'));
    }

    public startServer (port: number)
    {
        this._server.listen(port);
        console.log('1 Server läuft (http://localhost:4711)');
    }

    private postLogin(req: express.Request, res: express.Response, next: express.NextFunction)
    {
        if (req.body)
        {
            console.log(req.body);
        }

        if (req.body.name === 'I bims' && req.body.password === '')
        {
            const token = jwt.sign({name: 'I bims'}, this._privateKey, {expiresIn: '30min', algorithm: 'RS256'});
            console.log(token);
            res.json({token: token});
        }
        else
        {
            res.status(401).send('Is net OK');
        }
    }

    private getData(req: express.Request, res: express.Response, next: express.NextFunction)
    {
        const value = <string>req.headers.authorization;

        if (value.startsWith('Bearer: '))
        {
            const token = value.substr(8);
            console.log(token);
            jwt.verify(token, this._publicKey, (err, decoded: any) => {
                try
                {
                    if (err)
                    {
                        throw err;
                    }
                    if (decoded.name && decoded.name === 'I bims')
                    {
                        console.log(decoded);
                        const issuedAt = new Date(decoded.iat * 1000);
                        console.log(issuedAt.toLocaleString());
                        res.send('Is OK');
                    }
                    else
                    {
                        throw new Error('invalid token object');
                    }
                }
                catch (err)
                {
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
