"use strict";
exports.__esModule = true;
var path = require("path");
var http = require("http");
var https = require("https");
var fs = require("fs");
var express = require("express");
var privKey = fs.readFileSync(path.join(__dirname, '../../../x509/server-harflm13.pem'));
var cert = fs.readFileSync(path.join(__dirname, '../../../x509/server-harflm13.crt'));
var credentials = { key: privKey, cert: cert };
var app = express();
app.get('', function (req, res, next) {
    res.send('OK :)');
});
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var httpPort = 8080;
var httpsPort = 8443;
httpServer.listen(httpPort, function () {
    console.log('http server is runnining on port: ' + httpPort);
});
httpsServer.listen(httpsPort, function () {
    console.log('https server is runnining on port: ' + httpsPort);
});

//# sourceMappingURL=main.js.map
