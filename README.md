# FIVU 5.AHME

## Einheit 1: 14.9.17
	Theorie: 
	- Lehrplan
	- Entwicklung der Programmiersprachen
	- Grundlagen und Prinzip der Web-Programmierung

## Einheit 2: 21.9.17
* Grundlagen Javascript.  
  UE01 mit einigen JS-Funktionen erstellt und ausgeführt.
* Arbeiten mit den *.json Konfigdateien in der IDE VS Code.  
--> Abwesend aufgrund Stellung!

## Einheit 3: 28.9.17
* Wiederholen der letzten Einheit.
* Arbeiten mit der package.json und Einführung in die Programmiersprache Typescript.
* UE02 mit den ersten Typescript Funktionen erstellt und ausgeführt.  
  UE02: [Übung 2]
* Typescript Template von LMS geklont und als UE03 bei uns angelegt.  
  UE03: [Übung 3]
  
## Einheit 4: 4.10.17 (Supplierung)
Anlegen mehrerer Files:
* [tslint.json] für Syntaxüberprüfung in Typescript und [tsconfig.json] für die Transpilierung
* [.vscode Ordner]: [settings.json] --> Einstellungen für das lokale Projekt
* Tool Gulp: [gulpfile.js] und [tasks.json] (in .vscode) für die Übersetzung des Quellcodes
* [launch.json] in .vscode für Debug Launcher Einstellungen
* \*.js.map Files: Verantwortlich für das Anzeigen von Fehlern und in welcher Zeile er im Typescriptcode aufgetreten ist - Fehlermapping
* [main.ts][main.ts - UE03]: Car Klasse erstellt.

## Einheit 5: 5.10.17
* Anlegen und ausgeben eines Arrays in der main.ts.
* Array in eine *.json Datei schreiben.
* Definieren eigener Tastenkürzel im globalen .vscode Verzeichnis in der keybindings.json.
* Array aus einer *.json Datei einlesen.
* Erstellen von ue04 mithilfe des 'rsync' Befehls.  
  UE04: [Übung 4]
* Anlegen der Klasse [car.ts] mit Interface zur Überprüfung der Datenattribute die in den Konstruktor übergeben werden

## Einheit 6: 12.10.17
* Besprechung Probleme, die beim Einlesen auftreten können
* Wiederholung, was ist ein Interface und wie verwenden wir es --> Prüfung der eingelesenen Daten
* Fertigstellung der Überprüfung des eingelesenen Car Arrays im Konstruktor
* JSON File hat die '_'s vor den Attributen --> anlegen der `toObject()` Methode, die ein eigenes, primitives, Objekt zurückliefert
* Hinzufügen des optionalen Parameters Farbe im Interface ICar


## Einheit 7: 19.10.17
#### Erstellung Webserver
* Theorie Webserver (Client, Netzwerk, Web-Server, Subnetze, HTTP, HTML)
* Begriffe der Datenübertragung (TCP/IP, Ethernet, WLAN, TLS)
* Arten von Server Erstellung (Apache, nginx, Java EE - Glassfish und Wildfly, __Node.js__)
* Erstellung ue05 aus dem LMS-Template  
  UE05: [Übung 5]
* Installation node.js express und @types/express (für Typescirpt Definitionen) Modul
* Schreiben des Servers in der main.ts und anlegen der index.html
* Arbeiten mit Chromium Debugger
* Verschönern des DOM mit CSS
* HTTP Statustags (1xx --> Information, 2xx --> Erfolg, 3xx --> Umleitung, 4xx --> Fehler, 5xx --> interner Serverfehler)

## Einheit 8: 9.11.17
* Ziel für heute: HTML dynamisch erzeugen
* Theorie: Wiederholung HTML, CSS und JS --> Erklärung was ist was
* Wiederholung der letzten Einheit - [CSS-File], [HTML-File] und [main.ts][main.ts - UE05] von UE05
* CSS Files bestehen aus __Selectors__
* Anfragen vom Client am Server auswerten
* RequestHandler & Arrow Operator (=>)
* Verbreitetste Server Sprache: PHP
* Rendering Engine zur HTML Erzeugung: Pug (früher: Jade)

## Einheit 9: 16.11.17
Abwesend

## Einheit 10: 23.11.17
* Bootstrap Forms
* Daten aus der Form bekommen mit body-parser Modul
* Probleme aufgrund falschen Headers
* Verwendung von 'urlencoded' um Body als Objekt zu bekommen
* Verwendung von Cookies mit npm Modul Cookie

	
[Übung 2]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/kormam13/projects/ue02
[Übung 3]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/kormam13/projects/ue03
[tslint.json]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue03/tslint.json
[tsconfig.json]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue03/tsconfig.json
[.vscode Ordner]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/kormam13/projects/ue03/.vscode
[settings.json]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue03/.vscode/settings.json
[gulpfile.js]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue03/gulpfile.js
[tasks.json]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue03/.vscode/tasks.json
[launch.json]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue03/.vscode/launch.json
[main.ts - UE03]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue03/src/main.ts
[Übung 4]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/kormam13/projects/ue04
[car.ts]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/kormam13/projects/ue04/src/car.ts
[Übung 5]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/kormam13/projects/ue05
[CSS-File]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue05/public/myStyle.css
[HTML-File]: https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/kormam13/projects/ue05/public/index.html
[main.ts - UE05]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/kormam13/projects/ue05/src
