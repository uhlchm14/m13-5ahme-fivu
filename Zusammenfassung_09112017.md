# 6.Einheit 09.11.2017 (Donnerstag)

**Verfasser:** Dominik Pichler  
**Lehrer:** Steiner   
**Datum der Einheit:** 09.11.2017
   
## Übersicht: 

1. Wiederholung
2. Dynamisches HTML im RequestHandler  
3. Pug  

### 1. Wiederholung
* Heutiges Ziel: Dynamische HTML-Seiten erstellen
* Wiederholung der letzten Einheit
* Die heutzutage meist genutzte Sprache für serverseitige Programmierung ist PHP
* Webserver besteht 3 Teilen 
  + HTML --> Gibt die Formatierung der Seite und somit die Struktur der Informationen auf der Seite vor.
  + CSS --> Stylesheet-Sprache für das Design/Aussehen der Seite
  + Javascript --> Programmiersprache zum Manipulieren des DOMs und damit für dynamische Veränderung am Client  

* CSS-Files bestehen aus Selektoren
  * Bsp: 
```css
p {
    background-color: green;
    border: solid 3px red;
  }
```
Jeder HTML Absatz hat dadurch einen grünen Hintergrund, sowie einen roten Rahmen.

Verwendung von Selektoren: 
* Style für alle HTML Tags (siehe Beispiel darüber)
* Style für Tags mit einer gewissen Klasse
```html
  <p class=”info”>Text</p>
```
```css
.gelbeAbsaetze {
   background-color: yellow;
}
```
* Style für Tags mit einer gewissen ID
```html
  <p id=”absatz2”>Text</p>
```
```css
#absatz2 {
   border: solid 3px black;
   color: #f1748b; /* Schriftfarbe */ 
}
```

Mit diesem Wissen erstellen wir ein kleines [HTML-File] mit dazugehörigen [Styles] in der [UE05].

### 2. Dynamisches HTML im RequestHandler

```typescript
server.get('/test', (req, res, next) => {});
```
* Das Server verarbeitet den get-Request vom Client, in diesem Fall ist das _GET /test_.
* Die Parameter für den _RequestHandler_ können mit folgenden Schritten ermittelt werden.
  1. F12 auf die get Methode
  2. mit STRG + F den RequestHandler suchen.
  3. die jeweiligen Parameter entnehmen, in diesem Falle: req, res, next  

* Wenn der Benutzer am Ende der URL /test eingibt, bekommt er das HTML des jeweiligen RequestHandlers zurück.
* Express arbeitet in Schichten nach der Reihenfolge der Definition im Quelltext.
* Arrow Operator (=>), bindet die Methode ans Objekt.
* Counter eingebaut, der beim Neuladen der Seite den Counter um 1 erhöht.  

Vollständiger Request Handler:

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

[Pug]:
* Renderengine für HTML
* erzeugt aus einfacheren HTML Ausdrücken HTML-Tags
* man kann somit HTML leichter und übersichtlicher schreiben

Express Server die _Renderengine Pug_ bekannt geben: 

```typescript
server.set('view engine', 'pug');
```

* Wenn der Client eine Anfrage an den Server schickt, rendert dieser die Pug Datei in HTML und schickt sie an den Client zurück.
* Im unserem Fall passiert dies, wenn man /pug eingibt, wodurch der entsprechende Request Handler aufgerufen wird.

```typescript
server.get('/pug', (req, res, next) => {  
    res.render('test.pug');
});
```

* Haben den Ordner [views] erstellt und in diesem die Datei [test.pug] angelegt.
* Diese Datei wird gerendert

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


[HTML-File]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/picdom12/projekts/ue05/public/index.html
[Styles]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/picdom12/projekts/ue05/public/myStyles.css
[UE05]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue05
[Pug]: https://www.npmjs.com/package/pug 
[views]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue05/views 
[test.pug]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/picdom12/projekts/ue05/views/test.pug

