"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const morgan = require("morgan");
const express = require("express");
const db_user_1 = require("./db-user");
class Server {
    static get Instance() {
        if (Server._instance === undefined) {
            Server._instance = new Server();
        }
        return Server._instance;
    }
    constructor() { }
    start(port) {
        this._express = express();
        this._express.use(morgan('tiny'));
        this._express.get('/user', (req, res, next) => this.handleGet(req, res, next));
        const server = http.createServer(this._express).listen(port, () => {
            console.log('Server gestartet');
        });
        server.on('connection', socket => {
            console.log('Connection established: ' +
                socket.remoteAddress + ':' + socket.remotePort);
        });
        server.on('close', () => {
            console.log('Server gestoppt');
        });
        server.on('error', err => {
            console.log(err);
        });
    }
    handleAll(req, res, next) {
        res.send('OK');
    }
    handleGet(req, res, next) {
        if (!req.query || !req.query.htlid) {
            res.status(404).end();
            return;
        }
        const user = db_user_1.DbUser.Instance.getUser(req.query.htlid);
        if (user) {
            res.json(user.toObject());
        }
        else {
            res.status(404).end();
        }
    }
}
exports.Server = Server;

//# sourceMappingURL=server.js.map
