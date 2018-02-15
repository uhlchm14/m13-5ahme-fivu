
import { sprintf } from 'sprintf-js';
import * as express from 'express'; // Name express wird verwendet vom Modul 'express'
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

// Render engine pug in Express einbinden
const pugRenderingEgine = server.set('view engine', 'pug');
pugRenderingEgine.locals.pretty = true;

// Verzeichnis public für statische HTML Seiten definieren

server.use(bodyParser.urlencoded());
server.use(cookieParser());

// 1.Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    console.log(req.cookies);
    if(req.cookies && req.cookies.name === 'Dominik'){
        console.log('Anfrage von Dominik');
    }
    next();
});

// 2.Schicht
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    if (req.body) {
        console.log(req.body);
    }
    if( req.body.name === 'Dominik' && req.body.password === 'geheim') {
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week 
          }));
        res.send('Ok (' + req.body.email + ')');
    }
    else {
        res.status(401).send('Error');
    }
    /////////////////////////////////////////// next();
});

// 3.Schicht
server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet (http://localhost:4711');
