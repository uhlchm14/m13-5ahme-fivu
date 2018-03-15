# 20.Einheit 15.03.2018 (Donnerstag)

**Verfasser:** Dominik Pichler  
**Lehrer:** Steiner   
**Datum der Einheit:** 15.03.2018

* Wiederholung der letzten Einheit.
* Daten von UE09 aus dem Ordner src->app in die UE11 ngxClient->src->app kopieren. Mit rsync Befehl werden die Daten kopiert.
* Die fehlenden Packages (bootstrap und ng-bootstrap) mit `npm install` installieren.
* Server starten und kontrollieren, das alles in Ordnung ist.
* User sollen mithilfe des HttpClient Services vom Server angefragt werden.
  + `HttpClientModule` muss dafür im `AppModule` importiert werden:
```javascript

import { HttpClientModule } from '@angular/common/http';

imports: [
    BrowserModule,HttpClientModule, NgbModule.forRoot()
````
  + HttpClient muss in die Component "injected" werden.

```javascript
constructor(private httpClient: HttpClient) { }
     
````
  + Http request erstellen:
```javascript

 private async reloadUsers (): Promise<void>{
    try{
       const result = await this.httpClient.get('/users').toPromise(); // Request
       console.log(result);
    } catch(err) {
      console.log(err);
    }
  }
````
  + Da der Request asynchron ist, muss die Methode mit `async` makiert werden und der Request selber mit `await` aufgerufen werden.

* Im Server muss ein entsprechender Request-Handler zur "Middleware" hinzufügt werden. Wenn der Client `GET /users` sendet, wird `handleGetUsers()` aufgerufen.

```javascript

 this._express.get('/users', (req, res, next) => this.handleGetUsers(req, res, next));

````

* Im Handler wird ein Array von `IUser`n in JSON umgewandelt und mit `res.json()` in einer Response an den Client geschickt. Der Request-Handler schaut wie folgt aus:

```javascript
private handleGetUsers(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const rv = JSON.stringify(this._users);
            res.send(rv);
        } catch (err) {                    
            next(err);
        }
    }
````

* In der `main.ts` wird das Array von `IUser`n angelegt: `private _users: IUser [] = [];` und bekommt im Constructor einige Werte.
* Das `IUser` Interface soll das Gleiche wie beim Client sein, dafür legen wir im Server den models Ordner an. Mit einem weichen "Symbolic link" wird dieser Ordner mit dem models Ordner im Client verknüpft. Dadurch ist der Inhalt beider Ordner der Selbe. Unter Linux wird der Link mit folgendem Befehl erzeugt: `ln -s ../../ngxClient/src/app/models/`.
`


