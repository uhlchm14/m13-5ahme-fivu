"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
class Main {
    constructor() {
        const pubFileName = path.join(__dirname, '..', 'keys/server-public.pem');
        const privFileName = path.join(__dirname, '..', 'keys/server-private.pem');
        console.log('  reading public key from ' + pubFileName);
        this._publicKey = fs.readFileSync(pubFileName);
        console.log('  reading private key from ' + privFileName);
        this._privateKey = fs.readFileSync(privFileName);
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
        this._server.listen(port);
        console.log('Server gestartet (http://localhost:4711)');
    }
    getData(req, res, next) {
        const value = req.headers.authorization;
        if (value.startsWith('Bearer: ')) {
            const token = value.substr(8);
            console.log(token);
            const data = jwt.verify(token, this._publicKey, (err, decode) => {
                console.log(decode);
            });
        }
    }
    getLogin(req, res, next) {
        if (req.body) {
            console.log(req.body);
        }
        if (req.body.name === 'maxi' && req.body.password === 'geheim') {
            const token = jwt.sign({ name: 'maxi' }, this._privateKey, { expiresIn: '10min', algorithm: 'RS256' });
            console.log(token);
            res.json({ token: token });
        }
        next();
    }
}
const main = new Main();
main.startServer(4711);

//# sourceMappingURL=main.js.map
