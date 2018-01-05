import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';
import * as cookieParser from 'cookie-parser';

class Main
{
    constructor ()
    {
        console.log('start');
    }
}

const main = new Main();

// dynamische Webseite: Inhalt und Aussehen können vom Server verändert werden

// Express Web Server einstellen
const server = express();

// Renderung engine pug in Express einbinden
const pugRenderringEngine = server.set('view engine', 'pug');
pugRenderringEngine.locals.pretty = true;


server.use(bodyParser.urlencoded());
server.use(cookieParser());

// Schicht 1
server.get('/', (req, res, next) => {
    // res.render('index.pug'); // dynamisch
    console.log(req.cookies);
    if (req.cookies && req.cookies.name === 'user') {
        console.log('Anfrage von user');
    }

    next();
});

// Schicht 2
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug'); // dynamisch
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'user' && req.body.password === 'password') {
        res.setHeader(
            'Set-Cookie',
            cookie.serialize('name', req.body.name, {
                httpOnly: true, //  verhindert den Zugriff von JavaScript (eventuelle Schadsoftware) auf das Cookie
                maxAge: 60 * 60 * 24 * 7 // 1 week
            })
        );
        res.send('Ok (' + req.body.email + ')');
    }
    else {
        res.status(401).send('ERROR');
    }
    next();
});


// Schicht 3
// verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
console.log('Server auf Port 4711 gestartet (http://localhost:4711)');
