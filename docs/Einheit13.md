**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 14.12.2017
   
## Übersicht: 

1. Wiederholung Web-Token
2. Fortsetzung Progamm
3. Angular

### 1. Wiederholung Web-Token

- Man kann sich aussuchen, ob Informationen mitgesendet werden oder nicht
- Hat ein Verfallsdatum
- Die Daten sind signiert 
    - Verschlüsseln: mit öffentlichen Schlüssel
    - Entschlüsseln: mit ptivatem Schlüssel
    - Durch signieren kann man überprüfen, ob es am Sever ist

### 2. Fortsetzung Progamm

- Hier schauen wir, wann Token abläuft bzw. gesendet wird!

```javascript
if(decoded.name && decoded.name === 'maxi') {
                    console.log(decoded);
                    const issuedAt = new Date (decoded.iat * 1000);
                    console.log(issuedAt.toLocaleDateString);// Wann wird Token gesendet und wann lauft er ab
                    res.send('OK');
```
### 3. Angular
- Wir müssen am Client etwas verändern, geht nicht anders!
- Wir könnten selber mit Java ein Programm schreiben, oder Java-Script Libraries verwenden (z.B jquery)
- Wir könnten auch ein JS-Frame-Work verwenden (Like Android -App programmieren, man kann da aber nicht machen was man will, muss sich an gewisse Vorgaben halten) --> Problem: JS-Frame-Works kommen und gehen, Überlebensrate liegt ca. bei 2 Jahren, man muss sich immer wieder in neue Sachen einarbeiten.

- Eines dieser Frame-Works ist **Angular** und läuft ca. seit einem Jahr stabil. Laut Herr Sx ist die neueste Version ( up-to-Date = 1.6.1) mit Bestands-Potential ausgestattet.
- Angular wird von _Google_ betrieben.
- Bei Angular sind Erneuerungen (neue - Angular Version) nicht mehr (meistens) kompatibel mit älteren Versionen.



