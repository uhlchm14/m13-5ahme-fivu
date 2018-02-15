import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';


class Main {
    constructor () {
        console.log('Start');
    }
}

const main = new Main();

const privateKey  = fs.readFileSync('x509/server-picdom12.pem', 'utf8');
const certificate = fs.readFileSync('x509/server-picdom12.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};
const server = express();

// your express configuration here

const httpServer = http.createServer(server);
const httpsServer = https.createServer(credentials, server);



const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;

server.use(bodyParser.urlencoded());
server.use(cookieParser());

server.get('/', (req, res, next) => {  
   console.log(req.cookies);
   if(req.cookies && req.cookies.name === 'maxi') {
       console.log('Anfrage von Maxi');
   }
   
   next();
});

server.post('/saveuser', (req, res, next) => {  
    if(req.body)
    {
        console.log(req.body);
    }
    if(req.body.name === 'maxi' && req.body.password === 'geheim'){
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week 
          }));
        res.send('OK ('+ req.body.email + ')');
    } else {
        res.status(401).send('ERROR');
    }
    
 });

server.use(express.static('public'));

httpServer.listen(8080);
httpsServer.listen(8443);
console.log('Server gestartet(http://localhost:4711)');