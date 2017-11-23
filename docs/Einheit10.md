**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 23.11.2017
   
## Übersicht: 

1. Fortsetzen beim "Formular"


### 1. Fortsetzen beim "Formular"
- _value_ mit **name** ersetzen, abchecken ob Daten im Klartext da sind (F12 im Browser Chrome drücken und bei Network schauen)
- Einbinden von: (zum Speichern)
```javascript
// 2.Schicht
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    next();
})
```




### 2. Einbinden von Counter bei Pug  
