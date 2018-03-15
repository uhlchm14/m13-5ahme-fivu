"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const nconf = require("nconf");
class Main {
    constructor() {
        this.users = [];
        const configFile = path.join(__dirname, '../config.json');
        nconf.file(configFile);
        this._config = nconf.get('server');
        if (!this._config || isNaN(this._config.port)) {
            throw new Error('invalid configuration');
        }
        this.users.push({ surname: 'string', firstname: 'string', classname: 'string' });
        this.users.push({ surname: 'Harrer', firstname: 'Florian', classname: 'Carrier' });
        this.users.push({ surname: 'Greistorfer', firstname: 'Florian', classname: 'Programmierer' });
        this.users.push({ surname: 'Pölzl', firstname: 'Fabio', classname: 'Intelligenzquotient' });
        this.users.push({ surname: 'Nöhrer', firstname: 'Valentin', classname: 'Intelligenzquotientendivident' });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this._express = express();
            this._express.use(bodyparser.urlencoded({ extended: true }));
            this._express.get('/users', (req, res, next) => this.handleGetUsers(req, res, next));
            this._express.get(['/', '/index.html', '/index.htm'], (req, res, next) => this.handleGetStartup(req, res, next));
            this._express.get('/error', (req, res, next) => this.handleGetError(req, res, next));
            this._express.use(express.static(path.join(__dirname, '../../ngx/dist')));
            this._express.use((err, req, res, next) => this.handleError(err, req, res, next));
            http.createServer(this._express).listen(this._config.port);
            console.log('Server started on port ' + this._config.port);
        });
    }
    handleGetStartup(req, res, next) {
        try {
            console.log('get request from client');
            res.sendFile(path.join(__dirname, '../../ngx/dist/index.html'));
        }
        catch (err) {
            next(err);
        }
    }
    handleGetUsers(req, res, next) {
        res.json(this.users);
    }
    handleGetError(req, res, next) {
        try {
            throw new Error('FUCK OFF');
        }
        catch (error) {
            next(error);
        }
    }
    handleError(err, req, res, next) {
        console.log(err);
        res.sendStatus(500).send(err);
    }
}
function startup() {
    return __awaiter(this, void 0, void 0, function* () {
        const main = new Main();
        yield main.start();
    });
}
startup().catch(err => console.log(err));

//# sourceMappingURL=main.js.map
