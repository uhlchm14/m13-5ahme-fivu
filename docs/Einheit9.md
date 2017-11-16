**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 16.11.2017
   
## Übersicht: 

1. Wiederholung
2. Einbinden von Counter bei Pug
3. Bootstrap
4. Erstellen von ue06

### 1. Wiederholung
- Erstellen eines dynamischen Servers

- Einbinden von Pug:
    	- Es wird die Komplexität verringert, man beschrenkt sich auf das Wesentliche
	- Übersichtlicher, weniger fehleranfällig, schneller/besser ergänzbar, ....

### 2. Einbinden von Counter bei Pug  
- in der Main.ts Counter für das Pug-file übergeben

```javascript
server.get('/pug', (req, res, next) => {
res.render('test.pug', {counterValue: counter++});
});
``` 

- Danach in test.pug definieren

```javascript
p Counter #{counterValue}
```

### 3. Bootstrap
- = Eine sehr bekannte Bibliothek
- Link: https://getbootstrap.com/ --> Wir besprechen "Documentation"

- **Responsive:** Berücksichtigt, dass die Endgeräte verschiedene größen haben.
- **Z-index:** z.B: Wenn sich zwei Textfelder überdecken, kann ich nur mehr eines sehen. Durch den Z-index kann ich die Sichtbarkeit ganz klar festlegen. Ansonsten geht es rein um den Aufbau, die Reihenfolge die ich am Anfang festgelegt habe wird dann auch verwendet.
- **DOM:** Domain Object Model --> Ist das, was dann im Browser als Objekt vorliegt. 

### 4. Erstellen von ue06
- Kopieren der ue05 und einfügen in ue06, abändern des Servers
- Download der Bootstrap-Bibliothek mit: _npm install bootstrap@4.0.0-beta.2_

- Mit: view-source:http://localhost:4711/ kann man die Source im Browser anzeigen lassen






