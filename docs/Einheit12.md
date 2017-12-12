### Einheit 12: 07.12.2017

**Lehrer:** DI Manfred Steiner
**Schriftführer:** Matthias Fink 
**Abwesend:** niemand


Wiederholung Cookie: 
 * Speichern die Daten Clientseitig
 * Client kann an der URL erkennen ob er ein Cookie mitsendet oder nicht
 * Durch SetCookie kann ein Cookie gesendet werden (Im Header bei response)
 * Beispielhafte Informationen im Cookie: Informationen die den Benutzer identifizieren
 * Können ein Verfallsdatum haben (Clientseitiges löschen)
 * Nachteile: 
   * automatisches Mitsenden 
   * man kann zuweisen wo jemand zu einem bestimmten Zeitpunkt war, da immer das gleiche Cookie gesendet wird und nur die IP-Adresse          sich ändert
 * Client sendet Anfrage an Server, Server sendet Login an Client -> Client logt sich ein -> Server sendet SetCookie zurück -> Client kommuniziert dann mit Server mit dem Cookie (über die ID) -> so lange gültig bis sich der Client abmeldet. Nachteil ist, da der Server immer wieder in der Datenbank nachschauen muss ob die ID gültig ist.
 
 Web-Token:
 * Client schickt eine Anfrage, der Server erzeugt ein Token und signiert die Anfrage (mit öffentlichen Schlüssel)
 * Token wird zurück zum Client gesendet
 * Wenn der Token vom Client mitgesendet wird bei einer Frage, entsteht eine Verifizierung (mit privatem Schlüssel) und dient für automatische Erkennung des Clients
 * Vorteil des Systems: 
    * muss im gegensatz zum Cookie-Verfahren nicht in einer Datenbank nachschaun (vergeben für eine gewisse Zeit einen Token)
    * keine Benutzerdatenbank
 
 Programm: WebToken erzeugen und mitsenden
  * Webtoken erzeugen: 
    * man kann den namen angeben, den privaten Schlüssel und auch Optionen wie Ablaufzeit und Verschlüsselungsalgorithmus
    ```Javascript
    private getLogin(req: express.Request, res: express.Response, next: express.NextFunction)
    {
        if (req.body) {
            console.log(req.body);
        }
        if (req.body.name === 'maxi' && req.body.password === 'geheim') {
            const token = jwt.sign({name: 'maxi'}, this._privateKey,
                        {expiresIn: '10min', algorithm: 'RS256'}); // Webtoken erzeugen, name, key, ablaufzeit, algorithmus

            console.log(token);
            res.send('OK (' + req.body.email + ')');
        } else {
            res.status(401).send('ERROR');
        }
    } ```
    
   * beim erstmaligem Probiern -> Fehler undefined value
   * Wir können nicht auf den private Key zugreifen -> Lösung: alles in die Main kopieren! 
   * nun den Token an den Client zurücksenden:
   ```Javascript
    res.json({token: token});
   ```
