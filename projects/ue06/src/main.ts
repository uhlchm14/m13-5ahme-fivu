import {sprintf} from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';
class Main
{
    constructor()
    {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();
// Rendering engine pug in Express einbinden
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;

// Express arbeitet in Schichten, nach der Reihenfolge der Definitionen im Quelletxt

server.use(bodyParser.urlencoded());
// Schicht 1
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});

// Schicht 2
server.post('/saveuser', (req, res, next) => {
    if(req.body)
    {
      console.log(req.body);
    } 
    if(req.body.name === 'maxi' && req.body.passwort === 'geheim')
    {
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week
          })
        );
        res.send('Ok (' + req.body.email + ')');
    }
    else 
    {
        res.status(401).send('ERROR');
    }
   // next();
});

// Verzeichnis für statiscje HTML Seiten definieren
// Schicht 3
server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');