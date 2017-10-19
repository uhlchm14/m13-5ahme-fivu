import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor () {
        console.log('Hi');
    }
}

const main = new Main();

const server = express();
server.use(express.static('sites'));
server.listen(4711);