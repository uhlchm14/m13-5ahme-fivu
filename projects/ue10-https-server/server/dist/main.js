"use strict";
exports.__esModule = true;
process.env['DEBUG'] = '*::INFO, *::WARN, *::ERR, *::SEVERE, *::';
process.env['DEBUG_COLORS'] = 'true';
process.env['DEBUG_STREAM'] = 'stdout';
var path = require("path");
var http = require("http");
var https = require("https");
var fs = require("fs");
var express = require("express");
var debugsx = require("debug-sx");
exports.log = debugsx.createFullLogger('main');
var consolelogger = debugsx.createConsoleHandler('stdout', '*::INFO, *::FINE, *::SEVERE, *::ERR, *::WARN', '-*', [
    { level: 'INFO', color: 'cyan', inverse: true },
    { level: 'FINE', color: 'white', inverse: true },
    { level: 'SEVERE', color: 'red', inverse: true },
    { level: 'ERR', color: 'red', inverse: true },
    { level: 'WARN', color: 'magenta', inverse: true }
]);
debugsx.addHandler(consolelogger);
var privKey = fs.readFileSync(path.join(__dirname, '../../../../x509/server.pem'));
var cert = fs.readFileSync(path.join(__dirname, '../../../../x509/server.crt'));
var credentials = { key: privKey, cert: cert };
var app = express();
app.use(logger);
app.use(express.static(path.join(__dirname, '../../ng2/dist')));
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var httpport = 8080;
var httpsport = 8443;
httpServer.listen(httpport, function () {
    exports.log.info('http server running on port ' + httpport);
});
httpsServer.listen(httpsport, function () {
    exports.log.info('hhtps server running on port ' + httpsport);
});
function logger(req, res, next) {
    var clientSocket = req.socket.remoteAddress + ':' + req.socket.remotePort;
    exports.log.info(req.method, req.url, clientSocket);
    next();
}

//# sourceMappingURL=main.js.map
