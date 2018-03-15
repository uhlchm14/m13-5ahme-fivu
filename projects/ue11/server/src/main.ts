import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as nconf from 'nconf';
import * as path from 'path'; // Node.js Modul
import * as http from 'http'; // Node.js Modul

import {IUser} from './models/user';

class Main {

    private _express: express.Express;
    private _config: {port: number};
    private _server: http.Server;
    private _users: IUser[] = [];

    public constructor () {
        const configFile = path.join(__dirname, '..', 'config.json');
        console.log(configFile);
        nconf.file(configFile);
        this._config = nconf.get('server');
        if (!this._config || isNaN(this._config.port)) {
            throw new Error('invalid configuration');
        }
        this._users.push({surename: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
        this._users.push({surename: 'Freyler', firstname: 'Paul', classname: '2AHME'});
        this._users.push({surename: 'Mörth', firstname: 'Markus', classname: '5AHME'});
    }

    public async start (): Promise<void> {
        this._express = express();
        this._express.use(bodyParser.urlencoded());
        // const pugRenderingEngine = this._server.set('view engine', 'pug');
        // pugRenderingEngine.locals.pretty = true;

        const ngxPath = path.join(__dirname, '../../ngx/dist');

        this._express.get(['/', '/index.html', '/index.htm'], (req, res, next) => this.handleGetStartup(req, res, next));
        this._express.get('/users', (req, res, next) => this.handleGetUsers(req, res, next));
        this._express.get('/error', (req, res, next) => this.handleGetError(req, res, next));
        this._express.use(express.static(ngxPath));
        this._express.use(
            (err: any,
             req: express.Request,
             res: express.Response,
             next: express.NextFunction) => this.handleError(err, req, res, next)
        );

        this._server = http.createServer(this._express);
        this._server.listen(this._config.port);
        console.log('Server now listening (http://localhost:' + this._config.port + ')');
    }

    private handleGetAll (req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            console.log('get request from client');
            res.send('starting angular');
        } catch (err) {
            next(err);
        }
    }

    private handleGetUsers (req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const rv = JSON.stringify(this._users);
            res.json(rv);
        } catch (err) {
            next(err);
        }
    }

    private handleGetStartup (req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const indexPath = path.join(__dirname, '../../ngx/dist/index.html');
            res.sendFile(indexPath);
        } catch (err) {
            next(err);
        }
    }

    private handleGetError (req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            throw new Error('Test');
        } catch (err) {
            next(err);
        }
    }

    private handleError(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        const timeStamp = new Date().toISOString();
        console.log(timeStamp);
        res.status(500).send('internal Error (' + timeStamp + ')');
    }
}

async function startup() {
    const main = new Main();
    await main.start();
}

startup().catch( (err) => {
    console.log(err);
});


