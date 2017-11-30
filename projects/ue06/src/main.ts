import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as http from 'http';
import * as cookie from 'cookie';
import * as cookieparser from 'cookie-parser';


// Express Web app erstellen
const app = express();
const pugEngine = app.set('view engine', 'pug');
pugEngine.locals.pretty = true;

app.use(bodyparser.urlencoded());
app.use(cookieparser());

app.get('/', (req, res, next) => {
    // res.render('index.pug');
    console.log(req.cookies);
    next();
});
app.post('/saveuser', setCookie);
app.use(express.static('public'));


function setCookie(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.body) {
        console.log(req.body);
    }
    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        res.setHeader(
            'Set-Cookie',
            cookie.serialize('name', req.body.name, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7
            })
        );
        res.send('OK (' + req.body.email + ')');
    } else {
        res.status(401).send('ERROR');
    }
}


const port = 8080;
app.listen(port);
console.log('app auf ' + port + ' gestartet: http://localhost:' + port);