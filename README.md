# FIVU
## Klasse: 5AHME
## Schuljahr: 2017/18
## Lehrer: Prof. Steiner
## Verfasser: Fabio Pölzl
  

### Übersicht und Kurzbeschreibung der Lehreinheiten
  
  
### 1. Einheit  
**Datum:** 14.09.2017  
**Dazugehörige Übung(en):** -  
**Inhalt:**  
1. Besprechung zum Ablauf des Unterrichtgegenstandes FIVU für dieses Schuljahr 2017/18
2. Allgemeine Wiederholung über die Entwicklung der Programmiersprachen
  - Genauere Betrachtung der Programmiersprachen für die serverseitige Programmierung
3. Installation von Node.js und Visual Studio Code
  
  
### 2. Einheit  
**Datum:** 21.09.2017  
**Dazugehörige Übung(en):** ![ue01](projects/ue01)  
**Inhalt:**  
1. JavaScript
  - Erarbeitung der Grundlagen, wie z.B. Datentypen (boolean, string, number, object, undefined, null) und Variablendeklarationen (var, const, let)
2. Node.js
  - Unterschied zwischen lokaler und globaler Installation von Bibliotheken
  - Erstellung eines Projekts
  - Umgang mit Node Package Manager
  
  
### 3. Einheit
**Datum:** 28.09.2017  
**Dazugehörige Übung(en):** ![ue02](projects/ue02), ![ue03](projects/ue03)  
**Inhalt:**  
1. Wiederholung der letzten Einheit
  - Erstellung eines Projekts
2. TypeScript
  - Installation des TypeScript-Transpilers
  - Erstellung einer Klasse in TypeScript
  - Unterhaltung über die JavaScript Target Version
  - Download und Besprechung der ersten Dateien des Templates für ue03
  
  
### 4. Einheit  
**Datum:** 04.10.2017  
**Dazugehörige Übung(en):** ![ue03](projects/ue03)  
**Inhalt:**  
Download und Besprechung der letzten Dateien des Templates für ue03
1. tsconfig.json
  - Einstellungen für das Programm (z.B. JavaScript Target Version)
2. settings.json
  - Projekteinstellungen für Visual Studio Code (z.B. Ausblendung von bestimmten Projektdateien)
3. gulpfile.js
  - Regelung der Programmübersetzung
4. tasks.json
  - Eigene Tasks können definiert werden (z.B. clean, build, cleanAndBuild).
5. launch.json
  - Eigens parametrisierte Konfiguraionen können für den Debugger erstellt werden.
  
  
### 5. Einheit
**Datum:** 05.10.2017  
**Dazugehörige Übung(en):** ![ue03](projects/ue03), ![ue04](projects/ue04)  
**Inhalt:**  
1. set/get
  - Setter- und Getter-Methoden werden mithilfe der Keywords `set` und `get` erstellen.
  - Namenskollisionen müssen vermieden werden.
2. Array
  - Durch die Methode `push` kann ein Datenelement hinzugefügt werden.
3. Dateien lesen/schreiben
  - `import * as fs from 'fs';` wird zum Lesen und Schreiben von Dateien verwendet.
  - Mit `fs.writeFileSync(<Path>, <Data>);` kann in Dateien geschrieben werden.
  - Mit `fs.readFileSync(<Path>);` können Dateien eingelesen werden.  
    Die engelesenen Daten befinden sich in einem Buffer. Dieser kann mithilfe der Methode `toString()` in einen String ungewandelt werden.  
    Bei Einlesen von Daten ist zu beachten, dass keine Kompatibilitätsprüfung durchgeführt wird, wenn man diese Daten z.B. einer Datenhaltungsklasse zuweist.
4. JSON
  - Möchte man einen String im JSON-Format speichern, kann man dies mit `JSON.stringify()` tun. Die Gegenoperation dazu ist `JSON.parse()`.
