# Einheit 5.10.2017

### Inhalt
- set / get erstellen
- Felder
- lesen/schreiben
- Tastenkürzel einfügen
- ue04

### set / get erstellen

Am Anfang unserer Einheit wiederholten wir kurz, was wir in der letzten Stunde gemacht haben. Danach starteten wir die set / get Methode auszuprogrammieren.  

#### set

```JavaScript
    public set hersteller(value: string)
    {
        this._hersteller = value;
    }
```


#### get

```JavaScript
    public get hersteller(): string
    {
        return this._hersteller;
    }
```


Damit es zu keinen Namenskonflikten kommt, bekamen die privaten Attribute ein `_` vorne angehängt.

### Felder

Mit der Methode `push` kann man ein neues Element in ein Feld schreiben.  
Felder können außerdem direkt mit `console.log(feld)` ausgegeben werden.

### lesen/schreiben  
  
Um eine Datei lesen oder in eine Datei schreiben zu können, müssen wir zuerst fs mit `import * as fs from 'fs'` in unser Programm importieren.  
Die Methode zum Schreiben lautet `fs.writeFileSync()`. Da wir eine *.json Datei haben wollen, verwendeten wir die Methode `stringify()` um das Array in ein JSON-String umzuwandeln.
Die zum Lesen `fs.readFilesync()`. Beim Lesen müssen wir aus dem JSON-String nun wieder einen TypeScript-String erzeugen, das machen wir mit der Methode `toString()`.  
Das Problem an dieser Lese-Methode ist, dass etwas in der Datei stehen kann, was eigentlich nicht hineingehört. Das Einlesen funktioniert trotzdem, da der eingelesene Datentyp Object anstatt der eigentlichen Klasse hat.  
Um das überprüfen zu können, starteten wir mit einer neuen Übung (ue04).  

### Tastenkürzel einfügen

Wir haben auch ein paar neue Shortcuts eingefügt. Dazu mussten wir in `File -> Preferences -> Keyboard Shortcuts` unsere Shortcuts einfügen.  

### ue04

Zuerst kopierten wir die ue03 mit dem Terminal Kommando `rsync` in die ue04. Danach löschten wir den Inhalt der main.ts und legten zusätzlich die car.ts an. Die car.ts ist unser Interface. Im Interface überprüfen wir, ob alles von der eingelesenen Datei mit dem Object car übereinstimmt.
