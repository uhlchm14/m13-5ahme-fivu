"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
class Main {
    constructor() {
        this._publicKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-public.pem'));
        this._privateKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-private.pem'));
        console.log('Funzt');
        this._server = express();
        this._server.use(bodyParser.urlencoded({ extended: true }));
        this._server.get('/', (req, res, next) => {
            next();
        });
        this._server.post('/login', (req, res, next) => this.getLogin(req, res, next));
        this._server.get('/data', (req, res, next) => this.getData(req, res, next));
        this._server.use(express.static('public'));
    }
    startServer(port) {
        this._server.listen(4711);
        console.log('Server gestartet (http://localhost:4711)');
    }
    getLogin(req, res, next) {
        if (req.body) {
            console.log(req.body);
        }
        if (req.body.name === 'maxi' && req.body.password === 'geheim') {
            const token = jwt.sign({ name: 'maxi' }, this._privateKey, { expiresIn: '2h',
                algorithm: 'RS256' });
            console.log(token);
            res.json({ token: token });
        }
        else {
            res.status(401).send('ERROR');
        }
    }
    getData(req, res, next) {
        const value = req.headers.authorization;
        if (value.startsWith('Bearer:')) {
            const token = value.substr(8);
            console.log(token);
            jwt.verify(token, this._publicKey, (err, decoded) => {
                try {
                    if (err) {
                        throw err;
                    }
                    if (decoded.name && decoded.name === 'maxi') {
                        console.log(decoded);
                        const issuedAt = new Date(decoded.iat * 1000);
                        console.log(issuedAt.toLocaleDateString);
                        res.send('OK');
                    }
                    else {
                        throw new Error('invalid token object');
                    }
                }
                catch (err) {
                    console.log(err);
                    res.status(407).send('Error');
                }
            });
        }
        res.status(500).send('Not implemented');
    }
}
const main = new Main();
main.startServer(4711);

//# sourceMappingURL=main.js.map
