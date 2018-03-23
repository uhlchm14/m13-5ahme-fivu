### 21. Einheit
**Datum:** 22.03.2018  
**Dazugehörige Übung(en):**  [ue11](projects/ue11_angularServer)  
**Inhalt**:  

  1. Raspberry in Betrieb nehmen
    - Image vom Server herunterladen
    - Image am Raspberry installieren
      - wenn bereits ein Raspberry-Image installiert ist, müssen die Partitionen entfernt werden
        - `umount <Partionsname>`
      - Datei entzipen und auf der SD-Karte speichern: `unzip -p <Name der Zip-Datei> | dd bs=4M of=/dev/mmcblk0`
        - `sync` ... überprüfen ob alles auf die SD-Karte kopiert wurde
      - Datei anlegen damit mit SSH gestartet werden kann
        - `touch /media/<name>/boot/ssh`
  2. Arbeiten mit dem Raspberry
    - Verbinden mit: `ssh pi@10.200.114.206`
    - Updatelisten erweitern mit: `apt update`
    - Nachschauen was upgradebar ist: `apt list --upgradeable`
    - Upgrade:`apt upgrade`
    - CPU-Info: `cat /proc/cpuinfo`
      - mit der Revision Nummer ist herrausfindbar, welches Raspberry Model verwendet wird
    - Git installieren
      - `apt install git`
    - Nodejs installieren
      - `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash`
      - `apt install nodejs`
    - npm installieren
      - `npm install -g npm`
    - Repository clonen
      - `git clone "<Link>"`
    - `ll` Kommando aktivieren
      - im root: `nano .bashrc`
        - Das `#` vor `alias ll='ls $LS_OPTIONS -ls'` weg löschen und zu `alias ll='ls $LS_OPTIONS -la'` ändern
    - npm installin ngxClient
      - mit cd in geclonten Ordner wechseln
      - `git checkout <branchname>`
      - in ngxClient wechseln und `npm install` ausführen
      - in server wechseln und `npm install` ausführen
    - Auf die Pins des Raspberrys zugreifen über node
      - node API wird benötigt
    - Dist Ordner von ngxClient am PC nach Raspberry tmp kopieren
      - `rsync -aP dist pi@10.200.114.206:/tmp`
    - Dist von tmp nach root ngxClient (aktueller Pfad) kopieren
      - `mv /tmp/dist ./`
      - `chown -R root:root dist` ... Rechte ändern
    - Im server eine `config.json` anlegen
      - in dieser ist der Port definiert
    - Server mit `npm start` im server Ordner starten
    - screen Tool instalieren
      - `apt install screen`
      - Screen ist eien virtuelle Konsole. Konsole kann geschlossen werden und Server läuft weiter. 
      - `screen` ... starten
      - `screen -s` ... ausloggen
      - `screen -r` ... zurück einloggen
