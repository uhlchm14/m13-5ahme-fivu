"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
class Main {
    constructor() {
        console.log('Start');
        this._publicKey = fs.readFileSync('keys/server-public.pem');
        this._privateKey = fs.readFileSync('keys/server-private.pem');
        console.log(__dirname);
        console.log('Key-Pair read from files');
    }
}
const main = new Main();
const server = express();
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;
server.use(bodyParser.urlencoded());
server.get('/', (req, res, next) => {
    next();
});
server.post('/login', (req, res, next) => {
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        res.send('OK (' + req.body.name + ')');
    }
    else {
        res.status(401).send('ERROR');
    }
});
server.use(express.static('public'));
server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');

//# sourceMappingURL=main.js.map
