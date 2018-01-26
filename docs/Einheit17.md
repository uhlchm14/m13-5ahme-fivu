**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 26.01.2018
   
## Übersicht: 

1. Schlüssel
2. Zertifikatskette und Zertifikate



### 1. Schlüssel
-   Zuerst wird symmetrischer Schlüssel erzeugt.
-   verschlüsseln mit asymmetrischen (öffentlichen) schlüssel.
-   symmetrischen Schlüssel versenden.
-   verschlüsselten symmetrischen Schlüssel mit privaten Schlüssel entschlüsseln.
-   Daten mit symmetrischen Schlüssel(verfahren) austauschen.

-   X.509 Zertifikat:
      - Immer darauf achten, dass die Liste der Aussteller aktuell ist. Ansosnten kann der Schlüssel gefälscht werden und man hat          keine Möglichkeit, sich davor zu schützen.
-    Wollen wir einen https-Server erstellen, müssen wir dem Client ein Zertifikat zur Verfügung stellen! Dieses müssen wir machen, mit **OpenSSL!**

### 2. Zertifikatskette und Zertifikate
-   Es besteht eine Reihe von Zertifikaten, die von anderen Zertifikaten abhängig sind.
-   Am Ende dieser Kette befindet sich ein selbstsigniertes Zertifikat.
-   Wir erstellen so ein selbstsigniertes Zertifikat.

-   Schlüsselpaar erzeugen! Befehl: openssl genrsa -out ca.pem (_Im Ordner, in welchem man den Schlüssel speichern will_)
-   In der Datei ca.pem befindet sich dann der private Schlüssel
-   Nun öffentlichen Schlüssel erstellen! Befehl: openssl rsa -in ca.pem -pubout -out ca_pub.pem
-   Damit ca wirklich Zertifikat signieren kann: Befehl: openssl req -new -subj '/CN=CA ORNSTM13' -key ca.pem -out ca.csr
      - in der Datei die erstellt wird steht dann der öffentliche Schlüssel
      - Nun hat der, der das Zertifikat erzeugen soll, alle Daten!

-   ** Echtes Zertifikat erzeugen, welches ein Server verwenden könnte: **
      - 1) Konfigurationsdatei kopieren: cp /etc/ssl/openssl.cnf ./
      - policy_match auf policy_anything ändern (akzeptiert dann sogut wie alles im zertifikat)
      - 2) Als Zertifikatsausgangsstelle (welche wir jetzt sind) ist eine Datenbank zu erzeugen:
      - Ordner erzeugen, mit vorgegebenen Namen (demoCA/newcerts)
      - 3) danach Behfel (zum Datei anlegen): touch demoCA/index.txt  -> Der Server ist jetzt fertig.
      - 4) Befehl zum Erzeugen von Zertifikat: openssl ca -config openssl.cnf -create_serial -batch -extensions v3_ca -out ca.crt       -keyfile ca.pem -selfsign -infiles ca.csr
      - 5) ca.crt = Wurzel des Zertifikates

-  ** Server erstellen, nach dem gleichen Schema**
      - 1) openssl genrsa -out server-ornstm13.pem
      - 2) openssl rsa -in server-ornstm13.pem -pubout -out server-ornstm13_pub.pem
      - 3) openssl req -new -subj '/CN=sever-ornstm13' -key server-ornstm13.pem -out server-ornstm13.csr
      - 4) openssl ca -config openssl.cnf -batch -cert ca.crt -keyfile ca.pem -in server-ornstm13.csr -out server-ornstm13.crt

- Wenn man Terminal-History durchsehen möchte: Befehl: less ~/.bash_history
      
      
      
