import * as express from 'express';

class Main {
    constructor (){
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

server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});

server.use(express.static('public'));

server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');