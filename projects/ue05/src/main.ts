import { sprintf } from 'sprintf-js';
import * as express from 'express';

class Main {
    constructor() {
        console.log('Start');
    }
}

const main = new Main();

const server = express();
server.use(express.static('public'));

server.listen(4711);
