"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Main {
    constructor() {
        console.log('Start');
    }
}
const main = new Main();
const server = express();
server.use(express.static('public'));
server.listen(4711);

//# sourceMappingURL=main.js.map
