**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 12.03.2018
   
## Übersicht: 
1. Raspberry Pi

### 1. Raspberry Pi
-   Wenig Fehler, sehr gut lauffähig, embetted System
      - Ein kleines Problem: Flash
      
- Wir müssen als erstes die ZIP Datei, welche vom Server gedownloaded wurde, installieren.
- 1: "Anmounten" --> genereller Befehl hierzu: umount /dev/mmcblk0p1 (Benamung ist von Pc zu Pc verschieden!)
- 2: Entzipen: unzip -p 2018-03-13-raspbian-stretch-little.zip | dd bs=4M of=/dev/mmcblk0 (im Ordner wo gespeichert)
- 3: Danach SD-Karte entfernen
- 4: SD-Karte wieder einfügen, dann Befehl: touch /media/stefan/boot/ssh
- 5: Danach: umount /dev/sdb1 und umount /dev/sdb2
- 6: Jetzt wird die SD-Karte in den Raspberry Pi eingelegt und man kann sich mit dem Gerät verbinden.
- 7: Der Befehl zum Verbinden im Terminal lautet: ssh pi@10.200.114.207
- 8: Nach dem aktualisieren des Raspberrys und dem Installieren einiger packages muss das Git Repository geklont werden. Dort werden dann noch einige Kleinigkeiten verändert.
- 9: Zum Schluss wird Angular installiert.
