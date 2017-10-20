**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 12.10.2017
   
## Übersicht: 

1. Problem - lösen
2. Debuggen
3. Server einbauen

### 1. Problem - lösen

Wenn man bei Webservern von außen Daten bekommt (z.B im Falle: "lesen von Daten"), muss man die Info gründlich prüfen.
Sollte etwas nicht stimmen, wird dies zu erheblichen Problemen führen. (z.B ebenfalls beim Lesen von Daten könnten Schwierigkeiten auftreten).
Um diese Probleme vorzubeugen, werden Exceptions im Konstruktor verwendet.

**Begriffe**:

- **Interface:** sagt aus, aus welchen Teilen ein Objekt besteht bzw. bestehen muss
    - Der Bergiff "Interface" stammt ursprünglich aus der Naturwissenschaft und beschreibt die Eigenschaften eines Systems als **"Black-Box"** (= möglicherweise komplexes System), von welcher nur die Oberfläche sichtbar ist. Es ist nur eine Kommunikation über diese Oberfläche möglich. Zwei Black-Boxes können also nur miteinander kommunizieren, wenn deren Oberflächen zusammenpassen.
    - Einfach gesagt: Attribute müssen genau mit dem übereinstimmen, was im Interface steht, es ist also eine Festlegung wie das    Objekt später aussehen soll
    - Beispiel: 
    ```javascrpit
    export interface ICar {
    kennzeichen: string;
    hersteller: string;
    farbe: 'rot' | 'blau' | 'gruen'; // Somit sind NUR diese Farben zulässig!!!!
    baujahr?: number;

}
```
- 
- **baujahr?:** Optionales Objekt, kann man haben, muss man nicht 

- **if (!data.kennzeichen || typeof data.kennzeichen !== 'string'):** bei Java eine Überprüfung ob der String ein leerer String ist 

- **farbe: 'rot' | 'blau' | 'gruen';** Somit sind NUR diese Farben zulässig!!!!

### 2. Debuggen
Wir haben über die Möglichkeit der Fehlersuche gesprochen. Man könnte dazu:
- einen **Breakpoint** setzen
    - man klickt links neben der Zeilennummerierung auf den roten Punkt, welcher erscheint, somit setzt man ihn
    - Dies dient dazu, dass das Programm nur bis zu diesem Punkt debugged wird. (Fehlersuche)
    - hier könnte es lt. Sx Probleme geben 
    
- **debugger;** als Wort hinschreiben
    - Dies funktioniert lt. Sx immer

### 3. Server einbauen
Wir lernen das Java-Script programmieren, um die Server-Seitige Programmierung abzudecken.

Das Einbauen des Web-Servers wird in der nächsten Einheit gestartet.
