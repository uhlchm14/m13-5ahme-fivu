# 6.Einheit 09.11.2017 (Donnerstag)

**Verfasser:** Dominik Pichler  
**Lehrer:** Steiner   
**Datum der Einheit:** 09.11.2017
   
## Übersicht: 

1. Wiederholung und Einführung  
2. Dynamische HTML im RequestHandler  
3. Pug  

### 1. Wiederholung und Einführung 

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

### 2. Dynamische HTML im RequestHandler

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
### 3. Pug

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
