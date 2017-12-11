import {Server} from './server';
import { sprintf } from 'sprintf-js';

class Main {
    constructor () {
        Server.Instance.start(4711);
    }
}

const main = new Main();
