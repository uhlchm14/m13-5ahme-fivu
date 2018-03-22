# FIVU
## Klasse: 5AHME
## Schuljahr: 2017/18
## Lehrer: Prof. Steiner
## Verfasser: Florian Harrer


### Kurze Protokolle zu den Einheiten

### 1. Einheit  
**Datum:** 14.09.2017  
**Dazugehörige Übung(en):** -  
**Inhalt:**  
1. Besprechung darüber welcher Stoff in diesem Jahr gemacht wird und wie die Note zustande kommt (wie die Tests geregelt sind)
2. Wiederholung der Geschichte der Programmiersprachen und genaueres betrachten der Möglichkeiten zur serverseitigen Programmierung
3. Installation von Node.js und Visual Studio Code

### 2. Einheit  
**Datum:** 21.09.2017  
**Dazugehörige Übung(en):** [ue01](projects/ue01)  
**Inhalt:**  
1. Einstieg in die Programmiersprache Javascript
2. Anlegen eines neuen Projektes mit Node.js
3. Bekannt machen mit dem Node Package Manager 
4. Lernen welche Datentypen es in Javascript gibt und wie man diese deklariert

### 3. Einheit
**Datum:** 28.09.2017  
**Nicht anwesend - Stellung**

### 4. Einheit
**Datum:** 04.10.2017  
**Dazugehörige Übung(en):** [ue03](projects/ue03)  
**Inhalt:**  
Besprechen der letzten Dateien des Templates für ue03
1. Einstellungen in tsconfig.json fpr das Programm treffen
2. In der settings.json werden Projekteinstellungen für Visual Studio Code getroffen (Ausblenden von Datein im Projekt)
3. Im gulpfile.js werden Einstellungen zur Programmübersetzung getroffen
4. In der tasks.json können Tasks seblst definiert werden (celan, build, cleanAndBuild, ...) 
5. In der launch.json können Konfigurationen für den Debugger gewählt/erstellt werden

### 5. Einheit
**Datum:** 05.10.2017  
**Dazugehörige Übung(en):** [ue03](projects/ue03), [ue04](projects/ue04)  
**Inhalt:**  
1. In dieser Einheit wurden neue Methoden für Javascript gelernt
- import * as fs from 'fs'; fs ... Filesystem, zum Lesen und schreiben von Dateien
 In Datei schreiben: fs.writeFileSync(, ); 
 Aus Datei lesen: fs.readFileSync();
- Nach dem Einlesen befinden sich die Daten in einem Buffer. Um sie verwenden zu können muss man diese mit toString() in einem String umwandeln. Nach dem Einlesen ist auch eine Kompatilitätsprüfung der Daten durchzuführen.
2. String als .json speichern
- Speichern: JSON.stringify();
- Einlesen: JSON.parse();
3. ue04 erstellen
- Dafür wurde ue03 kopiert und es wurden die .ts Dateien gelöscht
- Interface: legt fest welche Daten übergeben werden müsssen/können

### 6. Einheit
**Datum:** 12.10.2017  
**Dazugehörige Übung(en):** [ue04](projects/ue04)  
**Inhalt:**  

1. Interface
- Um ein Objekt zu erstellen bei dem nur bestimmt Strings zugelassen sind, muss man statt dem Datentyp `String` die Strings, die zugelassen sein sollen, angeben. Dadurch werden dann nur diese Strings akzeptiert.

2. Debuggen
- Breakpoint: Mit einem Breakpoint kann man das Programm an einer beliebigen Stelle stoppen. So können alle Variablen und deren Inhalte zu dieser Programmstelle überprüft werden. Das ist sehr hilfreich bei der Fehlersuche.
- `debugger;`: Dieser Befehl macht das gleiche wie ein Breakpoint. Jedoch funktioniert er nicht so zuverlässig und soll deswegen nicht verwendet werden.

