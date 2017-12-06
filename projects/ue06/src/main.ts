import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';
import * as cookieParser from 'cookie-parser';

class Main
{
    constructor ()
    {
        console.log('Start');
    }
}

const main = new Main();

const server = express();
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;

// const options = { inflate: true, type: 'application/x-www-form-urlencoded' };

// server.use((req, res, next) => {
    // let rawBody = '';

    // req.setEncoding('utf8');

    // req.on('data', (chunk) => {
    //     rawBody += chunk;
    // });

    // req.on('end', () => {
    //     next();
    // });
// });

server.use(bodyParser.urlencoded());
server.use(cookieParser());

// 1. Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    console.log(req.cookies);
    if (req.cookies && req.cookies.name === 'I bims')
    {
        console.log('Du bimsts');
    }
    next();
});

// 2. Schicht
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    if (req.body)
    {
        console.log(req.body);
    }

    if (req.body.name === 'I bims' && req.body.password === '')
    {
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24
        }));
        res.send('Is OK');
    }
    else
    {
        res.status(401).send('Is net OK');
    }
});

// 3. Schicht
server.use(express.static('public'));  // Verzeichnis public für statische HTML-Seiten definieren

server.listen(4711);  // http://localhost:4711/index.html
console.log('1 Server läuft (http://localhost:4711)');
