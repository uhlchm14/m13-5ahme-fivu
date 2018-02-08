"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");
let privateKey = fs.readFileSync('certificates/ca.pem', 'utf8');
let certificate = fs.readFileSync('certificates/ca.crt', 'utf8');
let credentials = { key: privateKey, cert: certificate };
let server = express();
server.get('/', (req, res, next) => {
    res.send('OK');
});
let httpServer = http.createServer(server);
let httpsServer = https.createServer(credentials, server);
httpServer.listen(8080);
httpsServer.listen(8443);

//# sourceMappingURL=main.js.map
