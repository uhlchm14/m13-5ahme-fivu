**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 14.12.2017
   
## Übersicht: 

1. Wiederholung Web-Token
2. Fortsetzung Progamm

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


