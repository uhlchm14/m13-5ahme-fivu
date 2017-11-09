**Verfasser:** Julian Wolf  
**Lehrer:** Steiner   
**Datum der Einheit:** 19.10.2017
   
## Übersicht: 

1. Was ist ein Webserver
2. Webserver erstellen
3. HTML Seiten

### 1. Was ist ein Webserver

Ein Webserver ist ein Programm, welches anfragen von z.B. Clients bearbeitet.

Der Server kommuniziert im normalvall über Ethernet mit dem Client. Als Sprache zur Verbindung wird HTTP verwendet.
Meistens wird verwechselt, dass als Sprache HTML verwendet wird. Jedoch ist HTML keine Sprache sondern nur eine Codierungsform.

Weitere Informationen: Client und Server sind mit einem Netzwerk gemeinsamen Netzwerk verbunden, welches die Informationen über Subnetze austauscht. Zur Übertragung wird das Sicherheitsprotokoll TCP/IP verwendet, welches dass sichere ankommen von Paketen zwischen den den einzelnen Subnetzen managed.
Ethernet oder Wlan sind nur Verbindungs-Schnittstellen zwischen Subnetzen und Programmen.
Zur verschlüsselten Übertragung zwischen den Subnetzen kann https oder TLS (Transport Layer Security) verwendet werden.

### 2. Webserver erstellen

Es gibt viele Webserver-Programme, wie z.B. Apache, nginx, JavaEE,...
Wir verwenden 'express' von Node.js

Zur Einbindung des Packets unter Visual Studio Code, wird folgender Befehl verwendet werden: 'npm install --save express @types/esxpress'

Folgendes Programm wurde zur Webserver-erstellung geschrieben:

```JavaScript
import { sprintf } from 'sprintf-js';
import * as express from 'express'

class Main 
{
    constructor () 
    {
        console.log('Start');
   }
}

const main = new Main();

//Express Web Server erstellen
const server = express();

//Verzeichnis public für statische HTML Seiten definieren
server.use(express.static('public'));

server.listen(4711);
```

- Der Befehl `import * as express from 'express'` importier die express Klasse.
- Der Befehl `const server = express();` erstellt einen Express Webserver und speichert íhn in die const Variable server.
- Der Befehl `server.use(express.static('public'))` gibt vor, aus welchem ordner das Objekt der HTML-Seite erzeugt werden soll. In diesem Fal wird aus dem Ordner `public` der zuvor angelegt wurde die HTML-Seite erzeugt.
- Der Befehl `server.listen(4711)` startet den Server auf dem Port `4711`
    



### 3. HTML-Seiten

Es wurde eine Probe HTML-Seite von Wikipedia kopiert und von uns bearbeitet:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Meine Homepage</title>
    <link rel = "stylesheet" href = "myStyle.css"/>
  </head>
  <body>
      <h1> Meine Homepage</h1>
    <p>Das ist eine Testseite</p>
    <p id="absatz2">Das ist der zweite Absatz</p>
    <p class="gelbeAbsaetze">Das ist der dritte Absatz</p>
  </body>
</html>
```

Benutzte Befehle:

- **!DOCTYPE:** Gibt den Dateityp an
- **html:** schließt alles der HTML-Seite ein
- **head:** schließt alles ein, was den Titel der Seite bearbeitet
- **title:** Definiert den Inhalt des Seitentitels
- **link:** Linked Dateien zur HTML-Seite
- **body:** schließt alles ein, was den Körper der HTML-Seite bearbeitet
- **h1:** Zum erstellen einer Überschrift
- **p:** Zum erstellen von einzelnen Absätzen

- Der Befehl `<p id="absatz2">` weist dem Absatz eine ID zu, welche mit der CSS zugeordnet werden kann.
- Der Befehl `<p class="gelbeAbsaetze">`weist dem Absatz eine Klasse zu, welche mit der CSS zugeordnet werden kann.

Damit ein Browser weiß, wie er eine HTML-Seite dagestellt werden soll, gibt es das sogenannte DOM.

**D**omain **O**bject **M**odel ist der Bauplan einer HTML-Seite. Er erzeugt ein Objekt aus dem HTML und stellt dieses dar.

Um HTML-Seiten leichter gestalten zu können, gibt es grafische Designpakete.
Sogenannte **CSS**, **C**ascading **S**tyle **S**heet.

Diese CSS-Dateien werden über den Link Befehl eingebunden.

Wir haben folgende CSS-Datei zum Testen erstellt und im oben angegebenen HTML eingebunden:

```CSS
body{
    background-color: lightblue;
}

p {
    background-color: green;
    border: solid 3px red;
}

#absatz2 {
    border: solid 3px black;
}

.gelbeAbsaetze {
    background-color: yellow;
}
```

- **body:** legt die Hintergrundfarbe für den Körper der HTML-fest
- **p:** legt die Hintergrundfarbe für die Absätze fest.

Zum bearbeiten einzelner Absätze gibt es 2 Varianten:
1. Variante: mit ID. **#absatz2:** setzt die Umrandungsfarbe für Absätze mit dieser ID fest. Kann aber nur für ein Element verwendet werden!
2. Variante: mit Klassen. **.gelbeAbsaetze:** legt die Hintergrundfarbe für Absätze diese Klasse fest. Kann für mehrere Elemente verwendet werden.


Wenn sich mehrere Farbdefinitionen überschneiden, z.B. Hintergrundfarbe des Body ist blau definiert, Hintergundfarbe des Absatzes im Body ist gelb definiert, so setzt sich immer die untergeordnetzte Farbdefinition durch. Absatz ist dem Body untergeordnet also setzt sich als Hintergrundfarbe für den Absatz gelb durch.

Zum Überprüfen der HTML in einem Browser, kann eine Debugging-Konsole verwendet werden.
Wir verwendeten folgende Funktionen in der Debugging-Konsole von Chromium:

- **Elements:** zeigt die aktuellen Elemente an
- **Console:** Die Konsole für z.B. Ausgaben und Fehler 
- **Network:** Zeigt die geladenen Datenpakete
