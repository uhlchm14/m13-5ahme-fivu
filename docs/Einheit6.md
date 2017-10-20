**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 12.10.2017
   
## Übersicht: 

1. Problem - lösen
2. Interface
3. Debuggen
4. Server einbauen

### 1. Problem - lösen

Wenn man bei Webservern von außen Daten bekommt (z.B im Falle: "lesen von Daten"), muss man die Info gründlich prüfen.
Sollte etwas nicht stimmen, wird dies zu erheblichen Problemen führen. (z.B ebenfalls beim Lesen von Daten könnten Schwierigkeiten auftreten).
Um diese Probleme vorzubeugen, werden Exceptions im Konstruktor verwendet.

### 2. Interface

- **Interface:** sagt aus, aus welchen Teilen ein Objekt besteht bzw. bestehen muss
    - Der Bergiff "Interface" stammt ursprünglich aus der Naturwissenschaft und beschreibt die Eigenschaften eines Systems als **"Black-Box"** (= möglicherweise komplexes System), von welcher nur die Oberfläche sichtbar ist. Es ist nur eine Kommunikation über diese Oberfläche möglich. Zwei Black-Boxes können also nur miteinander kommunizieren, wenn deren Oberflächen zusammenpassen.
    - Einfach gesagt: Attribute müssen genau mit dem übereinstimmen, was im Interface steht, es ist also eine Festlegung wie das    Objekt später aussehen soll
    - Beispiel wie ein Interface aussehen kann: 
    ```javascrpit
    export interface ICar {
    kennzeichen: string;
    hersteller: string;
    farbe: 'rot' | 'blau' | 'gruen'; // Somit sind NUR diese Farben zulässig!!!!
    baujahr?: number; }
    ```  
    - **baujahr?:** Optionales Objekt, kann man haben, muss man nicht 

    - **farbe: 'rot' | 'blau' | 'gruen';** Somit sind NUR diese Farben zulässig!!!!
    
- Wenn man ein Interface einbindet, muss man auch folgendes machen:
    ```javascript
    export class Car implements ICar {

    private _kennzeichen: string;
    private _hersteller: string;
    private _baujahr: number;
    private _farbe: 'rot' | 'blau' | 'gruen';
    ```
    - **implements ICar** = Einbinden des Interfaces
    - Danach werden nochmals alle Attribute deklariert, der Unterstrich bedeutet, dass dies klasseneigene Variablen sind, die nur in der Klasse verwendet werden.
    
    ```javascript
       constructor (data: ICar) {
        if (!data.kennzeichen || typeof data.kennzeichen !== 'string') {
         throw new Error ('Kennzeichen fehlt oder ist leer!');
        }
        this._kennzeichen = data.kennzeichen;
    ```
    -auch im Konstruktor kann nun der "Datentyp" ICar verwendet werden.
    -**(!data.kennzeichen || typeof data.kennzeichen !== 'string')** = Hier wird überprüft, ob der String leer ist.
    
- Letzlich nach den **Getter** und **Setter** Methoden benötigt man noch eine Methode **toObject**:
```javascript
 public toObject(): ICar {
      const rv: ICar = {
            kennzeichen: this._kennzeichen,
            hersteller: this._hersteller,
        };

        if (this._baujahr) {
            rv.baujahr = this._baujahr;
        }

        if (this._farbe) {
            rv.farbe = this._farbe;
        }
```
    - In dieser werden die verschiedenen Datentypen in ein Object (ICar) umgewandelt.

    



### 3. Debuggen
Wir haben über die Möglichkeit der Fehlersuche gesprochen. Man könnte dazu:
- einen **Breakpoint** setzen
    - man klickt links neben der Zeilennummerierung auf den roten Punkt, welcher erscheint, somit setzt man ihn
    - Dies dient dazu, dass das Programm nur bis zu diesem Punkt debugged wird. (Fehlersuche)
    - hier könnte es lt. Sx Probleme geben 
    
- **debugger;** als Wort hinschreiben
    - Dies funktioniert lt. Sx immer

### 4. Server einbauen
Wir lernen das Java-Script programmieren, um die Server-Seitige Programmierung abzudecken.

Das Einbauen des Web-Servers wird in der nächsten Einheit gestartet.
