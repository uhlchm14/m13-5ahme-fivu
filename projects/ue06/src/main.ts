import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor() {
        console.log('Start');
    }
}

const main = new Main();

// Express Web Server erstellen
const server = express();
const pugEngine = server.set('view engine', 'pug');
pugEngine.locals.pretty = true;

server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});

server.use(express.static('public'));


const port = 8080;
server.listen(port);
console.log('Server auf ' + port + ' gestartet: http://localhost:' + port);
