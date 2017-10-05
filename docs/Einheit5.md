**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 05.10.2017
   
## Übersicht: 

1. Allgemeines
2. Lesen und Schreiben von Dateien
3. Tastenkombinationen einfügen

### 1. Allgemeines
- Zuweisung erfolgt immer über **set-Funktion**
- Abfrage erfolgt immer über **get-Funktion**
- generell bei beiden Methoden (getter + setter) kollidieren die Namen, daher wird bei der Variablen-Deklaration ein "_" gesetzt.  
    - z.B  private _hersteller: string;

- push hängt an einen Array etwas drann

### 2. Lesen und Schreiben von Dateien
- Um Dateien zugänglich zu machen, muss man ein Unterprogramm installieren (file system|node.js)
    - Dazu **import * as fs from 'fs';**
- In Datei schreiben
    - fs.writeFileSync('C:\\Dateien_Windows\\Dateien\\Schule_HTL\\Fiv\\autos.json', JSON.stringify(autos));
- Aus Datei lesen und in String umwandeln
    - const buffer = fs.readFileSync('C:\\Dateien_Windows\\Dateien\\Schule_HTL\\Fiv\\autos.json');
    - const str = buffer.toString();
    - const autos2 = JSON.parse(str);
    - Problem: die eingelesenen Objekte müssen nicht mit der Klassendeklaration übereinstimmen 
    - --> keine automatische Überprüfung

### 3. Tastenkombinationen einfügen
- Tastenkombination einbinden --> **strg + alt + b** = built (vom LMS-Server)
- Tastenkombination **alt + shift** --> Mehrere Zeilen makieren untereinander

