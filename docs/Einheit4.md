**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 04.10.2017
   
## Übersicht: 

1. gulpfile.js
2. settings.json
3. launch.json
4. main.js.map
5. Klasse car erstellen

### 1. gulpfile.js
Gulp generell kann:
- HTML, Java Script und CSS verkleinern
- SCSS in CSS umwandeln
- Bilder optimieren und Dateien in einen dist-Ordner kopieren
- Webbrowser automatisch aktualisieren oder Webserver automatisch starten

Wir verwenden es zum Steuern / Übersetzen

[Quelle - Wikipedia](https://de.wikipedia.org/wiki/Gulp.js)

### 2. settings.json
Hier stellt man ein, was man an Dateien bzw. Ordner in der Übersicht sehen möchte und was nicht.
"True" = wird angezeigt  
"False" = wird nicht angezeigt  

### 3. launch.json
Wir haben die bestehende launch.json Datei überschrieben.
Dies ging wie folgt: 
Auf die "Wanze" klicken, Einstellungen, launch.json aus dem LMS kopieren und einfügen.

### 4. main.js.map
Über Gulp wurde aus unserer Typescript-Datei (.ts) eine main.js erzeugt, welche sich im dist-Ordner befindet.
Diese Datei ist aber nicht ausführbar, es tritt ein Laufzeitfehler auf.
Daher wurde ebenfalls die Datei main.js.map erstellt, über diese kann der Debugger eine Zuteilung treffen und es funktioniert alles.

### 5. Klasse car erstellen
Siehe Link in der Übersicht.
Wir beschäftigten uns mit Getter und Setter Methoden sowie mit der Erstellung des Konstruktors.

