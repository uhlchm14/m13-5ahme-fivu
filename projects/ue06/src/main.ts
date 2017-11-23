import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';

class Main {
    constructor () {
        console.log('Hi');
    }
}

const main = new Main();

const server = express();
const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;

server.use(bodyParser.urlencoded());

// 1.Schicht
server.get('/', (req, res, next) => {
    // res.render('index.pug');
    next();
});


// 2.Schicht
server.post('/saveuser', (req, res, next) => {
    if(req.body){
        console.log(req.body);
    }
    if(req.body.name === 'Fabian' && req.body.passwort === '1234'){
        
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week 
          }));


    }else{
        res.status(401).send('Error');
    }
})

server.use(express.static('sites'));



server.listen(4711);
console.log('Server gestartet (http://localhost:4711)');