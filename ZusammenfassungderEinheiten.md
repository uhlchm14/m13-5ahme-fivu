# FIV 2017/2018 5AHME

## Webprogrammierung

### Einheit 1: 14.9.2017

Einleitung in das Schuljahr:

- Lehrplan
- Verlauf und Entwicklung der Programmiersprachen
- Basis der Web-Programmierung
- Installation Node.js und Visual Studio Code

### Einheit 2: 21.9.2017

- Programm erstellen, um die Grundfunktionen kennenzulernen
- JSON Dateiformat

### Einheit 3: 28.9.2017
- Wiederholen vom 21.9.
- package.json und Einführung Typescript.
- Ersten Typescript Funktionen erstellen und ausgeführen.
- Typescript Template von LMS geklont und in unsere ue03 einfügen


### Einheit 3.5: 4.10.2017 (Supplierstunde)

- Fortsetzen ue03
- .vscode hinzufügen

### Einheit 4: 5.10.2017

- Fortsetzen bei ue03
- Erstellen eines Feldes
- Arbeiten mit dem Feld
- Feld in Dateispeichern
- Feld aus Datei einlesen & ausgeben

### Einheit 5: 12.10.2017

- Wiederholung von Einheit 4
- Besprechung von Interface
https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue03- Exceptions (Errors) setzen / Überprüfung im Constructor durchführen
- Datei "Data" schreiben um Daten abzuspeichern
- Serverseitige Programmierung abecken
- Server erstellen

Interface legt fest, wie Objekt aussehen soll/ aus welchen Dateien das Objekt besteht.

### Einheit 6: 19.10.2017


### Einheit 7: 9.11.2017

- Fortsetzung mit css
- Kurze Wiederholung
- Webseiten bestehen aus 3 Teilen:

HTML, CSS, Javascript

HTML: Erzeugung der Struktur der Seite
CSS: wie die Webseite wirklich aussieht (aussehen)
Javascript: ist eine Möglichkeit programme am Client vorzunehmen (dynamische Veränderung)
https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue03
Begründung: Grafiker kann meist nicht programmieren und umgekehrt. 

Selektoren -> Fachbegriffe für Elemente in der CSS-Datei

Express-Server arbeitet mit einem Schichtensystem

Man kann alle Schichten definieren.


- Bedingung festlegen: 
```
server.get('/test', (req, res, next) ..... usw. )
```

-> neue HTML-Maske aufbauen, wenn URL mit `/test`aufgerufen wird

Alle HTML-neu aufrufen und definieren um Maske zu erstellen. 

Schönere Variante: Rendering

-Render Datei erstellen

- Ordner views anlegen
- Datei test.pug
- HTML inhalt eingeben ohne html- Aufrufe


Moderne technologie für Serverprogrammierung : PHP


### Einheit 8: 16.11.2017

- Wiederholung Einheit 7 

Bedeutung dynamisch bei Serverprogrammierung -> Seiteninhalt wird immer Programmatisch zusammengebaut und verändert

.css ist für das Aussehen der Webseite zuständig -> gültige HTML-Codes müssen eingehalten werden

