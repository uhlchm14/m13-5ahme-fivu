**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 15.03.2018
   
## Übersicht: 
1. Wiederholung
2. Fortsetzen des Programmes

### 1. Wiederholung
Wir haben dem Server gesagt, wenn du eine Anfrage bekommst, dann soll er die Datei index.html schicken.
In der index.html werden dann gesagt, dass Script-Dateien nachgeladen werden müssen.
Der Client will dann die Daten vom Server bekommen (Pandel Dateien).
Sind diese 2 Schritte erfolgreich ausgeführt, erst dann läuft die Applikation.

### 2. Fortsetzen des Programmes
Um Zeit zu sparen, wird der zuvor erstellte Schüler-Server von der Übung 9 übernommen. In der Übung im Ordner src/app finden sich alle benötigten Dateien. Diese gilt es, in Übung 11 zu transportieren. Dies funktioniert entweder über das Terminal oder über die GUI.

- Danach wird styles.css verändert:
   - Es wird "@import '../node_modules/bootstrap/dist/css/bootstrap.min.css'" eingefügt.

- Danach wird der Server kontaktiert, in user.service.ts:
   - wir benötigen einen Import: "import { HttpClient } from '@angular/common/http';"
   
Danach wird die Datei: user.service.ts und app.module.ts verändert.

Wir erstellen in der main.ts des Servers folgende Methode:
```
  private handleGetUsers(req: express.Request, res: express.Response, next: express.NextFunction) 
     {
         try{
            const rv = JSON.stringify(this._users);
            res.json(rv);
            
         } catch (err)
         {
             next (err);
         }
     }
```
