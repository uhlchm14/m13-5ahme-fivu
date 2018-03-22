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
var express = require("express");
var bodyparser = require("body-parser");
var nconf = require("nconf");
var path = require("path");
var http = require("http");
var Main = /** @class */ (function () {
    function Main() {
        this._users = [];
        var configFile = path.join(__dirname, '../config.json');
        console.log(configFile);
        nconf.file(configFile);
        this._config = nconf.get('server');
        if (!this._config || isNaN(this._config.port)) {
            throw new Error('invalid configuration');
        }
        this._users.push({ surname: 'Fink', firstname: 'Matthias', classname: '5AHME' });
        this._users.push({ surname: 'Freyler', firstname: 'Lukas', classname: '5AHME' });
        this._users.push({ surname: 'Greistorfer', firstname: 'Florian', classname: '5AHME' });
        this._users.push({ surname: 'Harrer', firstname: 'Florian', classname: '5AHME' });
        console.log('Start');
    }
    Main.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._express = express();
                this._express.use(bodyparser.urlencoded({ extended: true }));
                // const pugRenderungEngine = this._server.set('view engine', 'pug');
                // pugRenderungEngine.locals.pretty = true;
                this._express.get(['/', '/index.html', '/index.htm'], function (req, res, next) { return _this.handleGetStartup(req, res, next); });
                this._express.get('/users', function (req, res, next) { return _this.handleGetUsers(req, res, next); });
                this._express.use(express.static(path.join(__dirname, '../../ngxClient/dist')));
                this._express.get('/error', function (req, res, next) { return _this.handleGetError(req, res, next); });
                this._express.use(function (err, req, res, next) {
                    return _this.handleError(err, req, res, next);
                });
                this._server = http.createServer(this._express).listen(this._config.port);
                console.log('server now listining ( http://localhost:' + this._config.port + ')');
                return [2 /*return*/];
            });
        });
    };
    Main.prototype.handleGetStartup = function (req, res, next) {
        try {
            var indexPath = path.join(__dirname, '../../ngxClient/dist/index.html');
            res.sendFile(indexPath);
        }
        catch (err) {
            next(err);
        }
    };
    Main.prototype.handleGetError = function (req, res, next) {
        try {
            throw new Error('I bims a Test-Error');
        }
        catch (err) {
            next(err);
        }
    };
    Main.prototype.handleError = function (err, req, res, next) {
        var timeStamp = new Date().toISOString();
        console.log(timeStamp);
        console.log(err);
        res.status(500).send('Internal Error (' + timeStamp + ')');
    };
    Main.prototype.handleGetUsers = function (req, res, next) {
        try {
            var rv = JSON.stringify(this._users);
            res.json(this._users);
        }
        catch (err) {
            next(err);
        }
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
startup()["catch"](function (err) {
    console.log(err);
});

//# sourceMappingURL=main.js.map
