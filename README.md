# FIVU
## Klasse: 5AHME
## Schuljahr: 2017/18
## Lehrer: Prof. Steiner
## Verfasser: Florian Harrer


### Kurze Protokolle zu den Einheiten

### 1. Einheit  
**Datum:** 14.09.2017  
**Dazugehörige Übung(en):** -  
**Inhalt:**  
1. Besprechung darüber welcher Stoff in diesem Jahr gemacht wird und wie die Note zustande kommt (wie die Tests geregelt sind)
2. Wiederholung der Geschichte der Programmiersprachen und genaueres betrachten der Möglichkeiten zur serverseitigen Programmierung
3. Installation von Node.js und Visual Studio Code

### 2. Einheit  
**Datum:** 21.09.2017  
**Dazugehörige Übung(en):** ![ue01](projects/ue01)  
**Inhalt:**  
1. Einstieg in die Programmiersprache Javascript
2. Anlegen eines neuen Projektes mit Node.js
3. Bekannt machen mit dem Node Package Manager 
4. Lernen welche Datentypen es in Javascript gibt und wie man diese deklariert

### 3. Einheit
**Datum:** 28.09.2017  
**Nicht anwesend - Stellung**

### 4. Einheit
**Datum:** 04.10.2017  
**Dazugehörige Übung(en):** ![ue03](projects/ue03)  
**Inhalt:**  
Besprechen der letzten Dateien des Templates für ue03
1. Einstellungen in tsconfig.json fpr das Programm treffen
2. In der settings.json werden Projekteinstellungen für Visual Studio Code getroffen (Ausblenden von Datein im Projekt)
3. Im gulpfile.js werden Einstellungen zur Programmübersetzung getroffen
4. In der tasks.json können Tasks seblst definiert werden (celan, build, cleanAndBuild, ...) 
5. In der launch.json können Konfigurationen für den Debugger gewählt/erstellt werden

### 5. Einheit
**Datum:** 05.10.2017  
**Dazugehörige Übung(en):** ![ue03](projects/ue03)  ![ue04](projects/ue04)  
**Inhalt:**  
1. In dieser Einheit wurden neue Methoden für Javascript gelernt
- import * as fs from 'fs'; fs ... Filesystem, zum Lesen und schreiben von Dateien
 In Datei schreiben: fs.writeFileSync(, ); 
 Aus Datei lesen: fs.readFileSync();
- Nach dem Einlesen befinden sich die Daten in einem Buffer. Um sie verwenden zu können muss man diese mit toString() in einem String umwandeln. Nach dem Einlesen ist auch eine Kompatilitätsprüfung der Daten durchzuführen.
2. String als .json speichern
- Speichern: JSON.stringify();
- Einlesen: JSON.parse();
3. ue04 erstellen
- Dafür wurde ue03 kopiert und es wurden die .ts Dateien gelöscht
- Interface: legt fest welche Daten übergeben werden müsssen/können

### 6. Einheit
**Datum:** 12.10.2017

### 7. Einheit
**Datum:** 19.10.2017

### 8. Einheit
**Datum:** 09.11.2017

### 9. Einheit
**Datum:** 16.11.2017  
**Dazugehörige Übung(en):** ![ue05](projects/ue05) ![ue06](projects/ue06)  
**Inhalt**:   
1. Dynamische Website  
- Bei einer dynamischen Website kann der Inhalt und das Aussehen vom Server verändert werden.  
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

2. Bootstrap  
In dieser Einheit haben wir mit der Einarbeitung in die [Bootstrap Version 4](http://getbootstrap.com/docs/4.0/getting-started/download/). Bootstrap ist responsive. Das heißt das sich das Design automatisch an verschieden Große Geräte (PC, Smartphone, ...) anpasst. 
Wenn sich zwei Elmente überlappen kann mit dem Z-Index (Z-Achse) festgelegt werden welches Element sichtbar sein soll. 
Von der HTML Seite wird der DOM (Domain Object Model) generiert. Dieser ist auch veränderbar.

Besprochene Komponenten:
  [Badge](http://getbootstrap.com/docs/4.0/components/badge/): Darstellung von Informationen
  [Breadcrumb](http://getbootstrap.com/docs/4.0/components/breadcrumb/): Zum Hinterlegen eines Links
  [Card](http://getbootstrap.com/docs/4.0/components/card/): Zum erstellen eines Bereichs, zum Beispiel Visitenkarten
  [Carousel](http://getbootstrap.com/docs/4.0/components/carousel/): Bilder zum Weiterschalten
  [Collapse](http://getbootstrap.com/docs/4.0/components/collapse/): Unterpunkte unter denen sich Text öffnet
  [Dropdowns](http://getbootstrap.com/docs/4.0/components/dropdowns/): Menü welches sich nach unten öffnet
  [Forms](http://getbootstrap.com/docs/4.0/components/forms/): fertige Eingabedialoge
  [Form Group](): 
  [List Group](http://getbootstrap.com/docs/4.0/components/list-group/): Designs für Listen
  [Modal](http://getbootstrap.com/docs/4.0/components/modal/): Dialogfenster 
  [Navs](http://getbootstrap.com/docs/4.0/components/navs/): Navigationsleiste 
  [Pageination](http://getbootstrap.com/docs/4.0/components/pagination/): mehrere Seiten, weiterschaltbar
  [Popovers](http://getbootstrap.com/docs/4.0/components/popovers/): Zeigt etwas an wenn man mit der Maus darüber fährt
  [Progress Bars](http://getbootstrap.com/docs/4.0/components/progress/): Ladeanzeige
  [Scrollspy](http://getbootstrap.com/docs/4.0/components/scrollspy/): Wechselt beim Scrollen zwischen den Linkelementen 
  [Tooltips](http://getbootstrap.com/docs/4.0/components/tooltips/): Zeigt eine Information zu einem Element an
  
Anlegen des Projekts [ue06](projects/ue06).
Anschließend muss im Projekt Bootstrap mit folgendem Befehl installiert werden: npm install --save bootstrap@4.0.0-beta.2 .

Auskommentieren in pug.
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

