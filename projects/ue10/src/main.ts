import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';



let privateKey  = fs.readFileSync('certificates/ca.crt', 'utf8');
let certificate = fs.readFileSync('certificates/ca.pem', 'utf8');
let credentials = {key: privateKey, cert: certificate};
let app = express();

// your express configuration here

let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);