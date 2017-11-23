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

* Heutiges Ziel: Dynamisch produzierte HTML-Seiten zu erstellen.
* Wiederholung der letzten Einheit.
* Die heutzutage meist genutzte Sprache ist PHP
* Webserver besteht 3 Teilen 
  * HTML -> Ist die Codierung wie ich die Information in die Datei einbringe. Zum Erzeugen der Struktur der Seite.
  * CSS -> Design der Seite.
  * Javascript -> dynamisyche veränderung am Client.


* CSS-Files bestehen aus Selectoren
  * Bsp: 
```css
p {
    background-color: green;
    border: solid 3px red;
  }
```


```typescript

server.get('/test', (req, res, next) => {});

```
* Das Server verarbeitet den get Request vom Client in diesem Fall ist GET /test.
* Die Parameter für den HandlerRequest können mit folgenden Schritten ermittelt werden.
  * f12 auf den get
  * mit strg + f den HandlerRequest suchen.
  * danach die parameter req, res, next entnehmen.

* Wenn der user /test eingibt bekommt er das HTML des jeweiligen RequestHandlers zurück.
* Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext.
* => Arrow Operator, bindet die Methode ans Objekt.
* Counter eingebaut der beim Neuladen der Seite den Counter um 1 erhöht.

```typescript

let counter = 1;
//1.Schicht
server.get('/test', (req, res, next) => { 

    let html = '';
    html += '<!DOCTYPE html>'
    html += '<html>'
    html += '<head>'
    html += '<title>Meine Testseite</title>'
    html += '<link rel = "stylesheet" href = "myStyles.css" />'
    html += '</head>'
    html += '<body>';
    html += '<h1>Test<h1>';
    html += '<h2>' + counter++ +'.Aufruf</h2>'; 
    html += '<p>Das ist eine vom Testgenerierte Testseite</p>';
    html += '<p id = "absatz2" >Das ist der zweite Absatz</p>';
    html += '<p class="gelbeAbsaetze" >Das ist der dritte Absatz</p>';
    html += '</body>';
    html += '</html>';

    res.send(html);
  
});
```

* Sagt dem Express dass Pug seine Render engine ist.

```typescript

server.set('view engine', 'pug');

```

* Wenn der Client eine Anfrage an den Server schickt, rendert dieser die Pug Datei zu HTML und schickt sie an den Client zurück.
* Im unserem Fall passiert dies nur wenn man /pug eingibt.

```typescript

server.get('/pug', (req, res, next) => {  
    res.render('test.pug');
});

```
* Haben einen Ordner erstellt und in diese eine Datei mit test.pug angelegt.
* Das is die Datei die gerendert wird.

``` pug

doctype html
html(lang="de")
    head
        title = "Testseite mit pug rendering"
        meta(charset = "UTF-8")
        link(rel="stylesheet" href="myStyle.css")
    body
        h1 Seite mit pug generiert
        p Das ist der erste Absatz

```
* [Übung 5](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue05)


## 9.Einheit 16.11.2017 (Donnerstag)

* Weiterführen der test.pug Datei.
* Neue Übung -> Bootstrap

## 10.Einheit 23.11.2017 (Donnerstag)

