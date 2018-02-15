**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 15.02.2018
   
## Übersicht: 
1. Allgemeines
2. Server 
3. config.json

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

   
    private _express: express.Express;

    constructor () {
        console.log('Start');
    }

    public async start (): Promise <void> {
        this._express = express();
        this._express.use(bodyParser.urlencoded());
    }
}

const main = new Main();
```
- "Next step": bezüglich Server,wenn er Anfrage bekommt: Egal was es ist, wenn der get beginnt mit irgendwas, wird die funktion req,res,next aufgerufen

```
this._express.get('/*', (req,res,next) => this.handleGetAll(req,res,next));
```
- Dazugehörige Funktion:
```
  private handleGetAll (req: express.Request, res: express.Response, next: express.NextFunction)
    {
        try
        {
        console.log('get request vom Client');
        res.send('Not implemented yet');
        }
        catch(err)
        {
            next(err);
        }

        
    }
 ```
 - try / catch:  sollte ein Fehler auftreten - next Error - landet beim Error handler und wird behandelt
  braucht nicht in jeder get ... methode um errors kümmern, wirft sie immer weiter bis zum error handler
  
  - Error handler (zuerst aufrufen):
  ```
    this._express.use(
            (err: any, req: express.Request ,res: express.Response ,next: express.NextFunction) => this.handleError(err,req,res,next));
            ```
 - danach die Funktion dazu:
 ```
  private handleError(err: any, req: express.Request, res: express.Response, next: express.NextFunction)
    {
            res.status(500).send('Internal Error');
    }
 ```
 - Für eine zeitliche Verzögerung sorgt:
 ```
 async function startup () {
    const main = new Main();
    await main.start();
}

startup().catch((err) => {
    console.log(err);
});

 ```
 
### 3. config.json
- Anlegen der Datei config.json
