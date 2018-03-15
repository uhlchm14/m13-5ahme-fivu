**Verfasser:** Julian Wolf  
**Lehrer:** Steiner   
**Datum der Einheit:** 08.03.2018
   
## Übersicht: 

1. Wiederholung HTTP, express und nconf
2. Verbesserungen der vorherigen Einheit
3. Angular client bundles in Angular Server einbeziehen

### 1. Wiederholung HTTP, express und nconf

HTTP: Ist ein übertragungsprotokoll zwischen einem Web-Server und einem Client. Befehle sind textuell.

Express: Express ist ein Node.js Framework, was einen dabei unterstützt einen Web-Server zu programmieren. Express enthält alle wichtigen packages, um mit einfachen funktionen bereits einen Web-Server erstellen und starten zu können.

nconf: nconf ist ein package welches die einbindung von konfigurationsdateien ermöglicht. Dadurch können informationen wie Servername, Port, usw. außerhalb des eigentlichen Server-Programms verändert werden.

### 2. Verbesserung der vorherigen Einheit

Wenn ein öffentlicher Server einen Error hat, kann ein normaler Client diesen nicht beheben und wird den Entwickler des Servers verständigen. Dieser braucht zum herausfinden des Fehlers die Log-Files des Clients und einen Timestamp um den Fehler in den Log-Files finden zu können.

```JavaScript
	private handleError (err: any, 
	req: express.Request, 
	res: express.Response, 
	next: express.NextFunction) {
        	const timeStamp = new Date().toISOString();
		console.log(timeStamp);
		console.log(err);
        	res.status(500).send('Internal Error (' + timeStamp + ')');
    }
```
Die Funktion Date().toISOString() speichert die aktuelle Uhrzeit und Datum in einen String, und wird nacher über console.log in der Konsole ausgegeben.

### 3. Angular client bundles in Angular Server einbeziehen

Wenn der Angular Client gebaut wird, werden die neu angelegten Dateien in den dist-Ordner abgespeichert.
Die index.html enthält die Dateipfade der Angular bundles, welche die Angular App darstellen. Wir geben dem Server den Dateipfad der index.html, um die selbe Angular App als der Client zu haben.
Da die Angular Bundles nur als Pfad in der index.html angegeben sind, müssen diese Bundles im nachhinein hinzugefügt werden. Da sich diese Bundles ebenfalls im dist-Ordner befinden, kann man direkt den ganzen dist-Ordner dem Server als Pfad zur verfügung stellen.

In der start Methode werden deshalb folgende Funktionen eingegeben:
```JavaScript
	const ngxPath = path.join(__dirname, '../../ngxClient/dist');
        this._express.use(express.static(ngxPath));
```

Mit der Methode express.static, kann dem Server ein Dateipfad, aus dem er Dateien einbinden soll, angegeben werden.

In der handleGetStartup Methode wird nun folgendes geschrieben:
```JavaScript
            const indexPath = path.join(__dirname, '../../ngxClient/dist/index.html');
            res.sendFile(indexPath);
```

Die Datei index.html wird mit res.sendFile() an den Client zurückgeschickt und automatisch im Webbrowser dargestellt.
Der Client holt sich nur noch die einzelnen Bundles vom Server.