5. Eigene Tastenkombinationen (Shortcuts) einfügen.
6. ue04 erstellen (= ue03 kopieren und .ts-Dateien löschen)
7. Interface
  - Durch ein Interface kann festgelegt werden, welche Datenelemente bei der Erstellung eines Objektes einer Klasse übergeben werden müssen und/oder können.
  
  
### 6. Einheit
**Datum:** 12.10.2017  
**Dazugehörige Übung(en):** ![ue04](projects/ue04)  
**Inhalt:**  
1. Interface
  - Um bei der Erstellung des Objektes nur bestimmte Strings zuzulassen, können anstatt des Datentyps `string` diese gewünschten Strings bei der Deklaration angegeben werden. Dadurch werden nur diese Strings akzeptiert.
2. Debuggen
  - Breakpoint
    - Mithilfe des Breakpoints stoppt das Programm an dieser Stelle. Alle Variablen und deren Inhalt können geprüft werden um Fehler zu finden.
  - `debugger;`
    - Dieser Inline-Befehl bewirkt das Gleiche wie der Breakpoint, jedoch funktioniert er zuverlässiger.
  
  
### 7. Einheit
**Datum:** 19.10.2017  
**Dazugehörige Übung(en):** ![ue05](projects/ue05)  
**Inhalt:**  
1. Begriffsklärung
  - **HTTP** (Hypertext Transfer Protocol): Programmiersprache
  - **HTML** (Hypertext Markup Language): Codierung (keine Programmiersprache)
  - **TCP/IP** (Transmission Control Protocol / Internet Protocol): Übertragungsprotokoll
  - **Ethernet und WLAN** (Wireless Local Area Network): Protokolle in Subnetzen
  - **TLS** (Transport Layer Security): Verschlüsselungsprotkoll
2. Web-Server
  - Apache
  - nginx
  - Java EE Glassfish
  - Wildfly
  - Node.js
    - express
    - ...
3. `HTTP GET`
  - Über das Kommando `HTTP GET <Ressource>` stellt der Client beim Server eine Anfrage, um eine bestimmte Ressource zu erhalten (z.B.: index.html).
4. Eigenen Web-Server programmieren
  - `npm install --save express @types/express`
    - Befehl für die Installation der Datenpacktet für den Node.js-Express-Server.
  - `import * as express from 'express';`
    Import-Kommando, um den Express-Server in unserer `main.ts` verwenden zu können.
  - Quellcode zur Erstellung des Servers (Port 4711):
    
  ```typescript
      const server = express();
      server.use(express.static('public'));  // Verzeichnis public für statische HTML-Seiten definieren
      server.listen(4711);  // http://localhost:4711/index.html
  ```

  - `http://localhost:4711/index.html`
    - Mit dieser URL (Uniform Ressource Locator) kann der Web-Server mithilfe eines Browsers angesprochen werden.
    - öffnet man die Debugger-Konsole im Browser (F12), kann die Kommunikation zwischen Client und Server genau analysiert werden. Dadruch können auch Fehler gesucht bzw. gefunden werden.
5. CSS (Cascading Style Sheets)
  - Durch die Verwendung von Style Sheets kann das Aussehen einer HTML-Seite auf einfache Art und Weise verändert werden. Über Klassen können Elemente zusammengefasst werden, die das selbe Aussehen haben soll. Soll nur ein Element anders aussehen, kann man dies über die ID des Elements realisieren.
  

### 8. Einheit
**Datum:** 09.11.2017  
**Dazugehörige Übung(en):** ![ue05](projects/ue05)  
**Inhalt:**  
1. Aufbau einer Webside
  - **HTML**: Struktur der Seite
  - **CSS**: Aussehen der Seite
  - **JavaScript**: dynamische Veränderungen der Seite am Client
