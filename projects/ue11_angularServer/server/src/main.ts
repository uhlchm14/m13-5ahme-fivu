import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as nconf from 'nconf';
import * as path from 'path';
import * as http from 'http';

class Main {
  private _express: express.Express;
  private _config: { port: number };
  private _server: http.Server;

  constructor() {
    const configFile = path.join(__dirname, '../config.json');
    console.log(configFile);
    nconf.file(configFile);
    this._config = nconf.get('server');
    if (!this._config || isNaN(this._config.port)) {
      throw new Error('invalid configuration');
    }

    console.log('Start');
  }

  public async start(): Promise<void> {
    this._express = express();
    this._express.use(bodyparser.urlencoded({ extended: true }));
    // const pugRenderungEngine = this._server.set('view engine', 'pug');
    // pugRenderungEngine.locals.pretty = true;

    this._express.get(['/', '/index.html', '/index.htm'], (req, res, next) => this.handleGetStartup(req, res, next));

    this._express.get('/error', (req, res, next) => this.handleGetError(req, res, next));

    this._express.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) =>
      this.handleError(err, req, res, next)
    );

    this._server = http.createServer(this._express).listen(this._config.port);
    console.log('server now listining ( http://localhost:' + this._config.port + ')');
  }

  private handleGetStartup(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      console.log('get request from client');
      res.send('i bims, not implemented yet');
    } catch (err) {
      next(err);
    }
  }

  private handleGetError (req: express.Request, res: express.Response, next: express.NextFunction) {
      try {
          throw new Error('I bims a Test-Error');
      } catch (err) {
          next(err);
      }
  }

  private handleError(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(500).send('Internal Error');
  }
}

async function startup(): Promise<void> {
  const main = new Main();
  await main.start();
}

startup().catch(err => {
  console.log(err);
});
