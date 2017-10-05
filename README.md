# m13-5ahme-fivu

## Dokumentation der Einheiten

### Einheit 1: 14.09.2017
* Entwicklung der Programmiersprachen(Lockkarte, Assembler, Hochsprachen, Objektorientierte Programmierung, Multiplatformfähiges Programmieren Java).
* Grundlagen der Webprogrammierung (Client/Server)
* Installation Node.js und Visual Studio Code

### Einheit 2: 21.09.2017
* Grundlagen von Javascript
  * Wie werden Programme erstellt, gestartet?
  * Globale, lokale Installation
  * Besprechung der unterschiedlichen Datentypen

* Erstellen eines einfachen Programmes
  * Konsolen ausgaben erstellen, spielereien mit Datentypen
  
* Link zum Programm: [Programm](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue01/main.js)


### Einheit 3: 28.09.2017
* Wiederholung der letzten Einheit (Programm erstellen)
* Erstmaliges programmieren mit typescript
* Aus typescript Programm ein javascript Programm erstellen (mit tsc -t es6 maint.ts)
* Quellcode typescript: [typescript](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue02/main.ts)
* Quellcode javascript: [javascript](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue02/main.js)
* Template von LMS geklont und in ein neues Programm eingefügt

### Einheit 4: 04.10.2017

* template von LMS fertig in neues Programm eingefügt
* .vscode Ordner erstellt
  * setting.json einfügen (was wird sichtbar gemacht und was nicht)
  * tasks.json einfügen ()
  * launch.json einfügen (Debuggereinstellungen)
 
* in ue03 Ordner eingefügt:
  * tslint.json (für Syntax Überprüfung)
  * tsconfig.json (Configurationseinstellungen: zb: target, include)
  * gulpfile.js (für Übersetzung des Quellcodes)

* main.js.map wird verwendet, um aufgetretene Fehler auch in typescript anzuzeigen
* Programmierung
  * Car classe erstellt
  * Quellcode ue03: [typescript](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue03/src/main.ts)
  
### Einheit 5: 05.10.2017

* Es gibt in Typescript eigene setter und getter Methoden
  * Achtung! Es kann hierbei zu Namenskollosionen kommen, daher immer Variablennamen mit einem _ beginnen.
  * zB: private _model: string;
 
* Lesen und Schreiben von Dateien
  * Dazu muss man import **as fs from 'fs';** importieren.
  * In eine Datei schreiben: **fs.writeFileSync('C:\\Users\\User\\Documents\\Schule\\5AHME\\FIVU\\ue03\\autos.json', JSON.stringify(autos));**
  * Aus eine Datei lesen: **const buffer = fs.readFileSync('C:\\Users\\User\\Documents\\Schule\\5AHME\\FIVU\\ue03\\autos.json');**
  * Jedoch ist dies nicht die beste Art und Weise um Dateien zu lesen, denn es können Sachen in die Datei geschrieben werden, die nicht nicht hinein geschrieben werden dürfen. -> Dies geht, da dies kein Object Car ist!

* Tastenkombination hinzufügen
  * Datei -> Einstellungen -> Tastenkombinationen -> keybindings.json -> Quellcode von FIVU template kopieren und dort einfügen. 
  * strg + alt + b = build

* Neue Übung erstellen (ue04)
  * alte Übung kopieren (ue03) und in ue04 einfügen
  * main.ts löschen und dann eine neue Classe erstellen (Car.ts).
  * Quellcode: [ue04](https://github.com/HTLMechatronics/m13-5ahme-fivu/blob/finmam13/projects/ue04/src/car.ts)
