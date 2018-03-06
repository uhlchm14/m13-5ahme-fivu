import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import * as path from 'path';

const privateKey  = fs.readFileSync(path.join(__dirname, '../server-poefam13.pem'));
const certificate = fs.readFileSync(path.join(__dirname, '../server-poefam13.crt'));

const credentials = {key: privateKey, cert: certificate};
const server = express();

server.get('', (req, res, next) => {
    res.send('OK');
});

const httpServer = http.createServer(server);
const httpsServer = https.createServer(credentials, server);

httpServer.listen(8080, () => {
    console.log('HTTP läuft auf 8080.');
});

httpsServer.listen(8443, () => {
    console.log('HTTPS läuft auf 8443.');
});