2. Pug
  - Installation
    - `npm install --save pug`
    - `npm install --save-dev @types/pug`
  - Pug ist für das Rendern der Webside verantwortlich.
    - `server.set('view engine', 'pug');`
  - `test.pug` in dem neuen Unterordner `views` des Projektverzeichnisses

  ```pug
      doctype html
      html(lang="de")
          head
              title="I bims 1 pug"
              meta(charset="UTF-8")
              link(rel="stylesheet" href="myStyle.css")
          body
              h1 Seite mit pug
              p 1 Text
  ```

3. Änderungen an ue05
  - Über `http://localhost:4711/test` kann nun eine Seite erreicht werden, bei der ein Counter die Anzahl der Aufrufe mitzählt:
    
  ```typescript
      let counter = 1;

      server.get('/test', (req, res, next) => {
          let html = '';
          html += '<!DOCTYPE html>';
          html += '<html>';
          html += '<head>';
          html += '<title>I bims 1 Website</title>';
          html += '<link rel = "stylesheet" href = "myStyle.css"/>';
          html += '</head>';
          html += '<body>';
          html += '<h1>mySupiTestHomepage</h1>';
          html += '<h2>Anfrage Nummer ' + counter++ + '.</h2>';
          html += '<p id="zeile2">Test? Test?</p>';
          html += '<p class="gelberAbsatz">Are you receiving me?</p>';
          html += '</body>';
          html += '</html>';

          res.send(html);
      }
      );
  ```
  - Weiters kann über `http://localhost:4711/pug` die in Seite `test.pug` erreicht werden:

  ```typescript
      server.get('/pug', (req, res, next) => {
          res.render('test.pug');
      });
  ```
  

### 9. Einheit
**Datum:** 16.11.2017  
**Dazugehörige Übung(en):** ![ue05](projects/ue05), ![ue06](projects/ue06)  
**Inhalt:**  
1. Counter-Variable nach `test.pug` übergeben
  - Übergabe des Counters in `main.ts`

  ```typescript
      server.get('/pug', (req, res, next) => {
          res.render('test.pug', {counterValue: counter++});
      });
  ```

  - Verwendung des Counters in `test.pug`

  ```pug
      p Counter #{counterValue}
  ```
  
2. Pug
  - Es gibt zwei Methoden, um etwas auszukommentieren.
    - `// `: Der Kommentar ist auch am Client als Kommentar im Quelltext sichtbar.
    - `//- `: Der Kommentar ist am Client nicht sichtbar.
  - Die Anzeige des Quelltextes am Client kann verschönert werden (bessere Lesbarkeit).
  
  ```typescript
    const pugRenderingEngine = server.set('view engine', 'pug');
    pugRenderingEngine.locals.pretty = true;
  ```
  
3. Bootstrap
  - freies CSS-Framework
  - Von Twitter entwickelt.
  - Eine Bibliothek, die Grundelemente für die grafische Gestaltung einer Website enthält.
  - Ist resposiv (passt sich an die Größe des Bildschirmes an).
  - Für den Fall das sich zwei oder mehrere Elemente überlappen, hat jedes Element einen Z-Index. Der Z-Index entscheidet, welches Element über dem anderen angezeigt wird.
  
4. ue06
  - Erstellung
  -  Installation der Bootstrap-Bibliothek
    - `npm install --save bootstrap@4.0.0-beta.2`
  - index.html
    - `Link` und `Meta` im **head** hinzufügen.

    ```
      <head>
        <title>I bims 1 Website vong Bootstrap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
      </head>
    ```

    - Alle weiteren Elemente können nach eigenem Ermessen im **body** eingefügt und, wenn nötig, noch für die eigene Anwendung abgeändert werden.
  
  
### 10. Einheit
**Datum:** 23.11.2017  
**Dazugehörige Übung(en):** ![ue06](projects/ue06)  
**Inhalt:**  
1. Besprechung
  - Lehrausgang 24.11.2017
  - Festlegung des PLF-Termins in LA1 auf den 18.12.2017
  - Sure-Boards für AIIT
  
