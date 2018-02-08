import * as path from 'path';
import * as http from 'http';
import * as https from 'https';
import * as child from 'child_process';
import * as fs from 'fs';

import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as debugsx from 'debug-sx';

const privKey = fs.readFileSync(path.join(__dirname, '../../../x509/server-harflm13.pem'));
const cert = fs.readFileSync(path.join(__dirname, '../../../x509/server-harflm13.crt'));

const credentials = {key: privKey, cert: cert};
const app = express();

app.get('', (req, res, next) => {
    res.send('OK :)');
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

const httpPort = 8080;
const httpsPort = 8443;

httpServer.listen(httpPort, () => {
    console.log('http server is runnining on port: ' + httpPort);
});

httpsServer.listen(httpsPort, () => {
    console.log('https server is runnining on port: ' + httpsPort);
});