"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cookie = require("cookie");
const cookieParser = require("cookie-parser");
class Main {
    constructor() {
        console.log('Start');
    }
}
const main = new Main();
const server = express();
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;
server.use(bodyParser.urlencoded());
server.use(cookieParser());
server.get('/', (req, res, next) => {
    console.log(req.cookies);
    if (req.cookies && req.cookies.name === 'max') {
        console.log('Anfrage von Maxi');
    }
    next();
});
server.post('/saveuser', (req, res, next) => {
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'max' && req.body.password === 'geheim') {
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7
        }));
        res.send('Supa (' + req.body.email + ')');
    }
    else {
        res.status(401).send('Error');
    }
    next();
});
server.use(express.static('public'));
server.listen(4711);
console.log('Server auf Port 4711 gestartet (http://localhost:4711)');

//# sourceMappingURL=main.js.map
