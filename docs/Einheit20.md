**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 15.02.2018
   
## Übersicht: 
1. Allgemeines
2. Server 

### 1. Allgemeines
- angular-application kann mit **ng serve** oder **ng build** gestartet werden. _ng build -prod_ baut die Daten kompakt zusammen.
- Prinzip vom letzten Projekt: Erstellen eines leeren Projektes mit zwei Unterprojekten.
- Das letzte angesprochene Projekt kann unter: https://www.htl-mechatronik.at/gitweb/me13/?p=sx-fiv.git;a=summary gedownloaded werden.
- packages installieren(für Express und Body-Parser, im Server-Ordner): 
```
npm install --save express body-parser
```
und dann
```
npm install --save-dev @types/express@ types/body-parser
```
### 2. Server
Server anlegen in der main.ts:
```
import * as express from 'express';
import * as bodyParser from 'body-parser';

class Main {

   
    private _server: express.Express;

    constructor () {
        console.log('Start');
    }

    public async start (): Promise <void> {
        this._server = express();
    }
}

const main = new Main();
```
