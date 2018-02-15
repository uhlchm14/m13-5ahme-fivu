"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
process.env['DEBUG'] = '*::INFO, *::WARN, *::ERR, *::SEVERE, *::';
process.env['DEBUG_COLORS'] = 'true';
process.env['DEBUG_STREAM'] = 'stdout';
var path = require("path");
var http = require("http");
var express = require("express");
var bodyparser = require("body-parser");
var debugsx = require("debug-sx");
var nconf = require("nconf");
exports.log = debugsx.createFullLogger('main');
var consolelogger = debugsx.createConsoleHandler('stdout', '*::INFO, *::FINE, *::SEVERE, *::ERR, *::WARN', '-*', [
    { level: 'INFO', color: 'cyan', inverse: true },
    { level: 'FINE', color: 'white', inverse: true },
    { level: 'SEVERE', color: 'red', inverse: true },
    { level: 'ERR', color: 'red', inverse: true },
    { level: 'WARN', color: 'magenta', inverse: true }
]);
debugsx.addHandler(consolelogger);
// region comment
// const privKey = fs.readFileSync(path.join(__dirname, '../../../../x509/server.pem'));
// const cert = fs.readFileSync(path.join(__dirname, '../../../../x509/server.crt'));
// const credentials = { key: privKey, cert: cert };
// const app = express();
// app.use(logger);
// app.use(express.static(path.join(__dirname, '../../ng2/dist')));
// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);
// const httpport = 8080;
// const httpsport = 8443;
// httpServer.listen(httpport, () => {
//   log.info('http server running on port ' + httpport);
// });
// httpsServer.listen(httpsport, () => {
//   log.info('hhtps server running on port ' + httpsport);
// });
// function logger(req: express.Request, res: express.Response, next: express.NextFunction) {
//   const clientSocket = req.socket.remoteAddress + ':' + req.socket.remotePort;
//   log.info(req.method, req.url, clientSocket);
//   next();
// }
// endregion
var Main = /** @class */ (function () {
    function Main() {
        var configFile = path.join(__dirname, '../config.json');
        nconf.file(configFile);
        this._config = nconf.get('server');
        if (!this._config || isNaN(this._config.port)) {
            throw new Error('invalid configuration');
        }
    }
    Main.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._express = express();
                this._express.use(bodyparser.urlencoded({ extended: true }));
                this._express.get(['/', '/index.html', '/index.htm'], function (req, res, next) { return _this.handleGetStartup(req, res, next); });
                this._express.get('/error', function (req, res, next) { return _this.handleGetError; });
                this._express.use(function (err, req, res, next) {
                    return _this.handleError(err, req, res, next);
                });
                http.createServer(this._express).listen(4711);
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.handleGetStartup = function (req, res, next) {
        try {
            exports.log.info('get request from client');
            res.send('starting angular...');
        }
        catch (err) {
            next(err);
        }
    };
    Main.prototype.handleGetError = function (req, res, next) {
        try {
            throw new Error('FUCK OFF');
        }
        catch (error) {
            next(error);
        }
    };
    Main.prototype.handleError = function (err, req, res, next) {
        exports.log.warn(err);
        res.sendStatus(500).send(err);
    };
    return Main;
}());
function startup() {
    return __awaiter(this, void 0, void 0, function () {
        var main;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    main = new Main();
                    return [4 /*yield*/, main.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
startup()["catch"](function (err) { return exports.log.severe(err); });

//# sourceMappingURL=main.js.map
