# FIVU 5.AHME

## 1.Einheit 14.09.2017 (Donnerstag)
* Installation von Visual Studio Code sowie Node.js.
* Lehrplan besprochen.
* Theorie dazu besprochen
  * Programm aufbau
  * Serverseitige Programmierung

## 2.Einheit 21.09.2017 (Donnerstag)
* Grundlagen von Javascript.
* Vor- und Nachteile von Datentypen besprochen.
  * boolean, unidefined, number, null, boolean, string.
  * typeof zum Herausfinden des Datentypes einer Variable.

## 3.Einheit 28.09.2017 (Donnerstag)
* Wiederholen der letzten Einheit.
* tsc (main.ts) transpiliert Typescript in Javascript (main.js)
  * unbedingt in main.ts schreiben sonst wird alles wieder gelöscht bzw. zurückgesetzt.
* Typescript "bessere" Version von Javascript.
* [Übung 2](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue02)
  
## 4.Einheit 04.10.2017 (Mittwoch)
* Schritt für Schritt alles von Repository kopiert für die Einrichtung von Visual Studio Code 
* tsconfig.json für die Transpilierung von von .ts zu .js
* tslint.json für Syntaxüberprüfung(Überprüfung der Falscheingabe)
* .vscode Ordner erstellen.
  * settings.json zum Sichtbarmachen von Deateinin der IDE. 
  * tasks.json welche Tasks es gib z.B clean and build.
  * launch.json für die Debugger-Einstellungen.
* gulpfile.js definition was die Tasks machen sollen.
* *.js.map Files: Verantwortlich für das Anzeigen von Fehlern und in welcher Zeile er im Typescriptcode aufgetreten ist - " "Fehlermapping"
* main.ts -> Erstellung der Klasse "class car".
  * Für Namenskonflikte: private Variable mit _ kennzeichnen.
* [Übung 3](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue03)
	
## 5.Einheit 05.10.2017 (Donnerstag)
* Feld deklarieren und definieren.
  * deklaration: let autos: Car[] = [];
  * definition: autos.push(new Car('RA 1111'));  
                autos.push(new Car('RA 2222'));      
                autos.push(new Car('RA 3333'));    
                autos.push(new Car('RA 4444'));

* Ausgabe von einen Feld mit 2 Arten:
  * for-Schleifen: for (const a of autos){
    console.log(a);
}
  * Direkt über das Feld: console.log(autos);
* In Json Datei abspeichern: 
  * fs.writeFileSync('./dist/autos.json', JSON.stringify(autos));
* .vscode -> keybinding.json für die Tastenkürzel.
  * Datei -> Einstellungen -> Tastenkompination -> keybinding.json -> Alles im .vscode unter settings in das andere Verzeichnis kopieren.
* Weitere Art ein Feld auszugeben:
  * Aus Json ins Programm einlesen -> const buffer = fs.readFileSync('./dist/autos.json');
  * In einen String speicher -> const str = buffer.toString();
  * Mithilfe von parse in ein Feld speichern -> const autos2 = JSON.parse(str);
  * Ausgabe -> console.log(autos2);
* [Übung 3](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue03)

* ue04 erstellen um eine schön strukturierte Klasse zu programmieren.  
  * alles kopiert mit rsynch -aP ue03/ ue04/
* z.B baujahr? : number; -> ? bedeutet das baujahr nicht aufgerufen werden muss.
* [Übung 4](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue04)

## 6.Einheit 12.10.2017 (Donnerstag)
* Nachbesprechung der Probleme die beim Lesen der File auftreten können. 
  * Wenn man beim Einlesen die Daten nicht überprüfen, kann man einfach so Wörter in die Datei schreiben und das funktioniert, weil die Attribute des eingelesenen Objekts als `any` behandelt werden. 
* Interface zeigt nur an aus welchen Teilen ein Objekt besteht.(implements).
  * Man sollte immer alle Elemente aufrufen, da er sonst einen Fehler meldet. 
* Fertigstellung des Konstruktors.
* Beim Auslesen der Datei kam ein nicht erwünschtes Ergebnis z.B _kennzeichen
  * Lösung = Umspeichern in ein anderes Objekt damit er _kennzeichen in kennzeichen speichert.
* Wenn man von außen Datenstrukturen bekommt ist es wichtig diese zu Prüfen und wenn ein Fehler auftritt unbedigt eine Exception werfen.
* [Übung 4](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue04)

## 7.Einheit 19.10.2017 (Donnerstag)

### Webserver 
* Web-Server ist ein Programm, das auf unterschiedlichen Betriebssystemen laufen kann.
* Die Sprache ist "HTTP" mit der sie Kommunizieren, viele glauben es ist HTML ist aber falsch weil es eine Codierungsform ist.
  * Arten von Server Erstellung: Apache, nginx, Java Enterprise Edition -> Glassfish.Server -> Wildfly, Node.js -> express.
* Datenprotkoll wie Daten übertragen werden, sorgt dafür das in den Subnetzen Daten übertragen werden-> TCP/IP
* Ethernet und WLAN Verbindet die einzelnen Subnetze.
* TLS (Transport Layer Security entspricht https) Datenverschlüsselung.
* ue05 erstellt. (rsync -aP ./sx-fiv/5AHME/typescript-template/ ./) aus LMS.
* express instalieren: npm install --save express @types/express.
* Express Websever erstellen.
  * const server = express();
* Verzeichnis public für statische HTML Seiten definieren
  * server.use(express.static('public'));
* public Datei erstellen und aus Wikepedia die Struktur kopieren.
* URL -> Uniform Resource Locator.
* f5 für server starten und im Browser unter http//:localhost:4711/index.html des Server aufrufen.
* f12 im Browser
  * Elements: aktuellen Elemente der Seite. 
  * Console: normale Konsole.
  * Network: Zeigt an wie kommuniziert worden ist.
* DOM -> Domain Object Model -> ist der Bausteil für die HTML-Seite (es wird aus dem HTML ein Object erzeugt und dieses angezeigt).
  * kann man unter Elements ändern.
* <link rel = "stylesheet" href = "myStyles.css" /> in die index.html aufgerufen.
* Unter public neue Datei erstellen myStyles.css
  * Unter dieser Datei kann man nun die Seite verschiedene Elemente hinzufügen. (z.b Farben, Borders...)
* [Übung 5](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue05)

## 8.Einheit 09.11.2017 (Donnerstag)

* Heutige Aufgabe: Dynamisch produzierte HTML-Seiten.
* Wiederholung der letzten Einheit.
* Webserver besteht 3 Teilen 
  * HTML -> Ist die Codierung wie ich die Information in die Datei einbringe. Zum Erzeugen der Struktur der Seite.
  * css -> Design der Seite
  * Javascript -> dynamisyche veränderung am Client.
  * Vorteil: Jeder hat seinen eigenen Zweig, da z.B ein Designer nicht mit dem Javascript also da Programmieren klar kommt dafür kann er in 		seinem Zweig css seine arbeit gut erledigen.
* p -> HTML Element das 
* # -> id nur einen Absatz in unseren Fall eine Farbe geben
* . -> class, kann mehreren HTML Elementen zugewießen werden. 

* Selection
  * Bsp: ```javascript
p {
    background-color: green;
    border: solid 3px red;
  }
````
* Die heutzutage meist genutzte Sprache ist PHP
* pug

