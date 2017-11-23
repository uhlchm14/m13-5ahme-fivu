import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';

class Main {
    constructor ()
    {
        console.log('Start');
    }

}

const main = new Main();
// Express Web Server erstellen
const server = express();
// Rendering engine pug in Express einbinden
const PugRenderingEngine = server.set('view engine', 'pug');
PugRenderingEngine.locals.pretty = true;

// Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext

server.use(bodyParser.urlencoded());

// 1 Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});

// 2 Schicht
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    if (req.body) {
        console.log(req.body);
    }

    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        res.setHeader(
            'Set-Cookie', 
            cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week
          }));
        res.send('OK');
    } else {
        res.status(401).send('Error');
    }
    next();
});

server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');