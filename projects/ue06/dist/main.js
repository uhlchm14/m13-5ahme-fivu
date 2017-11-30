"use strict";
exports.__esModule = true;
var express = require("express");
var bodyparser = require("body-parser");
var cookie = require("cookie");
var cookieparser = require("cookie-parser");
// Express Web app erstellen
var app = express();
var pugEngine = app.set('view engine', 'pug');
pugEngine.locals.pretty = true;
app.use(bodyparser.urlencoded());
app.use(cookieparser());
app.get('/', function (req, res, next) {
    // res.render('index.pug');
    console.log(req.cookies);
    next();
});
app.post('/saveuser', setCookie);
app.use(express.static('public'));
function setCookie(req, res, next) {
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7
        }));
        res.send('OK (' + req.body.email + ')');
    }
    else {
        res.status(401).send('ERROR');
    }
}
var port = 8080;
app.listen(port);
console.log('app auf ' + port + ' gestartet: http://localhost:' + port);

//# sourceMappingURL=main.js.map
