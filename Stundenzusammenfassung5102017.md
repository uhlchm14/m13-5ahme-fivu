# Einheit 5.10.2017

### Inhalt
- set / get erstellen
- Felder
- lesen/schreiben
- tastenkürzel einfügen
- ue04

### set / get erstellen

Am Anfang unserer Einheit widerholten wir kurz was wir in der letzte Stunde gemacht haben. Danach starteten wir die set / get Methode auszuprogrammieren.  

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
        return this._hersteller + ' is supa';
    }
```


Das es zeu keinen Namen kollisionen kommt bekamen die inneren Atribute ein `_` vorne angehängt.

### Felder

Mit der Methode `push` kann man ein neues Element in das Feld schreiben.

### lesen/schreiben  
  
Das wir in eine Datei lesen oder schreiben können müssen wir vorher `import * as fs from 'fs'` importieren. Die Methode zum schreiben lautet `fs.writeFileSync()`. Und zum lesen `fs.readFilesync()`. Das Problem an dieser Methode ist das etwas in der Datei stehen kann was eigentlich nicht hineingehört (es geht weil es kein Objekt von xy ist). Das wir das überprüfen können begannen wir mit einer neuen Übung (ue04).  

### tasten kürzel einfügen

Wir haben auch ein paar neue schortcuts eingefügt. Dazu mussten wir in `File -> Preferences -> Keyboard Shortcuts` unsere shortcuts einfügen.  

### ue04

Am Anfang kopierten wir die ue03 in die ue04 mit dem terminal kommando `rsync`. Danach löschten wir die die main.ts und legten die main.ts und die car.ts an. Die car.ts ist unser Interface. In dem Interface überprüfen wir, ob alles von der eingelesenen Datei mit dem Object car übereinstimmt. 
