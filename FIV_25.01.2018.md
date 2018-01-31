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
    * 
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

    public async getUsers (): Promise<IUser []> {           // Für Protokoll
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
