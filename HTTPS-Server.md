# Einheit 16
## Inhaltsangabe
- Besprechung der letzten Stunde
- Auftragsstellung
- Freie Arbeit

## Besprechung der letzten Stunde

Am Anfang der Stunde besprachen wir was wir letzte Stunde gemacht haben. Dabei wiederholten wir was TLS ist und was Zertifikate sind.

## Auftragstellung

Unsere Aufgabe war es einen HTTPS server in Typscript zu programmieren. Wir bekamen von Stackoverflow einen link wo dieser Server aber in Javascript programmiert wurde. Das zu verwende Zertifikat ist das von letzter Stunde.

## Freie Arbeit

Am Anfang mussten wir die Schlüssel und das Zertifikat einlesen. Danach erstellten wir einen HTTP Server und parallel dazu einen HTTPS Server. Wir verwendeten dazu den express server. Der HTTPS Server ist eigentlich gleich zu erstellen wie der HTTP Server man muss alerdings das Zertifikat und den Schlüssel mitangeben.  

Als ersters mussten wir das HTTPS Package inportieren

```typescript
import * as https from 'https';
```

Nach diesem Schritt erstellten wir einen Express Server

```typescript
this._server = express();
```

Schlüssel und Zertifikat einlesen

```typescript
this._zertifikat = fs.readFileSync('../x509/server-frelum13.crt');
this._privatekey = fs.readFileSync('../x509/server-frelum13.pem');
```

Als nächstes musste man eine Referenz erstellen. Dabei musste man den Schlüssel und das Zertifikat angeben

```typescript
const credentials = {key: this._privatekey, cert: this._zertifikat};
```  
  
Am Schluss mussten wir nur mehr mit HTTPS an dem Port 8443 listen und mussten außerdem die Refernez angeben

```typescript
const httpsServer = https.createServer(credentials, this._server);
httpsServer.listen(port);
console.log('Server gestartet (http://localhost:8443)');
```  