2. Fehlerbehebung
  - Es gab in der letzten Einheit einen Fehler der die drei Eingabefelder für E-Mail, Name und Passwort betrifft. Bei laden der Seite waren die Felder bereits befüllt. Der Fehler bestand darin, dass das Attribut `value` beschrieben wurde und nicht das Attribut `name`. Daher musste bei jedem der drei Eingabefelder `value` auf `name` geändert werden.
  Beispiel:

  - von
  ```html
    <input type="email" class="form-control" id="inputEmail" value="email" placeholder="E-Mail">
  ```
  - auf
  ```html
    <input type="email" class="form-control" id="inputEmail" name="email" placeholder="E-Mail">
  ```

  - Kontrolle durch die Öffnung der Debugger-Konsole im Browser mit `F12`.
  
3. Problem mit HTTP
  - Ein großes Problem mit HTTP ist, dass die Daten unverschlüsselt, also im Klartext, übertragen werden. Die Lösung dafür ist HTTPS. Hier wird automatisch eine Verschlüsselung vorgenommen.
    - Diese Problem betrifft jedoch nur die Übertragung selbst, da Passwörter im normal am Server nicht direkt gespeichert werden, sondern nur deren Hash. Bei einer Authentifizierung errechnet der Server nur den Hash des übermittelten Passworts und vergleicht es mit dem am Server abgelegten Hash.

4. Body-Parser
  - Installation
    - `npm install --save body-parser`
    - `npm install --save-dev @types/body-parser`
  - Einbindung
    - `import * as bodyParser from 'body-parser';`
  - Der Body-Parser hat den Zweck, eine Anfrage des Clients vorzuverarbeiten, um dem Programmierer die Arbeit der händischen Verarbeitung zu ersparen. Mit Hilfe des Body-Parser kann über `req.body` bereits auf die einzelnen Attribute zugegriffen werden.

5. Neue Schicht einfügen (Saveuser)
  - Diese neu eingefügte Schicht soll es erlauben, einen neuen User am Client anzulegen, der dann am Server gespeichert wird.
  - Ein großer Teil der Einheit wurde damit verbracht herrauszufinden, wie die Daten aus dem **Body** ausgelesen werden können. Schließlich wurde mit `urlendcoded` die Lösung gefunden.

  ```typescript
    server.use(bodyParser.urlencoded());
  ```

  - Die Speicherung des neuen Users wurde zu diesem Zeitpunkt noch nicht implementiert, doch für Testzwecke wird dem Client eine Nachricht übermittelt, ob er Name und Passwort "richtig" angegeben hat oder nicht. Der "richtige" Name und das "richtige" Passwort sind derzeit statisch im Quelltext eingetragen. Es dient, wie gesagt, nur für Testzwecke.

  ```typescript
    // 2. Schicht
    server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    if (req.body)
    {
        console.log(req.body);
    }

    if (req.body.name === 'I bims' && req.body.password === '')
    {
        res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
            httpOnly: true,
            maxAge: 60 * 60 * 24
        }));
        res.send('Is OK');
    }
    else
    {
        res.status(401).send('Is net OK');
    }
});
  ```

6. Cookies
  - Installation
    - `npm install --save cookie`
    - `npm install --save-dev @types/cookie`
  - Einbindung
    - `import * as cookie from 'cookie';`
  - Cookies sind ein Möglichkeit, um Daten clientseitig speichern zu können.
  - In der 2.Schicht wird bereits ein Cookie verwendet:

  ```typescript
    res.setHeader('Set-Cookie', cookie.serialize('name', req.body.name, {
        httpOnly: true,
        maxAge: 60 * 60 * 24
    }));
  ```

  - Setzt man das Attribut `httpOnly` auf `true` kann verhindert werden, dass Scripte das Cookie lesen können. Standardmäßig ist `httpOnly` `false`.
  - Über das Attribut `maxAge` kann festgelegt werden, wie lange das Cookie gültig ist. Im Fall von `maxAge: 60 * 60 * 24` ist es ein Tag.