**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 15.02.2018
   
## Übersicht: 
1. Allgemeines
2. Server 
3. config.json
4. Weiterarbeiten beim Server

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
Als nächstes wird die Server-Anfrage behandelt: egal welche Anfrage er bekommt, wenn der get mit irgendwas beginnt, wird die funktion "req,res,next" aufgerufen.

```
this._express.get('/*', (req,res,next) => this.handleGetAll(req,res,next));
```
- Die dazugehörige Funktion lautet:
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
 - Das **try / catch** hat folgenden Zweck:  sollte ein Fehler auftreten - landet man beim Error handler und der Error wird behandelt.
 - Vorteil: braucht nicht in jeder "get" usw.. -Methode um Errors kümmern, man wirft sie immer weiter bis zum error handler
  
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
- Anlegen der Datei config.json (Zweck: hinzufügen von Konfigurationsdateien, ist üblich, Vereinfachung):
```
{
    "server": {
        "port": 4711
    }
}
```
### 4. Weiterarbeiten beim Server
- _nconf_ ist ein Modul, um Konfigurationsdateien einzulesen.
- Dafür brauchen wir es auch, als Verknüpfung mit config.json.
- Installieren der Packages:
```
npm install --save nconf
```
und
```
npm install --save-dev @types/nconf
```

- Importieren von:
```
import * as nconf from 'nconf';
import * as path from 'path'; //Node.js-Modul --> Dateizüge zu ergänzen/zusammenzuführen...
import * as http from 'http'; //Node.js Modul
```
- Danach wird der Konstruktor verändert: 
```
 constructor () {
        const configFile = path.join(__dirname, '..', 'config.json'); 
        console.log(configFile);
        nconf.file(configFile);
        this._config = nconf.get('server');
        if( !this._config || isNaN(this._config.port)) {
            throw new Error('invalid configuration');
        }

    }
```
- Man gibt den Ordner an, in welcher sich die Datei "config.json" befindet.
- _ _dirname ist das aktuelle Verzeichnis, mit ".." eine Ebene(Ordner) höher (zurück) 
- Zum Schluss wird noch eine Funktion "handleGetError" erstellt.
```
 private handleGetError(req: express.Request, res: express.Response, next: express.NextFunction)
    {
             try{
                throw new Error('Feehlllaaaa!')
             }
             catch(err)
             {
                next(err); // ????????
             }
```

Ganzes Programm: Siehe Anhang.
