# FIVU 5.AHME

## 1.Einheit 14.09.2017 (Donnerstag)
* Installation von Visual Studio Code sowie Node.js.
* Lehrplan besprochen.
* Theorie dazu besprochen
  * Programm aufbau
  * Serverseitige Programmierung

## 2.Einheit 21.09.2017 (Donnerstag)
* Grundlagen von Javascript.
* Vor- und Nachteile von Datentypen besprochen.
  * boolean, unidefined, number, null, boolean, string.
  * typeof zum Herausfinden des Datentypes einer Variable.

## 3.Einheit 28.09.2017 (Donnerstag)
* Wiederholen der letzten Einheit.
* tsc (main.ts) transpiliert Typescript in Javascript (main.js)
  * unbedingt in main.ts schreiben sonst wird alles wieder gelöscht bzw. zurückgesetzt.
* Typescript "bessere" Version von Javascript.
* [Übung 2](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue02)
  
## 4.Einheit 04.10.2017 (Mittwoch)
* Schritt für Schritt alles von Repository kopiert für die Einrichtung von Visual Studio Code 
* tsconfig.json für die Transpilierung von von .ts zu .js
* tslint.json für Syntaxüberprüfung(Überprüfung der Falscheingabe)
* .vscode Ordner erstellen.
  * settings.json zum Sichtbarmachen von Deateinin der IDE. 
  * tasks.json welche Tasks es gib z.B clean and build.
  * launch.json für die Debugger-Einstellungen.
* gulpfile.js definition was die Tasks machen sollen.
* *.js.map Files: Verantwortlich für das Anzeigen von Fehlern und in welcher Zeile er im Typescriptcode aufgetreten ist - " "Fehlermapping"
* main.ts -> Erstellung der Klasse "class car".
  * Für Namenskonflikte: private Variable mit _ kennzeichnen.
* [Übung 3](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue03)
	
## 5.Einheit 05.10.2017 (Donnerstag)
* Feld deklarieren und definieren.
  * deklaration: let autos: Car[] = [];
  * definition: autos.push(new Car('RA 1111'));  
                autos.push(new Car('RA 2222'));      
                autos.push(new Car('RA 3333'));    
                autos.push(new Car('RA 4444'));    
* Ausgabe von einen Feld mit 2 Arten:
  * for-Schleifen: for (const a of autos){
    console.log(a);
}
  * Direkt über das Feld: console.log(autos);
* In Json Datei abspeichern: 
  * fs.writeFileSync('./dist/autos.json', JSON.stringify(autos));
* .vscode -> keybinding.json für die Tastenkürzel.
  * Datei -> Einstellungen -> Tastenkompination -> keybinding.json -> Alles im .vscode unter settings in das andere Verzeichnis kopieren.
* Weitere Art ein Feld auszugeben:
  * Aus Json ins Programm einlesen -> const buffer = fs.readFileSync('./dist/autos.json');
  * In einen String speicher -> const str = buffer.toString();
  * Mithilfe von parse in ein Feld speichern -> const autos2 = JSON.parse(str);
  * Ausgabe -> console.log(autos2);
  * [Übung 3](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue03)

* ue04 erstellen um eine schön strukturierte Klasse zu programmieren.
  * alles kopiert mit rsynch -aP ue03/ ue04/
* [Übung 4](https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/picdom12/projekts/ue04)


