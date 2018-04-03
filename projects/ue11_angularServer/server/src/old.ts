/*

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as nconf from 'nconf';
import * as path from 'path';
import * as http from 'http';

class Main
{
  private _express: express.Express;
  private _server: http.Server;
  private _config: { port: number };

  constructor ()
  {
    const configFile = path.join(__dirname, '../config.json');
    console.log(configFile);
    nconf.file(configFile);
    this._config = nconf.get('server');
    if (!this._config || isNaN(this._config.port))
    {
      throw new Error('The configuration is fucking invalid!');
    }
  }

  public async start (): Promise<void>
  {
    this._express = express();
    this._express.use(bodyParser.urlencoded({extended: true}));
    
    //const pugRenderingEngine = this._server.set('view engine', 'pug');
    //pugRenderingEngine.locals.pretty = true;

    this._express.get([ '/', '/index.html', '/index.htm' ], (req, res, next) => this.handleGetStartup(req, res, next));

    this._express.use(express.static(path.join(__dirname, '../../ng2/dist')));

    this._express.get('/error', (req, res, next) => this.handleGetError(req, res, next));
    
    this._express.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => this.handleError(err, req, res, next));
    
    this._server = http.createServer(this._express);
    this._server.listen(this._config.port);
    console.log('1 Server @ ( http://localhost:' + this._config.port + ' )');
  }

  private handleGetStartup (req: express.Request, res: express.Response, next: express.NextFunction)
  {
    try
    {
      const indexPath = path.join(__dirname, '../../ng2/dist/index.html');
      res.sendFile(indexPath);

      // console.log('GET-Request vong Client');
      // res.send('Nobody implemented this shit yet');
    }
    catch (err)
    {
      next(err);
    }
  }

  private handleGetError (req: express.Request, res: express.Response, next: express.NextFunction)
  {
    try
    {
      throw new Error('1 fucking Error');
    }
    catch (err)
    {
      next(err);
    }
  }

  private handleError (err: any, req: express.Request, res: express.Response, next: express.NextFunction)
  {
    const timeStamp = new Date().toISOString();
    console.log(timeStamp);
    console.log(err);
    res.status(500).send('I bims 1 Error ( ' + timeStamp + ' )');
  }
}

async function startup (): Promise<void>
{
  const main = new Main();
  await main.start();
}

startup().catch( (err) => {
  console.log(err);
});

//express, body-parser, nconf



*/