In .css -> mit einem Punkt (.) werden Klassen gebildet.
	-> mit einer Raute (#) wird der Aufruf genau dann aufgerufen, wenn die ID aufgerufen wird 
	-> Prioritäten gibt es auch bei .css
	-> 

Bessere und einfachere Stile einbauen -> Bootstrap

Homepage Bootstrap: (Version 4) getbootstrap.com

Responsive -> Für jedes Gerät das Design angepasst (automatisch)

Z-index -> Wir haben eine Ebene wo wir mit dem Auge daraufschauen
	-> Elementen werden mit Z-index eine Höhe zugeordnet
	-> ansonsten liegen Elemente übereinander und verdecken sich

DOM: Domain Object Model -> Realisiert HTML in das was wir sehen 

- Verschiedene Komponenten können aus der Documentation von Bootstrap entnehmen
-> Elemente werden dadurch ziemlich einfach


- Neue: ue06 erstellen (ue05 in ue06 kopieren)

- Server überarbeiten

div-Element in HTML -> Strukturelement -> Von sich aus kein Aussehen

- Eine kleine Eingabe realisieren

Fortsetzung: Nächste Einheit

### Einheit 9: 23.11.2017

- Fortsetzung ue06
- Passwort eingabe
- 2.Schicht eingefügt -> server.post

BodyParser -> Text aus BodyText holen -> Zugriff auf fertiges Object

- Probleme auf der Client Seite -> Nicht testbar

- Mit `server.use(bodyParser.urlencoded())` werden die Daten als Objekt zurückgeliefert.


- Cookie -> Einbinden in ue06

- Fortsetzung -> nächste Einheit

### Einheit 10: 30.11.2017

- Fehlstundenüberprüfung

Cookie: 
- dient Speicherung von Daten beim Client
- Oftmals mit Verfallsdaten festgelegt
- Gebunden an die URL
- Wenn URL aufgerufen wird -> Cookie Informationen werden mitgesendet 
- Auf Cookies kann nur der eigene PC zugreifen.
- Durch Schadsoftware können Cookies dennoch ausgelesen werden
- Muss im Header vom Response deklariert sein
- Cookies werden mitlerweile automatisch mitgesendet -> da Cookies erlaubt
- - - -	- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

Moderne Variante zu Cookies:

Web-Token oder JSON-Token

- Web-Token -> ist ein Stück an Daten, welche ich mitgeben kann. 
- Kann von Server überprüfen ob es wirklich von der jeweiligen Person kommt
- Server sendet das Token signiert zum Client und wird danach wird die Signatur überprüft

Unterschied zum Cookie:

- Signiert
- Token wird nicht automatisch gespeichert


ue07 aus ue06 erstellen

- Alle Cookies entfernen
- `npm install --save jsonwebtoken`
- Umbauen auf WebToken

- Um Signatur realisieren zu können brauchen wir öffentlichen und einen privaten Schlüssel
- github.com/ManfredSteiner/webserver-template
- In Branch mit JSONWEBTOKEN wechseln und README lesen
[Repository](https://github.com/ManfredSteiner/webserver-template/tree/step8b-json-web-token)

- Schlüssel erzeugen

- Schlüssel in main.ts einbinden
### Einheit 10: 30.11.2017```typescript
private _privateKey: Buffer;
private _publicKey: Buffer;
```


Fortsetzung in der nächsten Einheit!


### Einheit 11: 07.12.2017

- Wichteln
- Wiederholung Cookies, 

- Theoriemitschrift ist aus unerklärlichen Gründen verschwunden??????

JSON-Web-Token

Speichert nicht jedes mal die Daten auf den Server
Nach einen bestimmten Zeitraum wird erneut überprüft ob der jeweilige User noch der richtige ist. 
#### Wir sind Knapp am Ziel!

Nächste Einheit:

### Einheit 12: 14.12.2017

Fortsetzung Web-Token

Web-Token:

- Ein Stück wird zwischen Server und Client gesendet -> signiert
- Bei signieren muss der Private Schlüssel verwendet werden
- Bei Verschlüsselung umgekehrt
- Übertragung vom Web-Token: Headerattribut: Bearer "Token"
- z.B.: Authentifizierung

Fertigstellung ue07

#### Client Programmierung

1) selbst Javascript programmieren
2) Javascript-Libaries verwenden
3) Java-Script Frame Work -> an Vorgabe muss sich gehalten werden
4) Angular -> von Google betrieben


Angular:

Wenn änderung zur Vorversion -> nicht alles kompatibel zu älteren Versionen
Angular kompliziert!
Tool was es vereinfacht mit Angular zu arbeiten : **Angular Command Line Interface**

Angular Projekt erstellen: 
```
ng new <projektname>
```

ng serve lässt das Program laufen

Wir benötigen folgende Dateien zum Bearbeiten:
- app.components.html
- app.components.

- ue08 angelegt

Fortsetzung nächste Einheit 2018 :-)


Einheit 14: 11.01.2018

- Wiederholung Jahr 2017

- JavaScript Einarbeitung -> Client Seitig sehr stark verbreitet
- TypeScript Einarbeitung -> Wechsel zu TypeScript weil es Java ähnlich wird
  Typisierung wird verwendet -> ohne Typisierung -> man kann machen was man will 
  Fehler anfällig -> Compiler braucht Typen um auf Fehler daraufhin zu weisen
  -> weiß selber nicht was eine Variable ist
- Seit es Angular gibt verwenden viel mehr Leute Typescript
- Serverseitige Programmierung -> Web-Server
  Verwendung über die Technologie Node.js -> Serverseitige Platform um Javascript Programme ausführen zu können
  Node.js installiert -> Aus Typescript quelltext javascript quelltext und dann anwenderseite
  -> Web-Server Erstellung -> Server selbst ist in Node.js http + Modul Express (Express ist eine Erweiterung)
  -> Web-Server muss eine möglichkeit einbinden dass man mit ihm eine TCP/IP-Verbindung aufbauen kann
  -> Technisch nötig um eine TCP/IP Adresse zu erstellen -> SYNC, SYN AG, SYN Pakete austauschen 
  Web-Server -> Anfragen vom Client richtig zu formulieren
  -> Muss http Protokoll einhalten -> 
  -> Request besthet aus einem Header, und bodybereich; Im Header steht die gewünschte Ressource oder Codierung, Sprache, Web-Token, Cookies,... Nur Text
  -> Frage Anwort Frage Antwort, usw.
 

  -> Next Step: Cookies -> Daten Clientseitig zu speichern die dann später 
  -> Meistens in Cookies -> Session-Id
  -> Muss immer und überall mitgesendet werden

- WebToken -> Daten werden signiert versendet -> Client entscheidet selber wann er sie verwenden will und wann nicht. 
  -> Anmeldeverfahren -> Anfrage wird geschickt -> man bekommt Anmeldeseite
  -> Seite arbeitet mit dem HTML-Protokoll -> HTML-Tag: <Form> -> Inputfelder, Button, kann mit Button einen entsprechenden Request erzeugen
  -> HTTPS Server verschlüsselt Passwort -> Passwortfishing nicht möglich
  -> Server bekommt Anmeldedaten -> Muss überprüfen ob der Passwort-Hash stimmt
  -> Wenn Passowrt stimmt -> Einen Dauerhafte Arbeitssession erstellen durch Cookie oder Web-Token
 - Angular ist ein Ökosystem -> erst ca. 1 Jahr alt -> seit Angular 2 neuer Durchbruch -> Aktuell Angular 6
  -> unterscheidet sich von PHP, ASP, JavaScriptFrameworks durch 
  -> Sehr Kompliziert -> mit Tools vereinfachbar
- Node package Manager (npm) dient dazu zum installieren von Zusatzpaketen
  -> Jeder kann eigene Pakete und Module installieren -> Downloadrate beachten! 
  -> Im Ordner Node Package 

**Nun Fortsetzung: (8:58)**

#### Schwere politische Diskussionen!

Fortsetzung (9:24)

Zeit

## Einheit 15: 18.01.2018

- Wiederholung von letzter Einheit (Angular)
- ng new erstellt neues Projekt
- ng serve erzeugt Projekt -> nur fürs Testen geeignet

Arbeitsweise von Angular Uebersicht:

![Übersicht Angular(/home/schueler/work/Riegelnegg/FIV/m13-5ahme-fivu/Fotos/AngularUebersicht.png)


- Erstellung ue09
- ngif -> erst wenn das andere Aktiviert wird, wir die andere aufgerufen


Bootstrap einfügen:

ng bootstrap

Installieren!!:

npm install --save bootstrap@4.0.0-alpha.6

npm install --save @ng-bootstrap/ng-bootstrap

Service wird injiziert um Kompunente darfauf zugreifen zu können

Fortsetzung fertigstellung

## Einheit 16: 25.01.2018:

- Abwesenheitskontrolle
- Mündliche Prüfung Korosec
- Angular abschließen -> war nur überblick
- 2 Weitere Themen: Angular auf Server starten, HTTPS server erstellen
- 2 Semester: Kleines Selbstständiges System auf Raspberry

- Bei Angular schreibt man Komponenten.
Wenn Bestehende HTML Pakete nicht ausreichend -> neue Arten hinzufügen
Klassischen Input-Feld -> bisschen Code.
Globale Klassen /(Injector) gibt Daten an Komponente weiter. 
Angular kann mit vielen Modulen aufgebaut werden.
Angular legt keine Dateien an

Wenn variable werte bekommt, wiird automatisch das Domain-Object-Model angelegt und ist danach verfügbar

- Fertigstellung ue09


HTTPS:

System: Verschlüsselungssystem: TLS (Transport Layer Security)
				Früher -> SSL (Secure Socket Layer)

Benötigt für Verschlüsselung: Verschlüsselungsverfahren
Vermischung zwischen symetrischen und asymetrischen Verfahrens.

Symetrisches Verfahren: Bsp:(AES) -> nur ein Schlüssel benötigt, der verschlüsselt und entschlüsselt -> einfach
			Schlüsselaustausch-Problem: Schlüssel kann nur über Netzwerk gesendet werden
			-> Kann abgefangen werden

Asymetrisches Verfahren: Bsp:(RSA) -> Schlüsselpaar vorhanden (öffentlich, privaten Schlüssel)
			Entschlüsseln kann nur der der den provaten Schlüssel hat
			Verschlüsseln kann sowohl der private als auch öffentliche Schlüssel verwenden
			Nachteil: Langsam bei großen Datenmengen

Bei HTTPS: vermischung beider um noch schneller werden

Läuft über X.509 Zertifikate:

Öffentliche Schlüssel des Zertifikatsinhabers.
Es muss signiert sein von einem vertrauenswürdigen Aussteller des Zertifikats ( Issuer)

Nächste Einheit: Schlüssel und Zertifikat erstellen


## Einheit 16.5: 

1.) Symettrischer Schlüssel wird erzeugt 
 -> darf icht versendet werden (könnte abgefangen werden)
2.) SysS asymetrisch Verschlüsseln mit öffentlichen Schlüssel
3.) Verschlüsselte symetrischer Schlüssel versenden
4.) Verschlüsselter Schlüssel mit privaten Schlüssel in symetrischen Schlüssel umwandeln
5.) Daten mit symetrischen Verfahren verschlüsselt austauschen

Zertifikate:
X509-Zertifikat


öffentlicher Schlüssel des Inhabers des Zertifikats

Zwei Kommunikaationspartner wollen verbindung aufbauen. 
Hacker fängt Daten ab.
User schickt öffentlichen Schlüssel zurück

Hacker kann Daten entschlüsseln und anschließend verschlüsseln, 

-> Deshalb sollten Schlüssel signiert werden durch einer vertrauenswürdiger Authorisirungsstelle

Fall: Signatur ebenfalls gehackt.

Ich überprüfe alles und die Schlüssel passen.
Sowohl Schlüssel und Zertifikat gehackt.
-> nicht überprüfbar

anfälligkeit minimieren -> Zertifikate aktualisieren!

- Anschauen von einem Zertifikat

	-> Entnehmbar: Ausgestellt für, Ausgestellt von (signiert Schlüssel),
	Gültigkeitsdauer, 

Wenn als Server aktiv, ich muss Client ein

OpenSSL

Normal wird eine zertifikatskette beobachtet

Paket A von Benutzer signiert 
Zur überprüfung brauche ich das Zertifikat von Benutzer B

Dieser muss das zertifikat von C haben.

Irgendwer hat dann ein selbstsigniertes zertifikat haben, müssen im System eingetragen sein 

selbstsigniertes Zertifikat erstellen
Dannach echtes Serverzertifikat erstellen


Ablauf:

Schlüsselpaar erstellen:

Eingabe: openssl genrsa

Danach in zertifikat schreiben: openssl genrsa -out ca.pem

In ca.pem befindet sich der private Schlüssel

head ca.pem -> Zeigt die ersten paar Zeilen einer Datei

openssl rsa -in ca.pem -pubout -out ca_pub.pem



CSR Certificate Sign Request

Ca möchte sich selbst signieren darum braucht es einen Request

openssl req -new -subj '/CN=DA riedom13' -key ca.pem -out ca.csr

openssl req -in ca.csr -noout -text

Da steht alles drinnen was der der ein Zertifikat erstellen möchte, benötigt

-cp /etc/ssl/openssl.cnf ./ (ins aktuelle Verzeichniss verschieben)


Datenbank erstellen:

mkdir -p demoCA/newcerts (neuen Datenbankordner erstellen)
touch demoCA/index.txt (Datenbank erstellen)

Neue selbstsignierte CA erstellen:

openssl ca -config openssl.cnf -create_serial -batch -extensions v3_ca -out ca.crt -keyfile ca.pem -selfsign -infiles ca.csr


Wurzel eine Zertifikatskette: selbstsigniertes Zertifikat

Schlüsselpaar für Server

openssl genrsa -out server-riedom13.pem

openssl rsa -in server-riedom13.pem -pubout -out server-riedom13_pub.pem

openssl req -new -subj '/CN=Server-riedom13' -key server-riedom13.pem -out server-riedom13.csr


Mit welchen Zertifikat wird die signierung durchgeführt?:

openssl ca -config openssl.cnf -batch -cert ca.crt -keyfile ca.pem -in server-riedom13.csr -out server-riedom13.crt




Schnell Zusammenfassung:

- Zertifikatsaussteller
    - privaten Schlüssel erzeugen
      - `openssl genrsa -out ca.pem`
    - öffentlichen Schlüssel aus dem Privaten erzeugen
      - `openssl rsa -in ca.pem -pubout -out ca_pub-pem`
    - CSR (Certificate Sign Request)
      - `openssl req -new -subj '/CN=CA riedom13' -key ca.pem -out ca.csr`
    - Config-Datei als dem OpenSSL-Verzeichnis in das aktuelle Verzeichnis kopieren
      - `cp /etc/ssl/openssl.cnf ./`
    - In der Config-Datei `policy_match` zu `policy_anything` ändern.
      - `nano openssl.cnf`
    - Unterverzeichnis erstellen
      - `mkdir -p demoCA/newcerts`
    - Datei `index.txt` erstellen
      - `touch demoCA/index.txt`
    - Zertifikat erstellen
      - `openssl ca -config openssl.cnf -create_serial -batch -extensions v3_ca -out ca.crt -keyfile ca.pem -selfsign -infiles ca.csr`
  - Server
    - privaten Schlüssel erzeugen
      - `openssl genrsa -out server-poefam13.pem`
    - öffentlichen Schlüssel aus dem privaten erzeugen
      - `openssl rsa -in server-riedom13.pem -pubout -out server-riedom13_pub-pem`
    - CSR (Certificate Sign Request)
      - `openssl req -new -subj '/CN=server-riedom13' -key server-riedom13.pem -out server-riedom13.csr`
    - Zertifikat erstellen
      - `openssl ca -config openssl.cnf -batch -cert ca.crt -keyfile ca.pem -in server-riedom13.csr -out server-riedom13.crt`

Fortsetzung nächste Einheit:


## Einheit 17: 1.2.2018

- Abwesenheitskontrolle
- HTTPS-Server

HTTPS-Server

Arbeitet ganz normal mit OSI-Modell

S -> Steht für Secure (TLS-Verfahren)
Protokolle für Internetzugriff: HTTP -> TLS -> TCP -> IP -> Ethernet

Hybrides Verfahren:
Mischverfahren aus symetrischen Verfahren und asymetrischen Verfahren

-> Schlüsselaustauschproblem -> Für Schlüsselaustausch wird asymetrisches Verfahren verwendet.
-> private Schlüssel verbleibt bei Schlüsselerzeuger, 

Öffentliche Schlüssel muss überprüfbar sein.

Zertifikatsaustausch zwischen einer Bankseite.

Zertifikat muss von einer seriösen Stelle signiert sein. 

HTTPS-Server zu Verfügung stellen wollen:

Wir brauchen ein Zertifikat.

Ein selbsterstelltes Zertifikat muss vertrauenswürdig gemacht werden -> Manueller Schritt im Browser

Der Server entschlüsselt mit dem Privaten Schlüssel, versendet wird wieder mit öffentlichen Schlüssel



Aufgabe: 

HTTPS-Server in Betrieb nehmen

Selbstständig. 

Kontrolle nächste Einheit:

##Einheit 18: 08.02.2017




Einzelne Einheiten:

- [ue02](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue02)
- [ue03](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue03)
- [ue04](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue04)
- [ue05](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue05)
- [ue06](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue06)
- [ue07](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue07)
- [ue08](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue08)
- [Angular Übersicht](https://angular.io/guide/template-syntax)
- [ue09](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue09AngularWithClockComponent)
- [ue10](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue10HTTPSServer)
