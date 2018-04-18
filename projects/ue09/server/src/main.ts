import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as nconf from 'nconf';
import * as path from 'path';
import * as http from 'http';
import {IUser} from './models/user';

class Main {
    private _express: express.Express;
    private _config: {port: number};
    private _server: http.Server;
    public _users: IUser [] = [];
      
       public constructor () {
           console.log('Start');
           const configFile = path.join(__dirname, '..', 'config.json');
           console.log('reading Configfile' + configFile);
           nconf.file(configFile);
           this._config = nconf.get('server');
           if(!this._config || isNaN(this._config.port))
           {
               throw new Error('invalid configuration');
           }
           this._users.push({firstname: 'Florian', surname: 'Harrer', classname: '5AHME'});
           this._users.push({firstname: 'Florian', surname: 'Greistorfer', classname: '5AHME'});
           this._users.push({firstname: 'Dominik', surname: 'Riegelnegg', classname: '5AHME'});
           this._users.push({firstname: 'Dominik', surname: 'Pichler', classname: '5AHME'});
           this._users.push({firstname: 'Julian', surname: 'Wolf', classname: '5AHME'});
           this._users.push({firstname: 'Markus', surname: 'Mörth', classname: '5AHME'});
           this._users.push({firstname: 'Lukas', surname: 'Freyler', classname: '5AHME'});
           this._users.push({firstname: 'Fabian', surname: 'Kager', classname: '5AHME'});
           this._users.push({firstname: 'Mario', surname: 'Ritter', classname: '5AHME'});
           this._users.push({firstname: 'Matthias', surname: 'Fink', classname: '5AHME'});
           this._users.push({firstname: 'Fabio', surname: 'Pölzl', classname: '5AHME'});
     }

     public async start (): Promise<void> {
        this._express = express();
        this._express.use(bodyParser.urlencoded());
       /* const pugRenderingEngine = this._server.set('view engine', 'pug');
        pugRenderingEngine.locals.pretty = true; */

        this._express.get(['/', '/index.html', '/index.htm'], (req, res, next) => 
            this.handleGetStartup(req, res, next));

        this._express.get(['/users'], (req, res, next) => 
            this.handleGetUsers(req, res, next));

        this._express.get('/error', (req, res, next) => this.handleGetError(req, res, next));
       
        const ngxPath = path.join(__dirname, '../../ngxClient/dist/');
        this._express.use(express.static(ngxPath));
        
        this._express.use((err: any, req: express.Request, res: express.Response,
             next: express.NextFunction) => this.handleError(err, req, res, next));
    
        this._server = http.createServer(this._express);
        this._server.listen(this._config.port);
        console.log('server listening (http://localhost:' + this._config.port + ')');
     }

     private handleGetStartup(req: express.Request, res: express.Response, next: express.NextFunction) 
     {
         try 
         {
            // Angular Client startfähig machen
            const indexPath = path.join(__dirname, '../../ngxClient/dist/index.html');
            res.sendFile(indexPath);
         }
         catch(err) 
         {
            next(err);
         }
     }

     private handleGetError(req: express.Request, res: express.Response, next: express.NextFunction)
     {
        try 
        {
           throw new Error('Testing Fehler...');
        }
        catch(err)
        {
           next(err);
        }
     }

     private handleError(err: any, req: express.Request, res: express.Response, next: express.NextFunction)
     {
        const timeStamp = new Date().toISOString();
        console.log(timeStamp);
        console.log(err);
        res.status(500).send('Internal Error (' + timeStamp + ')');
     }

     private handleGetUsers(req: express.Request, res: express.Response, next: express.NextFunction)
     {
         try{
            const rv = JSON.stringify(this._users);
            res.json(rv);
         }
         catch(err)
         {
             next(err);
         }
     }
}

async function startup (): Promise<void> {
    const main = new Main();
    await main.start();
}

startup().catch( (err) => {
    console.log('err');
});