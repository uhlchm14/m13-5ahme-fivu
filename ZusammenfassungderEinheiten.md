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

### Einheit 12:





Einzelne Einheiten:

- [ue02](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue02)
- [ue03](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue03)
- [ue04](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue04)
- [ue05](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue05)
- [ue06](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue06)
- [ue07](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/riedom13/Projekte/ue07)
