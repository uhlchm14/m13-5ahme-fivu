import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

class Main {
  private _server: express.Express;
  private _privateKey: Buffer;
  private _publicKey: Buffer;

  constructor() {
    this._publicKey = fs.readFileSync(path.join(__dirname, '../keys/server-public.pem'));
    this._privateKey = fs.readFileSync(path.join(__dirname, '../keys/server-private.pem'));
    console.log('Keypair read from file.');

    this._server = express();

    // Express arbeitet in Schichten nach der Reihefolge der
    // Definition im Quelltext

    this._server.use(bodyParser.urlencoded({ extended: true }));

    // 1. Schicht
    this._server.get('/', (req, res, next) => {
      next();
    });

    // 2. Schicht
    this._server.post('/login', (req, res, next) => this.getLogin(req, res, next));

    this._server.get('/data', (req, res, next) => this.getData(req, res, next));

    // 3. Schicht
    // Verzeichnis public für statische HTML Seiten definieren
    this._server.use(express.static('public'));
  }

  public startServer(port: number) {
    this._server.listen(port, () => {
      console.log('Server gestartet (http://localhost:)' + port);
    });
  }

  private getData(req: express.Request, res: express.Response, next: express.NextFunction) {
    const value = <string>req.headers.authorization;
    if (value.startsWith('Bearer: ')) {
      const token = value.substring(8);
      console.log(token);
      jwt.verify(token, this._publicKey, (err, decoded: any) => {
        try {
          if (err) {
            throw err;
          }
          if (decoded.name && decoded.name === 'enter') {
            console.log(decoded);
            const issuedAt = new Date(decoded.iat * 1000);
            console.log(issuedAt.toLocaleString());
            res.send('OK');
          } else {
            throw new Error('invalid token object');
          }
        } catch (err) {
          console.log(err);
          res.status(401).send('Error');
        }
      });
    }
    res.status(500).send('Not implemented');
  }

  private getLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.body) {
      console.log(req.body);
    }
    if (req.body.name === 'enter' && req.body.password === 'enter') {
      const token = jwt.sign({ name: 'enter' }, this._privateKey, {
        expiresIn: '2h',
        algorithm: 'RS256'
      });
      res.json(token);
      // res.send('OK (' + req.body.email + ')');
    } else {
      res.status(401).send('ERROR');
    }
    // next();
  }
}

const main = new Main();
main.startServer(4711);
