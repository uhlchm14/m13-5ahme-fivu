**Verfasser:** Stefan Ornik   
**Lehrer:** Steiner   
**Datum der Einheit:** 23.11.2017
   
## Übersicht: 

1. Fortsetzen beim "Formular"
2. Body-Parser 


### 1. Fortsetzen beim "Formular"
- _value_ mit **name** ersetzen, abchecken ob Daten im Klartext da sind (F12 im Browser Chrome drücken und bei Network schauen)
- Einbinden von: (zum internen Speichern und verarbeiten der Formular-Daten)
```javascript
// 2.Schicht
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    next();
})
```




### 2. Body-Parser
- installieren: npm install --save body-parser
- Importieren:
```javascript 
import * as bodyParser from 'body-Parser';
```
- 2. Schicht bearbeiten:
```javascript
// 2.Schicht
server.post('/saveuser', (req, res, next) => {
    // res.render('index.pug');
    if (req.body) {
        console.log(req.body)
    }
    if (req.body.name === 'maxi' && req.body.password === 'geheim') {
        res.send('Ok (' + req.body.email + ')');
    } else {
        res.status(401).send('Error');
    }

    // next();
})
```




