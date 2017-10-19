**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 19.10.2017
   
## Übersicht: 

1. Grundlegendes


### 1. Grundlegendes

-   HTML = Codierungsform, **KEINE** Sprache!
-   TCP/IP = Datenstrom kommt sicher (ohne Lücken) an
-   Innerhalb eines Subnetzes wird **WLAN** verwendet / außerhalb werden die Daten via TCP/IP übertragen
-   TLS: Transport Layer Security (=https) --> für **verschlüsselte Datenübertragung**
-   Wenn Client vom Server Daten haben möchte, sendet dieser ein Kommando, namens: **HTTP GET**
     - Web-Server sendet daraufhin Daten zurück, wenn alles hinhaut
-   **Web-Server-Programme** sind z.B Apache oder Nginx. Man kann auch Java verwenden (Java EE --> Enterprise Edition)
-   Wir verwenden unter _Node.js_ den Server **express**
-   **npm install --save express @types/express** --> Packages installieren
