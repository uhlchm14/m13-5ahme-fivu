"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const privateKey = fs.readFileSync(path.join(__dirname, '../server-finmam13.pem'));
const certificate = fs.readFileSync(path.join(__dirname, '../server-finmam13.crt'));
const credentials = { key: privateKey, cert: certificate };
const server = express();
server.get('', (req, res, next) => {
    res.send('OK');
});
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

//# sourceMappingURL=main.js.map
