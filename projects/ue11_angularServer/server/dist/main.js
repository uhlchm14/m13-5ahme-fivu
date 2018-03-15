var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
process.env['DEBUG'] = '*::INFO, *::WARN, *::ERR, *::SEVERE, *::';
process.env['DEBUG_COLORS'] = 'true';
process.env['DEBUG_STREAM'] = 'stdout';
import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as debugsx from 'debug-sx';
import * as nconf from 'nconf';
export const log = debugsx.createFullLogger('main');
const consolelogger = debugsx.createConsoleHandler('stdout', '*::INFO, *::FINE, *::SEVERE, *::ERR, *::WARN', '-*', [
    { level: 'INFO', color: 'cyan', inverse: true },
    { level: 'FINE', color: 'white', inverse: true },
    { level: 'SEVERE', color: 'red', inverse: true },
    { level: 'ERR', color: 'red', inverse: true },
    { level: 'WARN', color: 'magenta', inverse: true }
]);
debugsx.addHandler(consolelogger);
class Main {
    constructor() {
        const configFile = path.join(__dirname, '../config.json');
        nconf.file(configFile);
        this._config = nconf.get('server');
        if (!this._config || isNaN(this._config.port)) {
            throw new Error('invalid configuration');
        }
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this._express = express();
            this._express.use(bodyparser.urlencoded({ extended: true }));
            this._express.get(['/', '/index.html', '/index.htm'], (req, res, next) => this.handleGetStartup(req, res, next));
            this._express.use(express.static(path.join(__dirname, '../../ng2/dist')));
            this._express.get('/error', (req, res, next) => this.handleGetError);
            this._express.use((err, req, res, next) => this.handleError(err, req, res, next));
            http.createServer(this._express).listen(this._config.port);
            log.info('Server started on port ' + this._config.port);
        });
    }
    handleGetStartup(req, res, next) {
        try {
            log.info('get request from client');
            this._express.use(express.static(path.join(__dirname, '../../ng2/dist')));
        }
        catch (err) {
            next(err);
        }
    }
    handleGetError(req, res, next) {
        try {
            throw new Error('FUCK OFF');
        }
        catch (error) {
            next(error);
        }
    }
    handleError(err, req, res, next) {
        log.warn(err);
        res.sendStatus(500).send(err);
    }
}
function startup() {
    return __awaiter(this, void 0, void 0, function* () {
        const main = new Main();
        yield main.start();
    });
}
startup().catch(err => log.severe(err));

//# sourceMappingURL=main.js.map
