"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class DbUser {
    constructor() {
        this._mapUser = {};
        const initUsers = [
            { htlid: 'sx', surname: 'Steiner', firstname: 'Manfred' },
            { htlid: 'kormam13', surname: 'Korosec', firstname: 'Marian' },
            { htlid: 'greflm13', surname: 'Greistorfer', firstname: 'Florian' },
            { htlid: 'harflm13', surname: 'Harrer', firstname: 'Florian' },
            { htlid: 'frelum13', surname: 'Freyler', firstname: 'Lukas' },
            { htlid: 'finmam13', surname: 'Fink', firstname: 'Mathias' },
            { htlid: 'kagfam13', surname: 'Kager', firstname: 'Fabian' }
        ];
        for (const u of initUsers) {
            this._mapUser[u.htlid] = new user_1.User(u);
        }
    }
    static get Instance() {
        if (!DbUser._instance) {
            DbUser._instance = new DbUser();
        }
        return DbUser._instance;
    }
    getUserIds() {
        return Object.keys(this._mapUser);
    }
    getUser(id) {
        return this._mapUser[id];
    }
}
exports.DbUser = DbUser;

//# sourceMappingURL=db-user.js.map
