# m13-5ahme-fivu

## Dokumentation der Einheiten

### Einheit 1: 14.09.2017
* Entwicklung der Programmiersprachen(Lockkarte, Assembler, Hochsprachen, Objektorientierte Programmierung, Multiplatformfähiges Programmieren Java).
* Grundlagen der Webprogrammierung (Client/Server)
* Installation Node.js und Visual Studio Code

### Einheit 2: 21.09.2017
* Grundlagen von Javascript
  * Wie werden Programme erstellt, gestartet?
  * Globale, lokale Installation
  * Besprechung der unterschiedlichen Datentypen

* Erstellen eines einfachen Programmes
  * Konsolen ausgaben erstellen, spielereien mit Datentypen
  
* Link zum Programm: [Programm](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue01/main.js)


### Einheit 3: 28.09.2017
* Wiederholung der letzten Einheit (Programm erstellen)
* Erstmaliges programmieren mit typescript
* Aus typescript Programm ein javascript Programm erstellen (mit tsc -t es6 maint.ts)
* Quellcode typescript: [typescript](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue02/main.ts)
* Quellcode javascript: [javascript](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue02/main.js)
* Template von LMS geklont und in ein neues Programm eingefügt

### Einheit 4: 04.10.2017

* template von LMS fertig in neues Programm eingefügt
* .vscode Ordner erstellt
  * setting.json einfügen (was wird sichtbar gemacht und was nicht)
  * tasks.json einfügen ()
  * launch.json einfügen (Debuggereinstellungen)
 
* in ue03 Ordner eingefügt:
  * tslint.json (für Syntax Überprüfung)
  * tsconfig.json (Configurationseinstellungen: zb: target, include)
  * gulpfile.js (für Übersetzung des Quellcodes)

* main.js.map wird verwendet, um aufgetretene Fehler auch in typescript anzuzeigen
* Programmierung
  * Car classe erstellt
  * Quellcode ue03: [typescript](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue03/src/main.ts)
  
### Einheit 5: 05.10.2017

* Es gibt in Typescript eigene setter und getter Methoden
  * Achtung! Es kann hierbei zu Namenskollosionen kommen, daher immer Variablennamen mit einem _ beginnen.
  * zB: private _model: string;
 
* Lesen und Schreiben von Dateien
  * Dazu muss man import **as fs from 'fs';** importieren.
  * In eine Datei schreiben: **fs.writeFileSync('C:\\Users\\User\\Documents\\Schule\\5AHME\\FIVU\\ue03\\autos.json', JSON.stringify(autos));**
  * Aus eine Datei lesen: **const buffer = fs.readFileSync('C:\\Users\\User\\Documents\\Schule\\5AHME\\FIVU\\ue03\\autos.json');**
  * Jedoch ist dies nicht die beste Art und Weise um Dateien zu lesen, denn es können Sachen in die Datei geschrieben werden, die nicht nicht hinein geschrieben werden dürfen. -> Dies geht, da dies kein Object Car ist!

* Tastenkombination hinzufügen
  * Datei -> Einstellungen -> Tastenkombinationen -> keybindings.json -> Quellcode von FIVU template kopieren und dort einfügen. 
  * strg + alt + b = build

* Neue Übung erstellen (ue04)
  * alte Übung kopieren (ue03) und in ue04 einfügen
  * main.ts löschen und dann eine neue Classe erstellen (Car.ts).
  * Quellcode: [ue04](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue04/src/car.ts)
  
### Einheit 6: 12.10.2017

* Kurze Wiederholung der letzten Einheit
  * Interface: Ein Interface sagt aus, aus welchen Teilen ein Objekt besteht
  * sinnvoll bei Mehrfachableitung 
* Interface
  * bestimmt aus welchen Teilen ein Objekt besteht bzw. bestehen muss
  * -> Attribute müssen genau mit dem übereinstimmen, was darin steht!
* debugger 
  * man kann einen breakpoint setzen, indem man links neben der Zeilennummer hineinklickt. Dann erscheint ein roter Punkt und es wird genau bis dort hin debugged. Jedoch kann es sein, dass diese Variante nicht immer funktioniert!
  * Das gleiche funktioniert auch wenn man debugger; hinschreibt (funktioniert immer)
* Programm: 
  * [cars.ts](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue04/src/car.ts)  
  * [main.ts](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue04/src/main.ts)
  
