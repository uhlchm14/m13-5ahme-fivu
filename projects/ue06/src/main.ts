import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor () {
        console.log('Hi');
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


server.use(express.static('sites'));



server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');