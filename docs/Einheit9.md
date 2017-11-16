**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 16.11.2017
   
## Übersicht: 

1. Wiederholung
2. Einbinden von Counter bei Pug

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



