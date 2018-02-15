import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as nconf from 'nconf';
import * as path from 'path';
import * as http from 'http';

class Main {

    private _config: { port: number };
    private _server: http.Server;
    private _express: express.Express;

    constructor() {
        const configFile = path.join(__dirname, '..', 'config.json');
        nconf.file(configFile);
        this._config = nconf.get('server');
        if (!this._config || isNaN(this._config.port)) {
            throw new Error('invalid configuration');
        }
    }

    public async start(): Promise<void> {
        this._express = express();

        this._express.use(bodyParser.urlencoded());
        // const pugRenderingEngine = this._server.set('view engine', 'pug');
        // pugRenderingEngine.locals.pretty = true;

        this._express.get(['/', '/index.htm', '/index.html'],
            (req, res, next) => this.handleGetStartup(req, res, next));
        this._express.get('/error',
            (req, res, next) => this.handleGetError(req, res, next));

        // Error Handling
        this._express.use(
            (err: any, req: express.Request, res: express.Response, next: express.NextFunction) =>
            this.handleError(err, req, res, next)
        );

        this._server = http.createServer(this._express);
        this._server.listen(this._config.port);
        console.log('Server now listening (http://localhost:' + this._config.port + ')');
    }

    private handleGetStartup(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            console.log('get request from client');
            res.send('Starting Angular...');
        } catch (err) {
            next(err);
        }
    }

    private handleGetError(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            throw new Error('Testing error exception...');
        } catch (err) {
            next(err);
        }
    }

    private handleError(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(500).send('Internal Error');
    }

}

async function startup() {
    const main = new Main();
    await main.start();
}

startup()
    .catch( err => console.log(err) );
