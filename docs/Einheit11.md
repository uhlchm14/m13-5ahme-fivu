**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 30.11.2017
   
## Übersicht: 

1. Wiederholung Cookies
2. Fortsetzung Cookies
3. Web-Token / JSON Webtoken
4. Beginn ue07 mit Verwendung von Token
5. Schlüssel erzeugen

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
npm install --save-dev @types/cookie-parser
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
### 3. Web-Token / JSON Webtoken
- Server gibt Client Token, dieser Token wird signiert.
- Wenn der Token dann vom Client verwendet wird, kann die Signatur geprüft werden und letztendlich (wenn sie als gültig empfunden wird) verwendet werden
- trotzdem findet hierbei keine Verschlüsselung statt
- Im Gegensatz zum Cookie findet Signatur statt und der Token wird nicht von Haus aus mitgesendet
- Ein signierter Token hat auch eine Gültigkeit, ist wie ein Stück Ausweis, der für eine gewisse Zeit da ist
- Token werden gerne von Banken übergeben, um sie genau für eine Operation zu verwenden, z.B wenn man auf E-Banking Seite lange eingeloggt bleibt und die Seite dann irgendwann nicht mehr gültig ist

### 4. Beginn ue07 mit Verwendung von Token
- Wir kopieren von Herrn Sx das Projekt
- jetzt brauchen wir den jsonwebtoken, installieren:
```javascript
npm install --save jsonwebtoken
```
und
```javascript
npm install --save-dev @types/jsonwebtoken
```
dann importieren
```javascript
import * as jwt from 'jsonwebtoken';
```

### 5. Schlüssel erzeugen
- zuerst Ordner **keys** erstellen, dann:
- folgende Befehle:
```javascript
openssl genrsa -out keys/server-private.pem
```
und
```javascript
openssl rsa -in keys/server-private.pem -pubout -out keys/server-public.pem
```
- Danach: public and private key als _Buffer_ anlegen!
```javascript
class Main {

    private _privateKey: Buffer;
    private _publicKey: Buffer;

    constructor () {
        console.log('Start');
        this._publicKey = fs.readFileSync('../keys/server-public.pem'); // System wartet bis file wirklich eingelesen ist, nix im Hintergrund
        this._privateKey = fs.readFileSync('../keys/server-private.pem');
        console.log('Key-pair read from files');
    }
}
```

