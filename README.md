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
