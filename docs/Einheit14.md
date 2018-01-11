**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 11.01.2018
   
## Übersicht: 

1. Wiederholung Schuljahr 2017 FIVU
2. Fortsetzung mit Angular

### 1. Wiederholung Schuljahr 2017 FIVU

- Übersicht:
    - Node.js
    - Web-Server, (Node.js http + express)
    - Cookies (Daten clientseitig speichern)
    - JSON WebToken
    - Anmeldevorgang
    - Angular

- Besprechung des gesamten FIVU-Stoffes im Jahre 2017:
     - Javascript: Client-Seitig sehr gute Programmierung
     - Typescript: Sehr Java-ähnlich, Hauptgrund: TYPISIERUNG
	   - Ohne Typisierung: Keine Struktur, kann machen was man will, Fehler, Compiler kann nicht 	helfen

- Sicherheitstechnisch: immer HTTPS-Server betreiben

- Angular:
     - Angular ist ein "Ökosystem", sowie Android

### 2. Fortsetzung mit Angular
- Angular Applikation:
    - Besteht aus Komponente
        - Komponente besteht aus: 
	```javascript
	@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
	})	
	```
        - Selector-Name
	- Urls von Template und Style

- Erste Funktion:
	```javascript
	public ngOnInit () { 
   	console.log('ngOnInit');
    	setTimeout ( () => {
      	this.title = 'Hallllooooo';
    	}, 5000);
	```
	- Timeout = Verzögerung, 5000 ms
	- Danach wird Titel gesetzt (Halllllooooo)
         