### 7. Einheit
**Datum:** 19.10.2017  
**Dazugehörige Übung(en):** [ue05](projects/ue05)  
**Inhalt:**  

1. Begriffe
- HTTP (Hypertext Transfer Protocol): Programmiersprache
- TCP/IP (Transmission Control Protocol / Internet Protocol): Übertragungsprotokoll
- HTML (Hypertext Markup Language): Codierung
- TLS (Transport Layer Security): Verschlüsselungsprotokoll

2. Web-Server
- Appache
- Java EE Glassfish
- Wildfly
- Node.js express

3. Web-Server programmieren
- Zuerst muss mit  dem Befehln `npm install --save express @types/express` das Datenpaket für den Node.js-Express-Server installiert werden.
- Weiters muss der Express-Server mit dem Befehl `import * as express from 'express';` in das Programm importiert werden.
- Mit folgendem Quellcode kann ein Server unter einem bestimmten Port erstellt werden:
```typescript
    const server = express();
    server.use(express.static('public'));  
    server.listen(4711);  
```
- Dieser Web-Server kann dann im Browser mit dieser URL `http://localhost:4711/index.html` aufgerufen werden.
- Mit der Debugger-Konsole des Browsers, welche mit F12 geöffnet wird, kann der genaue Datenaustausch zwischen Server und Client nachverfolgt werden. 
- 'HTTP GET <Ressource>': Anfrage des Clients an den Server um eine bestimmte Ressource zu bekommen

4. CSS (Cascading Style Sheets)
- Wird dazu verwendet um das Aussehen einer Website zu verändern. Hierbei können Eltemente die gleich auschauen sollen über eine Klasse zusammengefasst werden. Wenn einzelne Elemente anders ausschauen sollen können diese über die ID angesprochen werden.

### 8. Einheit
**Datum:** 09.11.2017  
**Dazugehörige Übung(en):** [ue05](projects/ue05)  
**Inhalt:**  

1. Aufbau einer Website
- HTML: Struktur 
- CSS: Aussehen
- JavaScript: dynamische Veränderungen

2. Pug
- Pug wird zum Render von einer Website verwendet. Dafür muss folgender Befehl `server.set('view engine', 'pug');` im Programm aufgerufen werden.
- `test.pug` in neuem Unterorder `views` anlegen
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
  3. Programmieren einer Testseite
  - Dies Teste Seite ist unter dem URL `http://localhost:4711/test` erreichbar.
  - Ein Counter im Programm zählt die Anzahl der Aufrufe mit welche dann auf der Seite angezeigt werden.
  ```typescript
  let counter = 1;

server.get('/test', (req, res, next) => {
    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>';
    html += '<title>Meine TESThomepage</title>';
    html += '<link rel = "stylesheet" href = mystyle.css /> ';
    html += '</head>';
    html += '<body>';
    html += '<h1>Meine TESThomepage</h1>';
    html += '<h1>' + counter++ + '. Aufruf</h1>';
    html += '<p>Das ist eine Testtestseite!</p>';
    html += '<p>Das bimst der zweite Absatz vong der Webseite!</p>';
    html += '<p id = "absatz3">Das bimst der dritte Absatz vong der Webseite!</p>';
    html += '<p class = "lesbareAbsätze">Das bimst der vierte Absatz vong der Webseite!</p>';
    html += '</body>';
    html += '</html>';
    
    res.send(html);
});
  ```

### 9. Einheit
**Datum:** 16.11.2017  
**Dazugehörige Übung(en):** [ue05](projects/ue05), [ue06](projects/ue06)  
**Inhalt**:   
#### Dynamische Website  
  Bei einer dynamischen Website kann der Inhalt und das Aussehen vom Server verändert werden.  
  Beispiel: Verändern einer angezeigten Varibale  
  In der Test.pug
```typescript
      p Counter #{counterValue}
```
  In der main.ts
