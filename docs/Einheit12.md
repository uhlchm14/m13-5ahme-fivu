**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 07.12.2017
   
## Übersicht: 

1. Wiederholung Cookies / Fortsetzung Cookies
2. Web-Token

### 1. Wiederholung Cookies / Fortsetzung Cookies
- Wiederholen von Cookies
- Problem: klaut jemand ein Cookie, kann man in der Zeit, bis das Cookie abläuft, Probleme verursachen
- Web Token: Da hat man Schlüssel, muss nicht in Datenbank nachsehen
  - Vorteil / Hauptgewinn: Bei Anfrage muss man **nicht in Datenbank** nachsehen

### 2. Web-Token
- Ziel: Web-Token erzeugen und mitsenden
- Web-Token erzeugen:
```javascript
const token = 
jwt.sign({name: 'maxi'}, 
this._privateKey,
{ expiresIn: '10min', algorithm: 'rs256'});
```
- Was will ich haben(Information), Schlüssel zum Verschlüsseln, Algorithmus
