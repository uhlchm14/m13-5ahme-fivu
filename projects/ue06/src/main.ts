
import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';

class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Websever erstellen.
const server = express();
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;

server.use(bodyParser.urlencoded());

// 1. Schicht
server.get('/', (req, res, next) => {
   // res.render('index.pug');
   next();
});

// 2. Schicht
server.post('/saveuser', (req, res, next) => {
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'maxi'
        && req.body.password === 'geheim') {
            res.setHeader(
                'Set-Cookie', cookie.serialize('name', req.body.name, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7 // 1 week
              })
            );
            res.send('OK (' + req.body.email + ')');
        } else {
            res.status(401).send('ERROR');
        }
        // next();
});

// 3.Schicht
// Verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet(http://localhost:4711)');