```typescript
     server.get('/pug', (req, res, next) => {
       res.render('test.pug', {counterValue: counter++});
     });
```
  Das Objekt der Varialbe wird als Parameter mitübergeben. 

#### Bootstrap  
In dieser Einheit haben wir mit der Einarbeitung in die [Bootstrap Version 4](http://getbootstrap.com/docs/4.0/getting-started/download/). Bootstrap ist responsive. Das heißt das sich das Design automatisch an verschieden Große Geräte (PC, Smartphone, ...) anpasst.  
Wenn sich zwei Elmente überlappen kann mit dem Z-Index (Z-Achse) festgelegt werden welches Element sichtbar sein soll. 
Von der HTML Seite wird der DOM (Domain Object Model) generiert. Dieser ist auch veränderbar.

Besprochene Komponenten:  
  -[Badge](http://getbootstrap.com/docs/4.0/components/badge/): Darstellung von Informationen  
  -[Breadcrumb](http://getbootstrap.com/docs/4.0/components/breadcrumb/): Zum Hinterlegen eines Links  
  -[Card](http://getbootstrap.com/docs/4.0/components/card/): Zum erstellen eines Bereichs, zum Beispiel Visitenkarten  
  -[Carousel](http://getbootstrap.com/docs/4.0/components/carousel/): Bilder zum Weiterschalten  
  -[Collapse](http://getbootstrap.com/docs/4.0/components/collapse/): Unterpunkte unter denen sich Text öffnet  
  -[Dropdowns](http://getbootstrap.com/docs/4.0/components/dropdowns/): Menü welches sich nach unten öffnet  
  -[Forms](http://getbootstrap.com/docs/4.0/components/forms/): fertige Eingabedialoge   
  -[List Group](http://getbootstrap.com/docs/4.0/components/list-group/): Designs für Listen  
  -[Modal](http://getbootstrap.com/docs/4.0/components/modal/): Dialogfenster   
  -[Navs](http://getbootstrap.com/docs/4.0/components/navs/): Navigationsleiste   
  -[Pageination](http://getbootstrap.com/docs/4.0/components/pagination/): mehrere Seiten, weiterschaltbar  
  -[Popovers](http://getbootstrap.com/docs/4.0/components/popovers/): Zeigt etwas an wenn man mit der Maus darüber fährt  
  -[Progress Bars](http://getbootstrap.com/docs/4.0/components/progress/): Ladeanzeige  
  -[Scrollspy](http://getbootstrap.com/docs/4.0/components/scrollspy/): Wechselt beim Scrollen zwischen den Linkelementen   
  -[Tooltips](http://getbootstrap.com/docs/4.0/components/tooltips/): Zeigt eine Information zu einem Element an  

Anlegen des Projekts [ue06](projects/ue06).
Anschließend muss im Projekt Bootstrap mit folgendem Befehl installiert werden: npm install --save bootstrap@4.0.0-beta.2 .

Auskommentieren in pug:  
// ... Element wird mitgerendert  
//- ... Element wird nicht mitgerendert  

Strukturierung des Seitenquelltextes:
```Typescript
const pugRenderringEngine = server.set('view engine', 'pug');
pugRenderringEngine.locals.pretty = true
```

Link zum Festlegen des Seitendesigns verwenden: 
```Typescript
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
```

In ein Div-Element können Komponenten eingefügt werden. Ein Container wird benötigt um der Seite einer Struktur zugeben. Es können einer Seite mehrere Strukturierungen zugewiesen werden.
```Typescript
<div class="container">
</div>
```
### 10. Einheit
**Datum:** 23.11.2017  
**Dazugehörige Übung(en):** [ue06](projects/ue06)  
**Inhalt**:   

1. Fehlerbehebung
- In der voherigen Einheit hatten wir das Problem, dass die Eingabefelder beim Laden der Website bereits beschrieben waren. Der Fehler war das wir das Attribut `value` verwendet haben. Den Fehler haben wir behoben indem wir `value` durch `name` ersetzt haben.
- Anschließend haben wir dies mit dem Debugger im Browser überprüft.

2. Sicherheitslücke bei HTTP
- Bei HTTP werden Daten unverschlüsselt übertragen. Dieses Problem kann einfach gelöst werden indem das Protokoll HTTPs verwendet wird.

3. Body-Parser
- Der Body-Parser verarbeitet die Anfrage des Clients. Dabei wird Programmierer viel Arbeit erspart. Durch denn Body-Parser kann einfach über `req.body` auf die einzelnen Atrribute zugegriffen werden.

4. Zusätzliche Schicht einfügen
- Diese Schicht schafft die Möglichkeit einen neuen User anzulegen und zu speichern.
- Daten können mit `server.use(bodyParser.urlencoded());` aus dem Body ausgelesen werden.
- Die Speicherung des Users wurde zu Beginn noch nicht implementiert. Zu Testzwecken wurden dem Client eine Nachricht übermittelt ob der Name und das Passwort richtig eingegeben wurden. Name und Passwort sind im Quelltext festgelegt.
```typescript
  // 2. Schicht
  server.post('/saveuser', (req, res, next) => {
  if (req.body)
  {
      console.log(req.body);
  }

  if (req.body.name === 'maxi' && req.body.password === 'geheim')
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

5. Cookies
- Cookies bieten die Möglichkeit Daten Clientseitig zu speichern.
- Im oberen Quelltext kann man die Verwendung eines Cookies sehen.
- Ein Cookie sollte immer eine begrenzte "Lebensdauer" haben und nach einiger Zeit gelöscht werden. Das kann mit `maxAge: 60 * 60 * 24` festgelegt werden. In diesem Fall wird das Cookie nach einem Tag gelöscht.


### 11. Einheit
**Datum:** 30.11.2017  
**Dazugehörige Übung(en):** [ue06](projects/ue06), [ue07](projects/ue07)  
**Inhalt**:   

1. Cookie-Parser
- Der Cookie-Parser wird zum Lesen von Cookies verwendet, welche vom Client bei einer Anfrage mitgesendet werden.
  ```typescript
    server.use(cookieParser());

    // 1. Schicht
    server.get('/', (req, res, next) => {
      console.log(req.cookies);
      if (req.cookies && req.cookies.name === 'maxi')
      {
        console.log('Authentifizierung erfolgreich');
      }
      next();
    });
  ```
  
2. JSON Web-Token
- Das Token ist ähnlich wie das Cookie. Mit dem wichtigen Unterschied, dass das Token signiert wird (öffentlicher und privater Schlüssel)
- Das Token wird zuerst vom Server an den Client gesendet. Der Client schickt es bei der nächsten Anfrage an zurück zum Server. Der Server überprüft es anschließend.
- Das Token hat gleich wie das Cookie eine limitierte Gültigkeit
- Ein weiterer Unterschied ist, dass das Token nicht immer mitgesendet wird, weil es nicht an die URL gebunden ist

3. Beginn con ue07
- Die ![ue06](projects/ue06) dient als Grundlage für die ![ue07](projects/ue07). Dei Dateien `index.html`, `myStyle.css` und `main.ts` wurden abgeändert.

4. Schlüsselpaar erzeugen
- Unterverzeichnis `keys` in der ue07 anlegen
- Anschließend in diesem Verzeichnis die Git Bash Konsole öffnen und mit `openssl genrsa -out keys/server-private.pem` den privaten und mit `openssl rsa -in keys/server-private.pem -pubout -out keys/server-public.pem` den öffentlichen Schlüssel erzeugen. 
- Einlesen der Schlüssel in der `main.ts`
  ```typescript
    class Main
    {
      private _privateKey: Buffer;
      private _publicKey: Buffer;
    
      constructor ()
      {
        this._publicKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-public.pem'));
        this._privateKey = fs.readFileSync(path.join(__dirname, '..', 'keys/server-private.pem'));

        console.log('Schlüssel erfolgreich eingelesen');
      }
    }
  ```

### 12. Einheit
**Datum:** 07.12.2017  
**Dazugehörige Übung(en):** [ue07](projects/ue07)  
**Inhalt**:   

1. Abänderung von `main.ts` 
- Die Behandlung der Schichten wurde in der Konstruktor verlegt
- Für das Starten des Servers, das Senden einer Response mit Token und das Lesen einr Request mit Token wurde neue Funktionen in der Klasse `Main` erstellt.

2. Erzeugen und Senden
  ```typescript
    if (req.body.name === 'I bims' && req.body.password === '')
    {
      const token = jwt.sign({name: 'I bims'}, this._privateKey, {expiresIn: '5min', algorithm: 'RS256'});
      console.log(token);
      res.json({token: token});
    }
  ```
  
  3. Lesen 
  ```typescript
    const value = <string>req.headers.authorization;

    if (value.startsWith('Bearer: '))
    {
      const token = value.substr(8);
      console.log(token);
      jwt.verify(token, this._privateKey, (err, decoded) => {
          console.log(decoded);
      });
    }
  ```
  4. ARC
  - Um das Programm zu testen haben wir im Chrome den `Advanced REST Client` installiert. Damit kann man im Browser einen POST senden. 

### 13. Einheit
**Datum:** 11.01.2018  
**Dazugehörige Übung(en):** [ue08](projects/ue08)  
**Inhalt**:   

1. Wiederholung
- JavaScript -> Typescript
  - Typisierung
- Serverseitige Programmierung
  - npm (node package manager)
  - Node.js: JavaScript Engine
  - Web-Server (Node.js express)
    - Verbindung zum Client zur Vergügung stellen
    - Request, Response
      - Header, Body
  - HTTP Protokoll
  - Cookies, JSON Web-Token

2. Angular
- clientseitig
- Javascript Framework um größere Systeme leicht zu realisieren
- Alternativen: PHP, ASP
- Angular Projekt erzeugen mit Angular CLI (common line interface)
  - ng new \<name> ... starten
  - ng serve ... starten

3. Fortsetzen von ue08
  - Es wurde ein Timer erstellt und dann ausgegeben

### 14. Einheit
**Datum:** 18.01.2018  
**Dazugehörige Übung(en):** [ue08](projects/ue08), [ue09](projects/ue09)   
**Inhalt**:   

1. Angular
  - Anguar besteht aus Komponenten (=Quellcode)
    - app.component.css: Design
    - app.component.html: Aufbau
    - app.component.ts: Programm
    - app.modules.ts: Startablauf
  - Komponente erstellen mit: ng generate component \<name> (oder händisch mit Rechtsklick und neue Datei)
  - window steht für den DOM (Domain Object Model)
  ```typescript
    this._timer = window.setInterval ( () => this.updateTime(), 100);
  ``` 
  - Komponent auf der Website klickbar machen und Mauszeiger verändern
   ```html
    <app-clock (click)="onClick()" style="cursor:pointer"></app-clock>
  ``` 
  - Uhr ein-/ausblenden
    ```html
    <app-clock *ngIf="isClock2Visible"></app-clock>
    ```
  - Tabelle erstellen und füllen

  - Service verwenden um zwischen den Komponenten Daten auszutauschen
    - ng generate service

  ![Service](https://angular.io/generated/images/guide/architecture/overview2.png)

### 15. Einheit
**Datum:** 25.01.2018  
**Dazugehörige Übung(en):** [ue09](projects/ue09)  
**Inhalt**:   

1. Angular
 - Programm darauf vorbereiten Daten vom Server zu bekommen
 - Progressbar einfügen
 - Errors abfangen
 

2. HTTPS
  - TLS (Transport Layer Secure) = SSL (Secure Socket Layer)
  - symentrische Verfahren: AES
    - nur ein Schlüssel zum Ver- und Entschlüsseln
    - Vorteil: sehr effizient
    - Nachteil: Schlüsselaustauschproblem -> Schlüssel über Netzwerk austauschen ist riskant
  - asymetrisches Verfahren: RSA
    - Schlüsselpaar: öffentlich und privat
    - Nachteil: bei großen Datenmengen extrem langsam
  - bei TLS werden beide systeme kombiniert (hybrides Verfahren/System)
    - asymetrisches System wird zum Austausch des Schlüssels des symetrischen Verfahrens verwendet
  - X.509 Zertifikat
    - öffentlicher Schlüssel des Inhabers (subject)
    - signiert von einem vertrauenswürdigen Austeller (Authorisierungsstelle = issuer)

### 16. Einheit
**Datum:** 26.01.2018  
**Dazugehörige Übung(en):**  
**Inhalt**:  

1. Fortsetzung von HTTPS
  - Ablauf TLS
    - sym Schlüssel erzeugen
    - sym Schlüssel asynchron verschlüsseln mit öffentlichem Schlüssel
    - verschlüsselten sym Schlüssel versenden
    - verschl. sym Schlüssel mit privatem Schlüssel entschlüsseln
    - Daten mit symetischem Schlüssel (Verfahren) austauschen
  - X509 Zertifikat
    - öffentlicher Schlüssel muss singniert werden -> damit festellbar ist, dass es sich wirklich um den öffentlichen Schlüssel dieser Person handelt
    - Es könnte ein falscher öffentlicher Schlüssel sein und so könnte sich eine dritte Person in den Datenaustausch rein "hacken" (= man in the middel attach)
    - zum Schutz vor gefakten Zertifikaten immer die Zertifikate (Authorisierungsstellen) aktualisieren. 
  - Zertifikat erstellen: `OpenSSL` 
  - Zertifikatskette: A wird von B signiert, B wird von C singiert, C wird von D signiert, D singiert sich selbst (seblstsigniertes Zertifikat)
    - selbstsignierte Zertifikate von Zertifizierungsstellen sind im System als vertrauenwürdig eingetragen 

2. Schlüsselpaar erzeugen
  - "Zertifikatsstelle" 
    - privater Schlüssel: `openssl genrsa -out ca.pem`
    - öffentlicher Schlüssel: `openssl rsa -in ca.pem -out ca_pub.pem` 
  - CSR (Cirtificate Sign Request) 
    - `openssl req -new - subj '/CN=CA harflm13' -key ca.pem -out ca.csr`
  - Datei kopieren
    - `cp /etc/ssl/openssl.cnf ./`
    - und ändern: `nano openssl.cnf`
      - von `policy_match` auf `policy_anything`
      
3. Datenbank erstellen
  - `mkdir -p demoCA/newcerts`
  - `touch demoCA/index.txt`

4. Zertifikat erstellen
  - `openssl ca -config openssl.cnf -create_serial -batch -extensions v3_ca -out ca.crt -keyfile ca.pem -selfsign -infiles ca.csr`

### 17. Einheit
**Datum:** 01.02.2018  
**Dazugehörige Übung(en):**  [ue010](projects/ue10-https-server)  
**Inhalt**:  

1. Implementieren eines HTTPS-Servers

### 18. Einheit
**Datum:** 08.02.2018  
**Dazugehörige Übung(en):**  [ue11](projects/ue11_angularServer) 
**Inhalt**:  

1. HTTPS
  - TLS_ECDHE_RSA_ASE_128_GCM_SHA256  

    TLS: Transport Layer Security  
    ECDHE: Schlüsselaustauschverfahren  
    RSA: Verschlüsselung  
    ASE_128: symetrische Verschlüsselung mit ASE mit 128 Bit  
    GCM: Betriebsmodus bei sym. Verschlüsselung  
    SHA256: Hashalgorythmus   

2. Beginn mit ue11
  - in der Übung werden 2 Unterordner angelegt: server und ngxClient
  - im Unterordner server ist node und in ngxClient ist angular enthalten
  - Einstellungen für das Projekt treffen (vscode)
  

### 19. Einheit
**Datum:** 15.02.2018  
**Dazugehörige Übung(en):**  [ue11](projects/ue11_angularServer)  
**Inhalt**:  

1. Fortsetzung von ue11
  Implementieren von main.ts


### 20. Einheit
**Datum:** 08.03.2018  
**Dazugehörige Übung(en):**  [ue11](projects/ue11_angularServer)  
**Inhalt**:  

  1. Fortsetzung von ue11
  - Angular Applikation implementiert, wird auf der Website angezeigt
    - dafür läd der Client die index.html
      - in der index.html werden mit einem Befehl Bundle-Dateien nachgeladen

### 21. Einheit
**Datum:** 15.03.2018  
**Dazugehörige Übung(en):**  [ue11](projects/ue11_angularServer)  
**Inhalt**:  

  1. Fortsetzung von ue11
  - Tabelle mit Schülern von ue09 nach ngxClient-src-app kopieren
  - Symbolische Links

### 22. Einheit
**Datum:** 22.03.2018  
**Dazugehörige Übung(en):**  [ue11](projects/ue11_angularServer)  
**Inhalt**:  

  1. Raspberry in Betrieb nehmen
    - Image vom Server herunterladen
    - Image am Raspberry installieren
      - wenn bereits ein Raspberry-Image installiert ist, müssen die Partitionen entfernt werden
        - `umount <Partionsname>`
      - Datei entzipen und auf der SD-Karte speichern: `unzip -p <Name der Zip-Datei> | dd bs=4M of=/dev/mmcblk0`
        - `sync` ... überprüfen ob alles auf die SD-Karte kopiert wurde
      - Datei anlegen damit mit SSH gestartet werden kann
        - `touch /media/<name>/boot/ssh`
  2. Arbeiten mit dem Raspberry
    - Verbinden mit: `ssh pi@10.200.114.206`
    - Updatelisten erweitern mit: `apt update`
    - Nachschauen was upgradebar ist: `apt list --upgradeable`
    - Upgrade:`apt upgrade`
    - CPU-Info: `cat /proc/cpuinfo`
      - mit der Revision Nummer ist herrausfindbar, welches Raspberry Model verwendet wird
    - Git installieren
      - `apt install git`
    - Nodejs installieren
      - `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash`
      - `apt install nodejs`
    - npm installieren
      - `npm install -g npm`
    - Repository clonen
      - `git clone "<Link>"`
    - ll Kommando aktivieren
      - im root: `nano .bashrc`
      - # vor `alias ll='ls $LS_OPTIONS -ls'` weg löschen und zu `alias ll='ls $LS_OPTIONS -la'` ändern
    - npm installin ngxClient
      - mit cd in geclonten Ordner wechseln
      - `git checkout <branchname>`
      - in ngxClient wechseln und npm install ausführen
      - in server wechseln und npm install ausführen
    - Auf die Pins des Raspberrys zugreifen über node
      - node API wird benötigt
    - Dist Ordner von ngxClient am PC nach Raspberry tmp kopieren
      - `rsync -aP dist pi@10.200.114.206:/tmp`
    - Dist von tmp nach root ngxClient (aktueller Pfad) kopieren
      - `mv /tmp/dist ./`
      - `chown -R root:root dist` ... Rechte ändern
    - Im server eine `config.json` anlegen
      - in dieser ist der Port definiert
    - Server mit `npm start` im server Ordner starten
    - screen Tool instalieren
      - `apt install screen`
      - Screen ist eien virtuelle Konsole. Konsole kann geschlossen werden und Server läuft weiter. 
      - `screen` ... starten
      - `screen -s` ... ausloggen
      - `screen -r` ... zurück einloggen
