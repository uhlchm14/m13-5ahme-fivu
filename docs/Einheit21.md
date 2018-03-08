**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 08.03.2018
   
## Übersicht: 
1. Wiederholung
2. Fortsetzung Programm

### 1. Wiederholung
Wir wiederholen das Programm vom letzten Mal, da es schon in längerer Vergangenheit liegt.
Wir besprechen die Fehlerbehandlung und stellen fest, dass wir eine genaue Fehlerbezeichnung brauchen.

### 2. Fortsetzung Programm
Wir ändern die folgende Funktion:
```
private handleGetStartUp (req: express.Request, res: express.Response, next: express.NextFunction)
    {
        //sollte ein Fehler auftreten - next Error - landet beim Error handler und wird behandelt
        //braucht nicht in jeder get ... methode um errors kümmern, wirft sie immer weiter bis zum error handler
        try
        {
        const indexPath =
            path.join(__dirname, '../ngxClient/dist/index.html');
            res.sendFile(indexPath);
        }
        catch(err)
        {
            next(err);
        }  
    }
```
Dadurch greifen wir auf "index.html" zu. Wir haben dafür die Variable "indexPath" angelegt.
Die weitere Stunde ist von Fehler-Handling geprägt. Es treten bei den meisten Schülern Fehler auf, welche zu beheben sind.
