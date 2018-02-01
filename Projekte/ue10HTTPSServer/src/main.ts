
import { sprintf } from 'sprintf-js';
import * as express from 'express'; // Name express wird verwendet vom Modul 'express'
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';

class Main {
    constructor () {
        console.log('Start');
    }

}

const main = new Main();

// Express Web Server erstellen
const app = express();

// Render engine pug in Express einbinden
const pugRenderingEgine = app.set('view engine', 'pug');
pugRenderingEgine.locals.pretty = true;

// Verzeichnis public für statische HTML Seiten definieren
const privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const express = require('express');

// your express configuration here

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

console.log('Server gestartet (http://localhost:4711');
