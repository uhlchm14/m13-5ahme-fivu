# Einheit 12: 11.1.18

#### Inhalt
  - Wiederholung des bisher gemachten
  - Angular

## Wiederholung des bisher gemachten
* HTML/CSS  
Markup Language und Kaskadierung um das Front-End einer Website zu erstellen.  
__HTML__ gibt dabei die Formattierung an, welche mit __CSS__ gestyled werden kann.  
Beim Erstellen der Website wird aus dem HTML das _Document Object Model (DOM)_ erzeugt.
* JavaScript  
Das DOM ist von Natur aus statisch, um es dynamisch/reactive zu machen, benötigt man eine Programmlogik. Die dominierende Sprache dafür ist heute __JavaScript__.  
Um das DOM zu manipulieren gibt es die Möglichkeit...
  + ... einfache JacaScript Programme...
  + ... JavaScript Bibliotheken...
  + ... JavaScript Frameworks...  
... zu nutzen.
* TypeScript  
Mit __TypeScript__, einer Weiterentwicklung von JavaScript der Firma Microsoft, ist es möglich das DOM auch mit einem objektorientierten Ansatz zu manipulieren. TypeScript bietet im Gegensatz zu Java jedoch die Möglichkeit auf _Typisierung_.
Im Kern ist es allerdings immer noch JavaScript, TypeScript wird nämlich beim bauen in JavaScript _transpiliert_.
* Serverseitige Programmierung mit NodeJS (HTTP + Express)  
__NodeJS__ ist ein serverseitiges Programm, das es erlaubt JavaScript auszuführen. Es verwendet _NodeJS Module_ umd Funktionen zu erhalten, beispielsweise bekommen wir über das _Express Modul_ die Möglichkeit einen Server zu erstellen und durch das _HTTP Modul_ können wir das HTTP zum Austausch zwischen Client und Server verwenden.  
Durch NodeJS ist es möglich Client sowie Serverseitig JavaSyript (TypeScript als Modul) zur Programmierung zu verwenden. Eine andere, häufig verwendete, serverseitige Sprach ist beispielsweise _PHP_.
Theoretisch kann jeder Node Module veröffentlichen, daher gilt das Prinzip "Immer mit Vorsicht genießen".  
Die lokalen Module werden im _node_modules_ Verzeichnis im Projekt, die lokalen im gleichnamigen Verzeichnis in den Userfiles, gespeichert.
* Kommunikation Client & Server mit TCP/IP über HTTP  
Zum Austausch zwischen Server und Client wird das __HTTP__ verwendet. Um die Datenpakete zu transportieren wird __TCP/IP__ verwendet.
* Cookies  
__Cookies__ werden verwendet um Daten clientseitig zu speichern.  
Ein Beispiel ist die Session ID nach einem erfolgreichen Anmeldevorgang.  
  + Nachteil: Cookies werden bei jeder Anfrage mitgesendet und enthalten auch Metadaten wie beispielsweise den aktuellen Standort. Aufgrund dieser "Sicherheitslücke" muss laut EU Gesetz auf jeder Webseite, die Cookies verwendet, nach der Erlaubnis des Nutzers gefragt werden.
* JSON Webtoken  
Der __JSON Webtoken__ dient vorallem der Authentifizierung. Er wird im Header eines HTTP Requests mitgesendet und beinhaltet Daten wie die Session ID. Der Webtoken wird nur geschickt, wenn es nötig ist und kann außerdem signiert werden.
* Angular  
__Angular__ ist ein JavaScript Framework, wird also clientseitig verwendet. Es definiert also das Aussehen der kompletten Applikation.  
Es wird von Google entwicktelt und war ursprünglich als AngularJS bekannt. Nach dem Umstieg auf Angular 2 kann auch TypeScript zur Programmierung verwendet werden und gewinnt immer weiter an Bekanntheit. Mittlwerweile aktuell ist Angular Version 1.6. --> _Angular 6_
Für das Anlegen neuer Projekte verwendet man typischerweise _Angular CLI (Command Line Interface)_, da das komplette Aufsetzen von Scratch langwierig/fehleranfällig ist.

