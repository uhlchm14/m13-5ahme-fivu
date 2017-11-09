**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 09.11.2017
   
## Übersicht: 

1. To do
2. In General
3. Program change

### 1. To do
- Wir wollen keine Zustandslosigkeit haben, Webseite hängt nun vom Zustand des Serversystems ab
- Seite besteht aus **_3 Teilen:_**
    - **HTML:** Zum Erzeugen der Struktur / Inhalt (Codierung, wie ich die Information in die Datei hineinbringe)
    - **CSS:** Aussehen / Design der Seite 
    - **JavaScript:** Programmatisch Programme am Client laufen lassen / **dynamische Veränderungen am Client**
    - Programm soll in diese 3 Teile **aufgetrennt** werden --> Jeder macht das, was er am besten kann!!!

### 2. In General
- **Klasse** in JSS = kann Gruppe zuweisen (mit **.** beginnend)
- **ID** in JSS = kann man nur einem einzigen Element eindeutig übergeben (mit **#** beginnend)
- **Selektoren** = z.B p, #absatz2, .gelbeAbsaetze,......
- **Error Operator:** Die Funktion, die wir schreiben, wird mit dem aktuellen ?Objekt? verbunden
- **F12:** Öffnet die Definition von vorhandenen Funktionen

### 3. Program change
- Wir müssen beachten, dass Express in **Schichten** arbeitet!
- Nun kann man unseren Server mit dem folgenden Link erreichen:
   - http://localhost:4711/test 
   - Es wurde ein Counter angelegt, der bei jedem Seitenaufruf um +1 hochgezählt wird.

- 1.Schicht:

```javascript
server.get('/test', (req, res, next) => {
    // console.log(req);

    let html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
    html += '<head>'
      ..........
    html += '<h2>' + counter++ + '.Aufruf </h2>'
      .............
    html += '</body>'
    html += '</html>'

    res.send(html);

});
```
- 2.Schicht:

```javascript
// Verzeichnis public für statische HTML-Seiten definieren
server.use(express.static('public')); // es gibt statische HTML-Seiten im Verzeichnis Public
server.listen(4711); // 4711 = Port
console.log('Server ist gestartet');
```



