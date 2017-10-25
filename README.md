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
  - Setter- und Getter-Methoden werden mithilfe der Keywords 'set' und 'get' erstellen.
  - Namenskollisionen müssen vermieden werden.
2. Array
  - Durch die Methode 'push' kann ein Datenelement hinzugefügt werden.
3. Dateien lesen/schreiben
  - 'import * as fs from 'fs';' wird zum Lesen und Schreiben von Dateien verwendet.
  - Mit 'fs.writeFileSync(<Path>, <Data>);' kann in Dateien geschrieben werden.
  - Mit 'fs.readFileSync(<Path>);' können Dateien eingelesen werden.  
    Die engelesenen Daten befinden sich in einem Buffer. Dieser kann mithilfe der Methode 'toString()' in einen String ungewandelt werden.  
    Bei Einlesen von Daten ist zu beachten, dass keine Kompatibilitätsprüfung durchgeführt wird, wenn man diese Daten z.B. einer Datenhaltungsklasse zuweist.
4. JSON
  - Möchte man einen String im JSON-Format speichern, kann man dies mit 'JSON.stringify()' tun. Die Gegenoperation dazu ist 'JSON.parse()'.
5. Eigene Tastenkombinationen (Shortcuts) einfügen.
6. ue04 erstellen (= ue03 kopieren und .ts-Dateien löschen)
7. Interface
  - Durch ein Interface kann festgelegt werden, welche Datenelemente bei der Erstellung eines Objektes einer Klasse übergeben werden müssen und/oder können.
  
  
### 6. Einheit
**Datum:** 12.10.2017  
**Dazugehörige Übung(en):** ![ue04](projects/ue04)  
**Inhalt:**  
1. Interface
  - Um bei der Erstellung des Objektes nur bestimmte Strings zuzulassen, können anstatt des Datentyps 'string' diese gewünschten Strings bei der Deklaration angegeben werden. Dadurch werden nur diese Strings akzeptiert.
2. Debuggen
  - Breakpoint
    - Mithilfe des Breakpoints stoppt das Programm an dieser Stelle. Alle Variablen und deren Inhalt können geprüft werden um Fehler zu finden.
  - 'debugger;'
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
3. 'HTTP GET'
  - Über das Kommando 'HTTP GET <Ressource>' stellt der Client beim Server eine Anfrage, um eine bestimmte Ressource zu erhalten (z.B.: index.html).
4. Eigenen Web-Server programmieren
  - 'npm install --save express @types/express'
    - Befehl für die Installation der Datenpacktet für den Node.js-Express-Server.
  - 'import * as express from 'express';'
    Import-Kommando, um den Express-Server in unserer 'main.ts' verwenden zu können.
  - Quellcode zur Erstellung des Servers (Port 4711):
    
    '''
    const server = express();
    server.use(express.static('public'));  // Verzeichnis public für statische HTML-Seiten definieren
    server.listen(4711);  // http://localhost:4711/index.html
    '''

  - 'http://localhost:4711/index.html'
    - Mit dieser URL (Uniform Ressource Locator) kann der Web-Server mithilfe eines Browsers angesprochen werden.
    - öffnet man die Debugger-Konsole im Browser (F12), kann die Kommunikation zwischen Client und Server genau analysiert werden. Dadruch können auch Fehler gesucht bzw. gefunden werden.
5. CSS (Cascading Style Sheets)
  - Durch die Verwendung von Style Sheets kann das Aussehen einer HTML-Seite auf einfache Art und Weise verändert werden. Über Klassen können Elemente zusammengefasst werden, die das selbe Aussehen haben soll. Soll nur ein Element anders aussehen, kann man dies über die ID des Elements realisieren.