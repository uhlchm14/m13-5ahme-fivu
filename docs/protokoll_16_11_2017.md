### 7. Einheit
**Datum:** 16.11.2017  
**Dazugehörige Übung(en):** ![ue05](projects/ue05) ![ue06](projects/ue06)  
**Inhalt**:   
#### Dynamische Website  
  Bei einer dynamischen Website kann der Inhalt und das Aussehen vom Server verändert werden.  
  Beispiel: Verändern einer angezeigten Varibale  
  In der Test.pug
```typescript
      p Counter #{counterValue}
```
  In der main.ts
```typescript
     server.get('/pug', (req, res, next) => {
       res.render('test.pug', {counterValue: counter++});
     });
```
  Das Objekt der Varialbe wird als Parameter mitübergeben. 

#### Bootstrap  
In dieser Einheit haben wir mit der Einarbeitung in die [Bootstrap Version 4](http://getbootstrap.com/docs/4.0/getting-started/download/). Bootstrap ist responsive. Das heißt das sich das Design automatisch an verschieden Große Geräte (PC, Smartphone, ...) anpasst.  
Wenn sich zwei Elmente überlappen kann mit dem Z-Index (Z-Achse) festgelegt werden welches Element sichtbar sein soll. 
Von der HTML Seite wird der DOM (Domain Object Model) generiert. Dieser ist auch veränderbar.

Besprochene Komponenten:  
  -[Badge](http://getbootstrap.com/docs/4.0/components/badge/): Darstellung von Informationen  
  -[Breadcrumb](http://getbootstrap.com/docs/4.0/components/breadcrumb/): Zum Hinterlegen eines Links  
  -[Card](http://getbootstrap.com/docs/4.0/components/card/): Zum erstellen eines Bereichs, zum Beispiel Visitenkarten  
  -[Carousel](http://getbootstrap.com/docs/4.0/components/carousel/): Bilder zum Weiterschalten  
  -[Collapse](http://getbootstrap.com/docs/4.0/components/collapse/): Unterpunkte unter denen sich Text öffnet  
  -[Dropdowns](http://getbootstrap.com/docs/4.0/components/dropdowns/): Menü welches sich nach unten öffnet  
  -[Forms](http://getbootstrap.com/docs/4.0/components/forms/): fertige Eingabedialoge   
  -[List Group](http://getbootstrap.com/docs/4.0/components/list-group/): Designs für Listen  
  -[Modal](http://getbootstrap.com/docs/4.0/components/modal/): Dialogfenster   
  -[Navs](http://getbootstrap.com/docs/4.0/components/navs/): Navigationsleiste   
  -[Pageination](http://getbootstrap.com/docs/4.0/components/pagination/): mehrere Seiten, weiterschaltbar  
  -[Popovers](http://getbootstrap.com/docs/4.0/components/popovers/): Zeigt etwas an wenn man mit der Maus darüber fährt  
  -[Progress Bars](http://getbootstrap.com/docs/4.0/components/progress/): Ladeanzeige  
  -[Scrollspy](http://getbootstrap.com/docs/4.0/components/scrollspy/): Wechselt beim Scrollen zwischen den Linkelementen   
  -[Tooltips](http://getbootstrap.com/docs/4.0/components/tooltips/): Zeigt eine Information zu einem Element an  

Anlegen des Projekts [ue06](projects/ue06).
Anschließend muss im Projekt Bootstrap mit folgendem Befehl installiert werden: npm install --save bootstrap@4.0.0-beta.2 .

Auskommentieren in pug:  
// ... Element wird mitgerendert  
//- ... Element wird nicht mitgerendert  

Strukturierung des Seitenquelltextes:
```Typescript
const pugRenderringEngine = server.set('view engine', 'pug');
pugRenderringEngine.locals.pretty = true
```

Link zum Festlegen des Seitendesigns verwenden: 
```Typescript
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
```

In ein Div-Element können Komponenten eingefügt werden. Ein Container wird benötigt um der Seite einer Struktur zugeben. Es können einer Seite mehrere Strukturierungen zugewiesen werden.
```Typescript
<div class="container">
</div>
```
