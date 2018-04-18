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
const db_mongo_user_1 = require("./db-mongo-user");
const server_1 = require("./server");
class Main {
    constructor() {
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield db_mongo_user_1.DbMongoUser.createInstance();
            server_1.Server.Instance.start(4711);
        });
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const mainObj = new Main();
        yield mainObj.init;
        const ids = yield db_mongo_user_1.DbMongoUser.Instance.getUserIds();
        console.log(ids);
    });
}

//# sourceMappingURL=main.js.map
