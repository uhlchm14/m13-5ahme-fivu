"use strict";
exports.__esModule = true;
var express = require("express");
var Main = /** @class */ (function () {
    function Main() {
        console.log('Start');
    }
    return Main;
}());
var main = new Main();
// Express Web Server erstellen
var server = express();
var pugEngine = server.set('view engine', 'pug');
pugEngine.locals.pretty = true;
server.get('/', function (req, res, next) {
    // res.render('index.pug');
    next();
});
server.use(express.static('public'));
var port = 8080;
server.listen(port);
console.log('Server auf ' + port + ' gestartet: http://localhost:' + port);

//# sourceMappingURL=main.js.map