### Einheit 7: 19.10.2017
 * Server Grundlagen
   * Bearbeitet anfragen vom Client 
   * Web-Server kommuniziert mit Client
   * kommunizieren mit http (Sprache der beiden)
   * html ist eine Codierungsform
   * TCP/IP stellt sicher das die Daten sicher zwischen 2 Geräten ausgetauscht werden
   * TLS: Verschlüsselte Form der Datenübertragung bei https
   * innerhalb eines Subnetz wird Wlan / Ethernet verwendet, außerhalb werden die Daten via TCP/IP übertragen
   * http get kommando: Ressource wird angegeben, die zurück gesendet werden soll
   * Web-Server sendet dann die Daten an den Client zurück 
 * Um Web-Server zu erstellen kann man verwenden:
   * Apache
   * nginx
   * Java EE
   * Glassfish Server
   * Wildfly
   * unter Node.js -> express
 * Package installieren: 
   * npm install --save express @types/express
   * nun importieren: import * as express from 'express'
 * Programmierung
 * mit html wird ein Object gebildet (DOM)
   * mit DOM kann man von Typescript aus den Web-Server bearbeiten
 * CSS (Cascaded Style Sheet)
   * durch CSS kann das Aussehen einer Web-Seite leicht verändert werden
   * Elemente können über Klassen zusammengefasst werden
   * über ID können einzelne Elemente verändert werden
 * Programm
   * [main.ts](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue05/src/main.ts)
   
### Einheit 8: 09.11.2017
 * dynamische Webseite
 * Webseiten
   * **html** dient dazu, zum Erzeugen der Struktur der Seite
   * **CSS** dient dazu, um das Design der Seite festzulegen
   * **Javascript** dient dazu, um dynamische Veränderungen am Client zu machen
 * CSS  
   * Klasse in CSS beginnt mit .beispielGelb
   * Ein # ist die ID, kann nur einem Element übergeben werden
   * Überbegriff für beide **Selectoren**
 * => Erroroperator, die Funktion die wir schreiben wird mit dem aktuellen Object verbunden
 * Express ist in Schichten aufgebaut
   * nach der Reihenfolge der Definitionen im Quelltext
 * Modul pug
   * Modul hinzufpügen mit npm install --save pug
   * Auch für Typescript npm install --save-dev @types/pug
 * Seite mit pug erstellen
   * neuen Ordner erstellen views
   * neue Datei erstellen test.pug
 * Programm
 
### Einheit 9: 16.11.2017

 * Dynamischer Server
   * Seiteninhalt wird durch Server Programm verändert
   
 * Test.pug 
   * zum Rendern von HTML Seiten
   * auch zum Fehlerverhindern

 * Einbinden von Counter bei test.pug
```Javascript
   doctype html
html(lang="de")
    head
        title = "Testseite mit pug rendering"
        meta(charset="UTF-8")
        link(rel="stylesheet" href ="myStyle.css")
    body
        h1 Seite mit pug generiert
        p Das ist der erste Absantz
        p Counter #{counterValue}
```
  * Auch im main.ts res.render ändern: 
 ```Javascript
  server.get('/pug', (req, res, next) => {
    res.render('test.pug', {counterValue: counter++});
});
```
* Bootstrap 
  * Responsive Breakpoints: Damit die Größe auf den Endgeräten angepasst wird.
  * Z-index: Die Elemente können eine gewisse Höhe zugeordnet werden.
  * DOM (Domain Object Model): Das was im Browser als Object gesehen wird. 

* ue06 erstellt
Bei Bootstap gibt es zwei Arten von Kommentaren: 
  * // So wird es im Quelletext bei html als Kommentar angezeigt
  * //- So wird es im Quelltext bei html nicht mehr angezeigt
  
* Programm: [main.ts](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue05/src/main.ts)

### Einheit 10: 23.11.2017
* Daten werden zurzeit in Klartext übertragen
* nächster Schritt: Daten die übertragen werden, sollen verarbeitet werden
* server.body: speichert die Daten im body, somit kann keiner sie sehen
* body-parser installieren: npm install --save-dev @types/body-parser
  * dient dazu um eine Anfrage des Clients vorzuverarbeiten, um dem Programmierer die Arbeit der händischen Verarbeitung zu ersparen. Mit Hilfe des Body-Parser kann über req.body bereits auf die einzelnen Attribute zugegriffen werden.
* Cookies: Cookies sind eine Möglichkeit um Daten clientseitig speichern zu können
* in typescript installieren: npm install --save-dev @types/cookie
* Programm: [main.ts](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue06/src/main.ts)

### Einheit 11: 30.11.2017

* Cookie: * Speicherung von Daten im Client
          * haben oftmals ein Verfalldatum
          * gebunden an die URL
          * wenn die URL aufgerufen wird, so wird automatisch die Cookie Information mitgesendet
          * wird auch für Autenthifizierung verwendet

