import { sprintf } from 'sprintf-js';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookie from 'cookie';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';


class Main 
{     
    constructor () 
    {
        console.log('Start');
   }
}

const privateKey  = fs.readFileSync('security/server-woljum13.pem', 'utf8');
const certificate = fs.readFileSync('security/server-woljum13.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};
const server = express();

// your express configuration here

const httpServer = http.createServer(server);
const httpsServer = https.createServer(credentials, server);

const main = new Main();

const pugRenderingEngine = server.set('view engine', 'pug');
pugRenderingEngine.locals.pretty = true;

//Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext

//let counter: number = 1;

// var options = {
//     inflate: true,
//     type: 'application/x-www-form-urlencoded',
// };

// server.use()

server.use(bodyParser.urlencoded());

//1.Schicht
server.get('/', (req, res, next) => {
//res.render('index.pug'/*, { counterValue: counter++ }*/);
console.log(req.cookies);
if(req.cookies && req.cookies.name === 'maxi')
{
    console.log('Anfrage von maxi');
}
next();

});

//2.Schicht
// server.post('/saveuser', (req, res, next) => {
//     let rawBody = '';
//     req.setEncoding('utf8');

//     req.on('data', (chunk) => {
//         debugger;
//         rawBody += chunk;
//     });
//     req.on('end', () => {
//         debugger;
        
//     })
//     });

//2.Schicht
server.post('/saveuser', (req, res, next) => {
    if(req.body)
    {
        console.log(req.body);
    }
    if(req.body.name === 'maxi' && req.body.password === 'geheim')
    {
        res.setHeader( 'Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week 
          }));
        res.send('OK (' + req.body.email + ')');
    }
    else
    {
        res.status(401).send('Error');
    }
    next();
});



//3.Schicht
//Verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

httpServer.listen(8080);
httpsServer.listen(8443)
console.log('Server gestartet');
console.log('Server gestartet (http://localhost:4711)');