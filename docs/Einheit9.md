**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 16.11.2017
   
## Übersicht: 

1. Wiederholung
2. Einbinden von Counter bei Pug
3. Bootstrap

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

- **Responsive:** Berücksichtigt, dass die Endgeräte verschiedene größen haben.
- **Z-index:** z.B: Wenn sich zwei Textfelder überdecken, kann ich nur mehr eines sehen. Durch den Z-index kann ich die Sichtbarkeit ganz klar festlegen. Ansonsten geht es rein um den Aufbau, die Reihenfolge die ich am Anfang festgelegt habe wird dann auch verwendet.
- **DOM:** Domain Object Model --> Ist das, was dann im Browser als Objekt vorliegt. 