* httpOnly: damit Javascript kein Zugriff aufs eigene Cookie hat (keine manipulation durch Schadsoftware)
* cookieParser installieren: npm install --save cookie-parser
  * dann importieren
  * hier einfügen: cookie ausgabe und eine abfrage
  ```Javascript
  server.get('/', (req, res, next) => {
    // res.render('index.pug');
    console.log(req.cookies);
    if(req.cookies && req.cookies.name === 'maxi')
    {
        console.log('Anfrage von maxi');
    }
    next();
  });
  ```
  
* Web-Token: * Daten, die man mitgeben kann und diese werden vom Server überprüft, ob die Daten von einer gewissen Person stammen
             * Ansich findet keine Verschlüsselung statt
             * es findet ein Signaturvorgang statt
             * Token wird nicht von selbst automatisch gesendet
             * Token kann auch nur für eine gewisse Zeit gültig sein
             
* erstellen der ue07:
* modul einfügen: jsonwebtoken
* Schlüsselpaar erzeugen mit: * openssl rsa -in keys/server-private.pem -pubout -out keys/server-public.pem
                              * openssl genrsa -out keys/server-private.pem
* Buffer entspricht einen Byte [] in Java

### Einheit 12: 07.12.2017

Wiederholung Cookie: 
 * Speichern die Daten Clientseitig
 * Client kann an der URL erkennen ob er ein Cookie mitsendet oder nicht
 * Durch SetCookie kann ein Cookie gesendet werden (Im Header bei response)
 * Beispielhafte Informationen im Cookie: Informationen die den Benutzer identifizieren
 * Können ein Verfallsdatum haben (Clientseitiges löschen)
 * Nachteile: 
   * automatisches Mitsenden 
   * man kann zuweisen wo jemand zu einem bestimmten Zeitpunkt war, da immer das gleiche Cookie gesendet wird und nur die IP-Adresse          sich ändert
 * Client sendet Anfrage an Server, Server sendet Login an Client -> Client logt sich ein -> Server sendet SetCookie zurück -> Client kommuniziert dann mit Server mit dem Cookie (über die ID) -> so lange gültig bis sich der Client abmeldet. Nachteil ist, da der Server immer wieder in der Datenbank nachschauen muss ob die ID gültig ist.
 
 Web-Token:
 * Client schickt eine Anfrage, der Server erzeugt ein Token und signiert die Anfrage (mit privaten Schlüssel)
 * Token wird zurück zum Client gesendet
 * Wenn der Token vom Client mitgesendet wird bei einer Frage, entsteht eine Verifizierung (mit öffentlichem Schlüssel) und dient für automatische Erkennung des Clients
 * Vorteil des Systems: 
    * muss im gegensatz zum Cookie-Verfahren nicht in einer Datenbank nachschaun (vergeben für eine gewisse Zeit einen Token)
    * keine Benutzerdatenbank
 
 Programm: WebToken erzeugen und mitsenden
  * Webtoken erzeugen: 
    * man kann den namen angeben, den privaten Schlüssel und auch Optionen wie Ablaufzeit und Verschlüsselungsalgorithmus
    ```Javascript
    private getLogin(req: express.Request, res: express.Response, next: express.NextFunction)
    {
        if (req.body) {
            console.log(req.body);
        }
        if (req.body.name === 'maxi' && req.body.password === 'geheim') {
            const token = jwt.sign({name: 'maxi'}, this._privateKey,
                        {expiresIn: '10min', algorithm: 'RS256'}); // Webtoken erzeugen, name, key, ablaufzeit, algorithmus

            console.log(token);
            res.send('OK (' + req.body.email + ')');
        } else {
            res.status(401).send('ERROR');
        }
    } ```
    
   * beim erstmaligem Probiern -> Fehler undefined value
   * Wir können nicht auf den private Key zugreifen -> Lösung: alles in die Main kopieren! 
   * nun den Token an den Client zurücksenden:
   ```Javascript
    res.json({token: token});
   ```
   
 ### Einheit 13: 14.12.2017
 
 Wiederholung WebToken: 
   *  Signierung mit privatem Schlüssel
   * Verifizierung mit öffentlichem Schlüssel

Weiterprogrammierung des Programms: 

