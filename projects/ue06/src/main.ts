
import {sprintf} from 'sprintf-js';
import * as express from 'express'; // express importieren
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';
import * as cookieParser from 'cookie-parser';
class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();
// Rendering engine pug in Express einbinden
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;
server.use(bodyParser.urlencoded());
server.use(cookieParser());
// 1.Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    console.log(req.cookies);
    if (req.cookies && req.cookies.name === 'max') {
        console.log('Anfrage von Maxi');
    }
    next();
});
// 2.Schicht
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'max' && req.body.password === 'geheim') {
        res.setHeader(
            'Set-Cookie',
            cookie.serialize('name', req.body.name, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7 // 1 week
            })
        );
        res.send('Supa (' + req.body.email + ')');
    } else {
        res.status(401).send('Error');
    }
    next();
});
// 3. Schicht
// Verzeichnis public für statische HTML Seiten erstellen
server.use(express.static('public'));

server.listen(4711); // Port des Servers = 4711
console.log('Server auf Port 4711 gestartet (http://localhost:4711)');
