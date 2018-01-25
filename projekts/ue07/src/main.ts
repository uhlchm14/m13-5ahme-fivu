
import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import { NextFunction } from 'express-serve-static-core';

class Main {

    private _server: express.Express;
    private _privateKey: Buffer;
    private _publicKey: Buffer;

    constructor () {
        console.log('Start');
       
        const pubFileName = path.join(__dirname,'..', 'keys/server-public.pem');
        const privFileName = path.join(__dirname,'..', 'keys/server-private.pem');
        console.log(path.join('reading public key from ' + pubFileName));
        this._publicKey = fs.readFileSync(pubFileName);
        console.log(path.join('reading private key from ' + privFileName));
        this._privateKey = fs.readFileSync(privFileName);
        this._server = express();

        this._server.use(bodyParser.urlencoded({extended : true}));
        
        // 1. Schicht
        this._server.get('/', (req, res, next) => {
            // res.render('index.pug');
            next();
        });
        
        // 2. Schicht
        this._server.post('/login', (req, res, next) => this.getLogin(req, res, next));

        // 3. Schicht
        this._server.get('/data', (req, res, next) => this.getData(req, res, next));
       
        
        
        // Verzeichnis public für statische HTML Seiten definieren
        this._server.use(express.static('public'));

        
    }

    public startServer (port: number)
    {
        this._server.listen(port);
        console.log('Server gestartet (http://localhost:4711)')
    }

    private getLogin (req: express.Request, res: express.Response, next: express.NextFunction)
    {
            if (req.body) {
                console.log(req.body);
            }
            if (req.body.name === 'maxi' && req.body.password === 'geheim') {
                const token = jwt.sign({name: 'maxi'}, this._privateKey, { expiresIn: '2h', algorithm: 'RS256'});
                console.log(token);
                res.json({ token: token})
                // res.send('OK (' + req.body.email + ')');
                // verifcation of token
            } else {
                res.status(401).send('ERROR');
            }
    }

    private getData (req: express.Request, res: express.Response, next: express.NextFunction)
    {
        const value = <string>req.headers.authorization;
        if(value.startsWith('Bearer: ')) {
            const token = value.substr(8);
            console.log(token);
            jwt.verify(token, this._publicKey, (err, decoded: any) => {
                try{
                    if(err) {
                        throw err;
                    }
                    if (decoded.name && decoded.name === 'maxi')
                    {
                        res.send('OK');
                    }
                    else{
                        throw new Error('invalid token object');
                    }
                    }
                    catch (err) {

                        console.log(err);
                        res.status(401).send('Error');
                    }
                
            });
        }
    }
}


const main = new Main();
main.startServer(4711);