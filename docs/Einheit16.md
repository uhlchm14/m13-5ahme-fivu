**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 25.01.2018
   
## Übersicht: 

1. Angular
2. Fortsetzen beim Programm
3. Progress-Bar


### 1. Angular
-   Service: Stück Code, globale Klasse, man kann darauf zugreifen
-   Angular besteht aus vielen Modulen, die man zusammenbauen kann
-   Services werden erzeugt mit: **@Injectable()**
-   Promise: Schlüsselwort= async, darf beim Konstruktor nicht verwendet werden (zeitliche Verzögerung)
-   Promise braucht zwei call-back Methoden im Konstruktor (werden zur Verfügung gestellt)
      - resolve und reject
-   Das Domain Object Model (DOM) wird automatisch in der Tabelle am Bildschirm angezeigt, man braucht sich um nichts mehr kümmern.

### 2. Fortsetzen beim Programm
-   Da ich in der letzten Einheit verhindert war, den Unterricht zu besuchen, aufgrund meiner Krankheit, musste ich das Programm **ue09** von einem Mitschüler kopieren. In diesem Programm arbeiten wir weiter, verändern einige wenige Kleinigkeiten.
Ich habe aber leider nicht den kompletten Überblick über das neue Programm und kann daher nicht genau beschreiben, was zu welchen Zwecken diente.
-   Veränderungen von: user.service.ts, app-user-table.component.ts, app-user-table.component.html

### 3. Progress-Bar
-    ng Bootstrap Progressbar wird ausgewählt, Link: https://v4-alpha.getbootstrap.com/components/progress/
-    Progressbar auswählen, HTML-Code kopieren, im Programm (app-user-table.component.html) einfügen.
-    gb-progressbar muss erst deklariert werden. In app.module.ts
      - dazu: _import {NgbModule} from '@ng-bootstrap/ng-bootstrap';_
      - in imports: _NgbModule.forRoot()_
-    _[animated]="true">_ in der html-Datei, damit die Progress-bar animiert wird.