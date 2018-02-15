import * as express from 'express';
import * as bodyParser from 'body-parser'

import { sprintf } from 'sprintf-js';

class Main {

    private _server: express.Express;

    constructor () {
        console.log('Start');
    }

    public async start(): Promise<void>{
        this._server = express();
        this._server.use(bodyParser.urlencoded());
    }
}

const main = new Main();
