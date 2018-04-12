"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cookie = require("cookie");
const cookieparser = require("cookie-parser");
class Main {
    constructor() {
        console.log('Start');
    }
}
const main = new Main();
const server = express();
const PugRenderingEngine = server.set('view engine', 'pug');
PugRenderingEngine.locals.pretty = true;
server.use(bodyParser.urlencoded());
server.use(cookieparser());
server.get('/', (req, res, next) => {
    console.log(req.cookies);
    if (req.cookies && req.cookies.name === 'maxi')
        console.log('Amfrage von Maxi');
    next();
});
server.post('/saveuser', (req, res, next) => {
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7
        }));
        res.send('OK');
    }
    else {
        res.status(401).send('Error');
    }
    next();
});
server.use(express.static('public'));
server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');

//# sourceMappingURL=main.js.map
