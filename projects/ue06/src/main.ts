import { sprintf } from 'sprintf-js';
import * as express from 'express';

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


server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});

server.use(express.static('public'));  // Verzeichnis public für statische HTML-Seiten definieren

server.listen(4711);  // http://localhost:4711/index.html
console.log('1 Server läuft (http://localhost:4711)');