```Javascript
const value = <string> req.headers.authorization;
        if(value.startsWith('Bearer: '))
        {
            const token = value.substr(8);
            console.log(token);
            const data = jwt.verify(token, this._publicKey, (err, decoded: any) => {
                try
                {
                    if(err)
                    {
                        throw err;
                    }
                    if(decoded.name && decoded.name === 'maxi')
                    {
                        console.log(decoded);
                        const issueAt = new Date(decoded.iat * 1000);
                        console.log(issueAt.toLocaleString);
                        res.send('Ok');
                    } else
                    {
                        throw new Error('invalid token object');
                    }
                } catch(err)
                {
                    console.log(err);
                    res.status(401).send('Error');
                }
            });
            console.log(data);
        }
```
Client seitige Programmierung: 
   * selbst Javascript Programm schreiben
   * Javascript Library zB: jquery
   * Javascript frame work (angular)
   
Angular Commond Line Interface:
   * mit ng new <name> erstellen
   * Angular installieren: npm install -g @angular/cli
   * Angular Projekt erstellen: ng new ue08
   * mit ng server starten

### Einheit 14: 11.01.2018
Wiederholung der letzten Einheiten:
   * Javascript (in Client Seitige Anwendung)
     * Probleme mit der Fehlerbehandlung, da es keine Datentypen gibt
   * Typescript (ähnlich zu Java)
     * Node.js um Programme in Typescript umzuwandeln
     * Web-Server (Node.js https + express Server)
     * Bei TCP/IP Protokoll, dort müssen drei Packete ausgetauscht werden (syn, syn ack, syn)
     * Web-Server muss das HTTP-Protokoll erfüllen
     * HTTP Request besteht aus Head (Daten für Adresse, Sprache, Codierung, Token, Cookie) und Body Bereich
     
Node Package Manager:
  * npm 
  * Zum Installieren von Zusatzpackete
  
Cookie: 
   * Daten Clientseitig speichern
   * Werden im Header mitgesendet
   * Werden zb: bei Anmeldungen verwendet
   
Web-Token:
   * Informationen werden Signiert

Ablauf bei Cookie oder Web-Token:
   * Client stellt Anfrage an Server, Anmeldeseite wird zurück geliefert, dann wird POST Request im Body (ID, Passwort) erzeugt. Server überprüft die Anmeldedaten, dann sendet der Server eine Session ID (Cookie oder Web-Token) zurück. 

Angular: 
   * Client seitiges Frame Work
   * Andere Entwicklungen: PHP, ASP
   * mit ng new wird eine neue Applikation angelegt
   * mit ng serve wird der Server gestartet (jedoch nur Lokal verfügbar)
   * Anwendung besteht aus Componenten
   * In der Componente sind Zusatzinformationen die aufgerufen werden können
   
### Einheit 15: 18.01.2018
  * erstellen von ue09
    * ng new ue09
  * Realisierung der Uhr aus ue08 als eigene Componente
  * Datei app-clock.component.ts erstellen
  * Inhalt der Klasse AppClockComponent aus ue08 kopieren
  * Selector und Template anpassen
  * Uhr mithilfe des Selectors in app.component.html in die Website einfügen
  ``` Javascript
  <app-clock (click)="onClick($event)" style = "cursor: pointer"></app-clock>
  ```
### Einheit 16: 25.01.2018
 
 Angular bestehn aus Kompenenten.  
 Ein Service ist ein Stück Code, sozusagen eine globale Klasse. -> kann man wieder in Komponenten zusammenpacken. Bei Services schreibt   man statt @Component, @Injectable().  
 * Weiterprogrammieren des Programmes
   * in user.service ein Promise einbauen 
   ``` Javascript
   public async getUsers(): Promise<IUser []> {
        return this.users;
    }
    ```
    * dadurch müssen wir in app-user-component auch etwas ändern.  OnInit einfügen und eine neue Methode erstellen
    ```Javascript
     public async ngOnInit() {
    try {
      this.users = await this.userService.getUsers();
    } catch(err)
    {
      console.log(err);
    }
  }
  ```
 * Nun soll eine Ausgabe am Bildschirm erstellt werden, wenn das Feld von den Users leer ist. 
   * Abfrage in der app-user-table.component.html
   ```Javascript
   <p *ngIf="users === undefined">
  Keine Benutzerdaten verfügbar.
</p>
<table *ngIf="users !== undefined" class="table table-hover table-sm">
   ```
 * Nächster Schritt: Wenn Fehler auftritt beim Laden der users, soll eine andere Fehlermeldung ausgegeben werden, als wenn die users noch geladen werden. 
   * Dazu neue Variable userErr anlegen und userErr den err zuweisen
   ```Javascript
   <p *ngIf="users === undefined && userErr === undefined">
  Benutzerdaten werden geladen.
</p>
<p *ngIf="userErr !== undefined">
  Fehler beim Laden der Benutzerdaten: {{userErr.message}}
</p>
<table *ngIf="users !== undefined" class="table table-hover table-sm">
  ```
   
 