## Angular
Die Projektarchitektur von Angular beruht auf __Komponenten__. Eine Komponente bestehent (von oben nach unten) aus Importen, Zusatzinformation (Selector, HTML-File, optional: CSS-File), Klassenname und Code.  
  + _Importe_ dienen dazu, Zusatzbibliotheken, Klassen und Funktionen zur Verwendung in der Komponente hinzuzufügen.
  + Der _Selector_ hat in Angular den Zweck, einer Komponente einen "Namen" zu geben, mit dem diese dann im HTML Teil einer anderen Komponente eingebunden werden können. Die Einbindung erfolgt wie gewohnt mit _HTML-Tags_. Beispiel: <selector></selector>
  + Da eine Komponente aus _3 Teilen_, TypeScript File, HTML File und CSS File, bestehen kann, wird in den Komponenteninformationen definiert, welche Files zu dieser Komponente gehören.
  + Der _Klassenname_ definiert den Namen der Komponente.
  + Im _Code_ folgt die Programmlogik.  

Beispiel für eine Komponente:  

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title: string;

    constructor() {  }

    public ngOnInit() {
        this.title = 'Hello, World!';
        console.log(title);
    }
}
```

Angular bietet die Möglichkeit, _public_ Variablen aus dem TypeScript File im HTML anzeigen zu lassen. Das gelingt mithilfe der sogenannten [Interpolation] mit folgender Syntax: {{variable}}.

Beispiel:

```html
<h1>
    Welcome to {{title}}!
</h1>
```

Das probieren wir dann auch in unserer [UE08] aus.  

Außerdem wollen wir die aktuelle Uhrzeit anzeigen, dafür verwenden wir den TypeScript Datentyp _Date_: `const now = new Date();`
Die Zeit soll außerdem immer wieder aktualisiert werden und auch das richtige Format haben, dafür schreiben wir die folgende Methode:

```javascript
private updateTime() {
    const now = new Date();
    this.time = now.toLocaleTimeString();
}
```

Wenn die Komponente erstellt wird, wird der sogenannte _[OnInit]_ _[Lifecyclehook]_ aufgerufen. Da wir die Zeit von Anfang an darstellen wollen, schreiben wir die Methode `ngOnInit()`, in der alle zu Beginn nötigen Sachen aufgerufen werden.

```javascript
public ngOnInit() {
    this.title = 'UE08';
    this.updateTime();
    console.log('Hallo, I bims, in da Konsole');
    window.setTimeout( () => {
        this.title = 'the Family';
    }, 5000);
    this._timer = window.setInterval( () => {
        this.updateTime();
    }, 100);
}
```

Für das ständige Aktualisieren der Uhrzeit setzen wir ein Interval, das die `updateTime()` Methode alle 100ms aufruft.  
Solange wir uns in der Komponente befinden ist das Interval aktiv, sobald wir allerdings von der Komponente wegnavigieren, möchten wir nicht unnötig Ressourcen dadurch verbrauchen. Dafür gibt es den _[NgOnDestroy]_ _Lifecyclehook_, welcher beim Zerstören der Komponente aufgerufen wird. Darin "clearen" wir das Interval:

```javascript
public ngOnDestroy() {
    if (this._timer !== undefined) {
        window.clearInterval(this._timer);
        this._timer = undefined;
    }
}
```
Der Lifycyclehook muss außerdem importiert, sowie implementiert werden: 

```javascript
import { Component, OnInit, OnDestroy } from '@angular/core';

// @Component annotation
export class AppComponent implements OnInit, OnDestroy {
```

Danach war die Einheit zu Ende.

[Interpolation]: https://angular.io/guide/displaying-data#showing-component-properties-with-interpolation
[UE08]: https://github.com/HTLMechatronics/m13-5ahme-fivu/tree/kormam13/projects/ue08
[OnInit]: https://angular.io/guide/lifecycle-hooks#oninit
[Lifecyclehook]: https://angular.io/guide/lifecycle-hooks#lifecycle-hooks
[NgOnDestroy]: https://angular.io/guide/lifecycle-hooks#ondestroy
