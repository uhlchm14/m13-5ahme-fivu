import * as fs from 'fs';
import * as express from 'express';
import * as https from 'https';
import * as http from 'http';

class Main {
    private _server: express.Express;
    private _zertifikat: Buffer;
    private _privatekey: Buffer;

    constructor () {
        this._zertifikat = fs.readFileSync('../x509/server-frelum13.crt');
        this._privatekey = fs.readFileSync('../x509/server-frelum13.pem');

        this._server = express();

        // const credentials = {key: this._privatekey, cert: this._zertifikat};

    }
    public startHTTPServer(port: number) {
        const httpServer = http.createServer(this._server);
        httpServer.listen(port);
        console.log('Server gestartet (http://localhost:8080)');
    }
    public startHTTPSServer(port: number) {
        const credentials = {key: this._privatekey, cert: this._zertifikat};
        const httpsServer = https.createServer(credentials, this._server);
        httpsServer.listen(port);
        console.log('Server gestartet (http://localhost:8443)');
    }
}

const main = new Main();
main.startHTTPServer(8080);
main.startHTTPSServer(8443);
