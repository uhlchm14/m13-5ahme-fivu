**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 25.01.2018
   
## Übersicht: 

1. Angular
2. Fortsetzen beim Programm
3. Progress-Bar
4. Vorbereitung https Server


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

### 4. Vorbereitung https Server
-    das "S" bei https steht für secure, ist eine sichere Übertragung
-    Welchen Namen hat das System, welches für die Verschlüsselung verwendet wird? - TLS - Transport Layer Security
-    Man braucht für Verschlüsselung: ein Verfahren, bei TLS = hybrides Verfahren (Mischung aus symmetrischen und asymmetrischen Verfahren)
-    symmetrisches Verfahren: man braucht nur einen Schlüssel zum Verschlüsseln und Entschlüsseln, ist sehr effizient.
-    Schlüsselaustauschproblem: Austauschproblem, daher in Kombination ein zweites Verfahren - Asymmetrisches
-    Asymmetrisches Verfahren: Besitzt Schlüsselpaar, öffentlichen und privaten Schlüssel, kein Austauschproblem mehr- mit dem öffentlichen Schlüssel verschlüsseln, mit dem privaten Schlüssel entschlüsseln
-    Asymmetrisches Verfahren Nachteil: sehr langsam, vor allem bei großen Datenmengen
-    Vorteil TLS: Kombination aus beiden Verfahren macht es wertvoll
-    Das ganze läuft über X.509 Zertifikat= öffentliche Schlüssel des Inhabers (Subject).
      - Muss signiert sein, von einem vertrauenswürdigen Aussteller (Issuer).
