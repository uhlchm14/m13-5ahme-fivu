**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 19.10.2017
   
## Übersicht: 

1. Grundlegendes
2. Server programmieren - Start


### 1. Grundlegendes

-   HTML = Codierungsform, **KEINE** Sprache!
-   TCP/IP = Datenstrom kommt sicher (ohne Lücken) an
-   Innerhalb eines Subnetzes wird **WLAN** verwendet / außerhalb werden die Daten via TCP/IP übertragen
-   TLS: Transport Layer Security (=https) --> für **verschlüsselte Datenübertragung**
-   Wenn Client vom Server Daten haben möchte, sendet dieser ein Kommando, namens: **HTTP GET**
     - Web-Server sendet daraufhin Daten zurück, wenn alles hinhaut
-   **Web-Server-Programme** sind z.B Apache oder Nginx. Man kann auch Java verwenden (Java EE --> Enterprise Edition)

### Server programmieren - Start
-   Wir verwenden unter _Node.js_ den Server **express**
-   **npm install --save express @types/express** --> Packages installieren
-   **import * ** heißt, ich impotiere alles, dieses Modul zur Verfügung stellt
-   Es gibt bis jetzt 5 Varianten von HTML - ab HTML 5 wurde "alles" vereinfacht, Kennzeichen für HTML 5 = **<!DOCTYPE html>**
-   Wir kopieren aus Wikipedia den Standardaufbau des Servers
     - Danach erreichen wir ihn mit: "http://localhost:4711/index.html"
-   Wenn man sich auf dieser Seite befindet und **F12** drückt, denn öffnet sich eine Debugger-Konsole
