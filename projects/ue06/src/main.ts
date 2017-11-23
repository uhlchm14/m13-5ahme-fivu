import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as http from 'http';
import * as cookie from 'cookie';


// Express Web Server erstellen
const server = express();
const pugEngine = server.set('view engine', 'pug');
pugEngine.locals.pretty = true;

server.use(bodyparser.urlencoded());

server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});
server.post('/saveuser', (req, res, next) => {
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        res.send('OK (' + req.body.email + ')');
    } else {
        res.status(401).send('ERROR');
    }
});
server.use(express.static('public'));


const port = 8080;
server.listen(port);
console.log('Server auf ' + port + ' gestartet: http://localhost:' + port);