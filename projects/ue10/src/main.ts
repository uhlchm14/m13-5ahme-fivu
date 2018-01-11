
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
       // const pubFileName = path.join(__dirname, '..', 'keys/server-public.pem');
       // const privFileName = path.join(__dirname, '..', 'keys/server-private.pem');
       // console.log('  reading public key from' +pubFileName);
       // this._publicKey = fs.readFileSync('../keys/server-public.pem'); // System wartet bis file wirklich eingelesen ist, nix im Hintergrund
       // console.log('  reading public key from' +privFileName);
       // this._privateKey = fs.readFileSync('../keys/server-private.pem');
       
       this._publicKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-public.pem'));
       this._privateKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-private.pem'));
        // Express Web Server erstellen
        console.log('Funzt');
        this._server=express();

        // Express arbeitet in Schichten nach der Reihefolge der
        // Definition im Quelltext
        this._server.use(bodyParser.urlencoded({extended: true}));


        // 1. Schicht
        this._server.get('/', (req, res, next) => {
         next();
        });

        // 2. Schicht
        this._server.post('/login', (req, res, next) => this.getLogin(req,res,next));
        
        this._server.get('/data', (req, res, next) => this.getData(req,res,next));
    
        // 3. Schicht
        // Verzeichnis public für statische HTML Seiten definieren
        this._server.use(express.static('public'));
     
    }

    public startServer (port: number)
    {
        this._server.listen(4711);
        console.log('Server gestartet (http://localhost:4711)')
    }

    private getLogin(req: express.Request, res: express.Response, next: express.NextFunction)
    {
    if (req.body) {
        console.log(req.body);
    }
    
    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        const token = jwt.sign(
        {name: 'maxi'}, 
        this._privateKey,
        { expiresIn: '2h', 
        algorithm: 'RS256'});
        
        console.log(token);
        res.json({ token: token });
        //res.send('OK (' + req.body.name + ')');
    } else {
        res.status(401).send('ERROR');
    }
    }
    
    private getData (req: express.Request, res: express.Response, next: express.NextFunction)
    {
        const value =<string>req.headers.authorization;

        if (value.startsWith('Bearer:'))
        {
        const token = value.substr(8);
        console.log(token);
        jwt.verify(token, this._publicKey, (err, decoded: any) => {
            try
            {
                if(err) {
                    throw err;
                }
                if(decoded.name && decoded.name === 'maxi') {
                    console.log(decoded);
                    const issuedAt = new Date (decoded.iat * 1000);
                    console.log(issuedAt.toLocaleDateString);// Wann wird Token gesendet und wann lauft er ab
                    res.send('OK');
                } else {
                    throw new Error ('invalid token object');
                }
                }
                catch (err) {
                    console.log (err);
                    res.status(407).send('Error');
            }
        })
        }
        res.status(500).send('Not implemented');
    }
}

const main = new Main();
main.startServer(4711);









