import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as nconf from 'nconf';
import * as path from 'path';
import * as http from 'http';
import { IUser } from './models/user';

class Main {
  private _express: express.Express;
  private _config: { port: number };
  private _server: http.Server;

  private _users: IUser[] = [];

  public constructor() {
    const configFile = path.join(__dirname, '../config.json');
    console.log(configFile);
    nconf.file(configFile);
    this._config = nconf.get('server');
    if (!this._config || isNaN(this._config.port)) {
      throw new Error('invalid configuration');
    }

    this._users.push({surname: 'Fink', firstname: 'Matthias', classname: '5AHME'})
    this._users.push({surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'})
    this._users.push({surname: 'Greistorfer', firstname: 'Florian', classname: '5AHME'})
    this._users.push({surname: 'Harrer', firstname: 'Florian', classname: '5AHME'});

    console.log('Start');
  }

  public async start(): Promise<void> {
    this._express = express();
    this._express.use(bodyparser.urlencoded({ extended: true }));
    // const pugRenderungEngine = this._server.set('view engine', 'pug');
    // pugRenderungEngine.locals.pretty = true;

    this._express.get(['/', '/index.html', '/index.htm'], (req, res, next) => this.handleGetStartup(req, res, next));

    this._express.get('/users', (req, res, next) => this.handleGetUsers(req, res, next));

    this._express.use(express.static(path.join(__dirname, '../../ngxClient/dist')));

    this._express.get('/error', (req, res, next) => this.handleGetError(req, res, next));

    this._express.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) =>
      this.handleError(err, req, res, next)
    );

    this._server = http.createServer(this._express).listen(this._config.port);
    console.log('server now listining ( http://localhost:' + this._config.port + ')');
  }

  private handleGetStartup(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const indexPath = path.join(__dirname, '../../ngxClient/dist/index.html');
      res.sendFile(indexPath);
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
    const timeStamp = new Date().toISOString();
    console.log(timeStamp);
    console.log(err);
    res.status(500).send('Internal Error (' + timeStamp + ')');
  }

  private handleGetUsers(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      const rv = JSON.stringify(this._users);
      res.json(this._users);
    } catch (err) {
      next(err);
    }
  }
}

async function startup(): Promise<void> {
  const main = new Main();
  await main.start();
}

startup().catch(err => {
  console.log(err);
});
