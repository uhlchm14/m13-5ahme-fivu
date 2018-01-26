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

-   Echtes Zertifikat erzeugen, welches ein Server verwenden könnte:

