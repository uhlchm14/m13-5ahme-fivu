**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 08.02.2018
   
## Übersicht: 
1. Verschlüsselung von https
2. Server bauen

### 1. Verschlüsselung von https
-    Erfolgt mit TLS_ECDME_RSA_AES_128 GCM SMA256
-    **TLS:** Transport Layer Security, hybrides Verfahren, Mischung aus symmetrisches (z.B AES) und asymmetrisches (z.B RSA) verfahren
-    **ECDME:** Schlüsselaustauschverfahren, für asymmetrische
-    **RSA:** Nicht ganz sicher, auch für asymmetrisches Schlüsselaustauschverfahren
-    **AES_128:** Symmetrische Verschlüsselung nach dem ASE-Verfahren mit 128 Bits, 128 Bits geht so- nicht wirklich starke Verschlüsselung
-    **GCM**: Betriebsmodus bei symmetrischer Verschlüsselung, Verwürfelung von Datenblöcke
-    **SMA256**: Hash-Verfahren, zum Überprüfen der Signaturen, usw....
-    Stärkere Verschlüsselung wäre z.B mit AES_256! 

### 2. Server bauen
-    Server der Serverdienst und Angular zur Verfügung stellen kann
-    Könnte 2 Projekte machen und diese miteinander verknüpfen
-    Wir machen 1 Projekt mit Unterverzeichnisse --> ue11 mit Server und ngxClient
       - Nachteil: 2 x Node Modules
-    Verändern von package.json, launch.json, tasks.json
