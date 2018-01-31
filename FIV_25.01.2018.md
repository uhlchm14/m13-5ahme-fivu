# Einheit vom 25.01.2018

* Zu Beginn dieser Einheit haben wir unser Vorhaben für die nächsten Einheiten besprochen.
  * Angular Project von Server aus starten
  * Programm auf einem Embedded System realisieren (z.B. Raspberry Pi)
## Service erstellen

Komponenten sollten Daten nicht direkt abrufen oder speichern. Sie sollten sich darauf konzentrieren, Daten darzustellen und den Datenzugriff auf
einen Dienst zu delegieren.
In unserem Fall haben wir einen UserService erstellt. 
Alle Anwendungsklassen können diesen Service verwenden
um die User zu bekommen. Services sind eine großartige Möglichkeit, Informationen 
zwischen Klassen auszutauschen, die sich nicht kennen.

* Service erstellen:
  * Unser erster Schritt wares das @Components zu @Injectable zu ändern:
    * Dependency Injection (DI) ist eine Möglichkeit, Objekte
    zu erstellen, die von anderen Objekten abhängen. 
    Ein Dependency-Injection-System liefert die abhängigen 
    Objekte, wenn es eine 
    Instanz eines Objekts erstellt.

  * Wenn nun getUsers aufgerufen wird baut der Service eine Verbindung zum 
  Server auf, holt die daten und gibt sie dem Benutzer zur Verfügung. 
  Das braucht aber einige Zeit. Deswegen bauen wir ein async ein.
    * Mit dem async erlauben wir dem Programm das andere Funktionen weiter
    laufen während getUsers arbeitet. Außerdem haben wir dadurch als
    Rückgabewert Promise<IUser[]>.
```typescript
import { Injectable } from '@angular/core';
import { IUser } from './models/user';

@Injectable()
export class UserService {

    private users: IUser[] = [];
    constructor () {
      this.users.push({ surname: 'Mörth', firstname: 'Markus', classname: '5AHME'});
      this.users.push({ surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
      this.users.push({ surname: 'Freyler', firstname: 'Paul', classname: '2AHME'});
    }

    public async getUsers (): Promise<IUser []> {
        // return this.users;
        return new Promise<IUser []>( (resolve, reject) => { // Callback Methoden um Fehler zu liefern und 
            setTimeout ( () => {
                // reject(new Error('users not available'));
                resolve(this.users);
            }, 2000);
        // throw new Error('users not available');
    });
}
}
```

* Service in app.user.table.components.ts einfügen
  * Dafür muss man den Service im Konstruktor aufrufen. Jetzt haben wir aber
    einen Fehler da der Rückgabewert wegen dem Promise nicht mehr stimmt.
     * Was kann man dagegen tun?
       * Man schreibt entweder Variante 1 im Programm aber noch besser ist es mit ngOnInit (variante 2).
       * Somit haben wir unseren Service fertig.
       * Um des Rest müssen wir uns nicht mehr kümmern, da es in der Komponente automatisch aufgerufen wird und im DOM erscheint für jeden User ein TR Tag.
```typescript
import { Component , OnInit} from '@angular/core';
import { IUser } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './app.usertable.component.html'
})
export class AppUserTableComponent implements OnInit {

  public users: IUser [];    // Interface
  private userService: UserService;
  public userErr: Error;

 /* constructor (userService: UserService) {        Variante 1
    this.userService = userService;
    this.userService.getUsers().then (users => {
      this.users = users;
    }).catch (err => {
      console.log(err);
    });
  }
  */

  constructor (userService: UserService) {
    this.userService = userService;
  }

  public async ngOnInit () {                       // Variante 2
    try {                                                     // Try Catch ist für das Erkennen von Fehlern
      this.users = await this.userService.getUsers();
    } catch (err) {
      console.log(err);
      this.userErr = err;
    }
  }

  public onUserClick(u: IUser) {
    console.log(u);
  }
}
```

* app.usertable.component.html ändern
 * Funktionen des Codes werden im unten stehenden Code als Kommentare beschrieben.
```html
<div *ngIf="users === undefined"> 

  <p *ngIf="userErr === undefined">
    <ngb-progressbar type="success" [value]="100" [striped]="true" [animated]="true"></ngb-progressbar> <!--Kein offizielles Tag/ Wir müssen das jetzt in app.modules einbinden--> <!--Progressbar einbinden-->
    Benutzerdaten werden geladen.
  </p>

  <p *ngIf="userErr !== undefined">
      Fehler beim Laden der Benutzerdaten: {{user.Err.message}}
    </p> 

</div>


<table *ngIf="users !== undefined" class="table">   <!--Abfrage ob es ein Array ist-->
    <thead>
          <tr>
            <th>#</th>
            <th>Nachname</th>
            <th>Vorname</th>
            <th>Klasse</th>
          </tr>
    </thead>
    <tbody>
          <tr *ngFor="let u of users; let i=index" (click) ="onUserClick(u)" style= "cursor: pointer;"> <!--Aussehen des Cursors ändern-->
            <td>{{i+1}}</td>
            <td>{{u.surname}}</td>
            <td>{{u.firstname}}</td>
            <td>{{u.classname}}</td>
          </tr>
            
    </tbody>
</table>
```
