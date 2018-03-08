import * as express from 'express'; // Name express wird verwendet vom Modul 'express'
import * as bodyParser from 'body-parser';
import * as nconf from 'nconf';
import * as path from 'path'; //node.js modul
import * as http from 'http'; // Node.js Modul

class Main {
/////////////////////////////////////////////////////////////////////////

private _config: {port: number};
private _server: http.Server;
private _express: express.Express;


    constructor (){
        const configFile = path.join(__dirname, '..', 'config.json');
        console.log(configFile);
        nconf.file(configFile);
        this._config = nconf.get('server');
        if(!this._config || isNaN(this._config.port)) {
            throw new Error('invalid configuration');
        }
    }

    public async start(): Promise<void> {
        this._express = express();
        this._express.use(bodyParser.urlencoded());
       // const pugRenderingEngine = this._server.set('view engine', 'pug');
        //pugRenderingEngine.locals.pretty = true;

        this._express.get(['/', '/index.html', '/index.htm'], (req, res, next) => this.handleGetStartUp(req, res, next));

        this._express.get('/error', (req, res, next) => this.handleGetError(req, res, next));

        const ngxPath = path.join(__dirname, '../../ngx/dist');
        
        this._express.use(express.static(ngxPath));
                // Error Handling
        this._express.use(
            (err: any, 
            req: express.Request, 
            res: express.Response, 
            next: express.NextFunction) => this.handleError(err, req, res, next));
    
            this._server = http.createServer(this._express);
            this._server.listen(this._config.port);
            console.log('server listening ( http://localhost:' + this._config.port + ')');
    
        }



    private handleGetStartUp (req: express.Request, res: express.Response, 
                next: express.NextFunction) {
                    try{
                        const indexPath = path.join(__dirname, '../../ngx/dist/index.html'); // 
                        res.sendFile(indexPath);
                    
                } catch (err) {
                    next(err);
                }
                }

    private handleGetError (req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            throw new Error ('Testing error expection...');
        
        }
        catch(err)
        {
            next(err);
        }
        }

    private handleError (err: any, req: express.Request, res: express.Response,
    next: express.NextFunction) {
        const timeStamp = new Date().toISOString();
        console.log(timeStamp);
        console.log(err);
        res.status(500).send('InternalError (' + timeStamp + ')');
    }
}

// Fertig machen!
async function startup(): Promise<void> {
const main = new Main();
await main.start();
}

startup().catch( (err) => {
    console.log(err);
});


