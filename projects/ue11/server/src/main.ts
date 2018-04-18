import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as path from 'path'
import * as bodyparser from 'body-parser' 

const privateKey  = fs.readFileSync(path.join(__dirname, '../server-finmam13.pem'));
const certificate = fs.readFileSync(path.join(__dirname, '../server-finmam13.crt'));

const credentials = {key: privateKey, cert: certificate};
//const express = require('express');
const server = express();
server.get('', (req, res, next)=> {
    res.send('OK');
});
// your express configuration here

let httpServer = http.createServer(server);
let httpsServer = https.createServer(credentials, server);

const httpPort = 8080;
const httpsPort = 8443;

httpServer.listen(httpPort, () => {
    console.log('http Server is running on port: ' + httpPort);
});

httpsServer.listen(httpsPort, () => {
    console.log('https Server is running on port: ' + httpsPort);
});

