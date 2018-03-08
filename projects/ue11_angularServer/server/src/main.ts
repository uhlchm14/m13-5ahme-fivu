process.env['DEBUG'] = '*::INFO, *::WARN, *::ERR, *::SEVERE, *::';
process.env['DEBUG_COLORS'] = 'true';
process.env['DEBUG_STREAM'] = 'stdout';

import * as path from 'path';
import * as http from 'http';
import * as https from 'https';
import * as child from 'child_process';
import * as fs from 'fs';

import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as debugsx from 'debug-sx';
import * as nconf from 'nconf';

export const log: debugsx.IFullLogger = debugsx.createFullLogger('main');
const consolelogger: debugsx.IHandler = debugsx.createConsoleHandler('stdout', '*::INFO, *::FINE, *::SEVERE, *::ERR, *::WARN', '-*', [
  { level: 'INFO', color: 'cyan', inverse: true },
  { level: 'FINE', color: 'white', inverse: true },
  { level: 'SEVERE', color: 'red', inverse: true },
  { level: 'ERR', color: 'red', inverse: true },
  { level: 'WARN', color: 'magenta', inverse: true }
]);
debugsx.addHandler(consolelogger);

// region comment
// const privKey = fs.readFileSync(path.join(__dirname, '../../../../x509/server.pem'));
// const cert = fs.readFileSync(path.join(__dirname, '../../../../x509/server.crt'));

// const credentials = { key: privKey, cert: cert };
// const app = express();

// app.use(logger);
// app.use(express.static(path.join(__dirname, '../../ng2/dist')));

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

// const httpport = 8080;
// const httpsport = 8443;

// httpServer.listen(httpport, () => {
//   log.info('http server running on port ' + httpport);
// });
// httpsServer.listen(httpsport, () => {
//   log.info('hhtps server running on port ' + httpsport);
// });

// function logger(req: express.Request, res: express.Response, next: express.NextFunction) {
//   const clientSocket = req.socket.remoteAddress + ':' + req.socket.remotePort;
//   log.info(req.method, req.url, clientSocket);
//   next();
// }
// endregion

class Main {
  private _express: any;
  private _config: { port: number };

  constructor() {
    const configFile = path.join(__dirname, '../config.json');
    nconf.file(configFile);
    this._config = nconf.get('server');
    if (!this._config || isNaN(this._config.port)) {
      throw new Error('invalid configuration');
    }
  }

  public async start(): Promise<void> {
    this._express = express();
    this._express.use(bodyparser.urlencoded({ extended: true }));

    this._express.get(['/', '/index.html', '/index.htm'], (req, res, next) => this.handleGetStartup(req, res, next));
    this._express.use(express.static(path.join(__dirname, '../../ng2/dist')));
    this._express.get('/error', (req, res, next) => this.handleGetError);
    this._express.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => this.handleError(err, req, res, next));

    http.createServer(this._express).listen(this._config.port);
    log.info('Server started on port ' + this._config.port);
  }

  public handleGetStartup(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      log.info('get request from client');
      this._express.use(express.static(path.join(__dirname, '../../ng2/dist')));
    } catch (err) {
      next(err);
    }
  }

  public handleGetError(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      throw new Error('FUCK OFF');
    } catch (error) {
      next(error);
    }
  }

  public handleError(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    log.warn(err);
    res.sendStatus(500).send(err);
  }
}

async function startup() {
  const main = new Main();
  await main.start();
}

startup().catch(err => log.severe(err));
