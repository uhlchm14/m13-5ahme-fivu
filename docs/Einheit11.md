**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 30.11.2017
   
## Übersicht: 

1. Wiederholung Cookies
2. Fortsetzung Cookies

### 1. Wiederholung Cookies
- Cookies speichern Daten im Client
- oftmals ist ein Verfallsdatum festgelegt
- ist gebunden an die URL
- Wenn URL aufgerufen wird, so wird automatisch die Cookie-Information mitgesendet

### 2. Fortsetzung Cookies
- Wie kriegt das Cookie die Information in den Server rein?
- das Modul Cookie ist nur dazu da, um Cookies zu produzieren
- jetzt brauchen wir den Cookie-Parser, installieren:
```javascript
npm install --save cookie-parser
```
und
```javascript
npm install --save cookie-parser
```
dann importieren
```javascript
import * as cookieParser from 'cookie-parser'
```
dann
```javascrpit
server.use(cookieParser());
```
um eine spezielle Anfrage anzuzeigen:
```javascript
 console.log(req.cookies);
    if(req.cookies && req.cookies.name ==='maxi')
    {
        console.log('Anfrage von Maxi');
    }
```
