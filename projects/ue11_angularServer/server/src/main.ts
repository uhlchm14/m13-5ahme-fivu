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

export const log: debugsx.IFullLogger = debugsx.createFullLogger('main');
const consolelogger: debugsx.IHandler = debugsx.createConsoleHandler('stdout', '*::INFO, *::FINE, *::SEVERE, *::ERR, *::WARN', '-*', [
  { level: 'INFO', color: 'cyan', inverse: true },
  { level: 'FINE', color: 'white', inverse: true },
  { level: 'SEVERE', color: 'red', inverse: true },
  { level: 'ERR', color: 'red', inverse: true },
  { level: 'WARN', color: 'magenta', inverse: true }
]);
debugsx.addHandler(consolelogger);

const privKey = fs.readFileSync(path.join(__dirname, '../../../../x509/server.pem'));
const cert = fs.readFileSync(path.join(__dirname, '../../../../x509/server.crt'));

const credentials = { key: privKey, cert: cert };
const app = express();

app.use(logger);
app.use(express.static(path.join(__dirname, '../../ng2/dist')));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

const httpport = 8080;
const httpsport = 8443;

httpServer.listen(httpport, () => {
  log.info('http server running on port ' + httpport);
});
httpsServer.listen(httpsport, () => {
  log.info('hhtps server running on port ' + httpsport);
});

function logger(req: express.Request, res: express.Response, next: express.NextFunction) {
  const clientSocket = req.socket.remoteAddress + ':' + req.socket.remotePort;
  log.info(req.method, req.url, clientSocket);
  next();
}
