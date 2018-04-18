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
const user_1 = require("./user");
const mongodb = require("mongodb");
class DbMongoUser {
    static createInstance(socket = 'localhost:27017') {
        return __awaiter(this, void 0, void 0, function* () {
            if (DbMongoUser._instance) {
                throw new Error('instance already created');
            }
            const instance = new DbMongoUser();
            yield instance.start();
            DbMongoUser._instance = instance;
            return DbMongoUser._instance;
        });
    }
    static get Instance() {
        if (!DbMongoUser._instance) {
            throw new Error('instance not created yet');
        }
        return DbMongoUser._instance;
    }
    constructor() {
    }
    getUserIds() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this._users.find({}, { htlid: 1 }).toArray();
            const rv = [];
            for (const u of users) {
                rv.push(u.htlid);
            }
            return rv;
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this._users.find({ htlid: id }).toArray();
            if (users.length === 0) {
                return undefined;
            }
            else if (users.length > 1) {
                throw new Error('multiple users with htlid ' + id + 'in database');
            }
            return new user_1.User(users[0]);
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'mongodb://localhost:27017/m13la1g1';
            try {
                const dbServer = yield mongodb.MongoClient.connect(url);
                console.log('Database connected');
                const dbUsers = dbServer.db('m13la1g1');
                let collUsers = yield dbUsers.collection('users');
                let size;
                try {
                    const size = yield collUsers.count({});
                }
                catch (err) {
                    collUsers = yield dbUsers.createCollection('users');
                    size = 0;
                }
                if (size === 0) {
                    const initUsers = [
                        { htlid: 'sx', surname: 'Steiner', firstname: 'Manfred' },
                        { htlid: 'kormam13', surname: 'Korosec', firstname: 'Marian' },
                        { htlid: 'greflm13', surname: 'Greistorfer', firstname: 'Florian' },
                        { htlid: 'harflm13', surname: 'Harrer', firstname: 'Florian' },
                        { htlid: 'frelum13', surname: 'Freyler', firstname: 'Lukas' },
                        { htlid: 'finmam13', surname: 'Fink', firstname: 'Matthias' },
                        { htlid: 'kagfam13', surname: 'Kager', firstname: 'Fabian' }
                    ];
                    yield collUsers.insertMany(initUsers);
                }
                this._users = collUsers;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.DbMongoUser = DbMongoUser;

//# sourceMappingURL=db-mongo-user.js.map
