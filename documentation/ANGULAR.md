# Einheit 11: 14.12.2017

## Angular

Angular ist ein Framework, das erstellen von dynamischen Seiten erleichtert. Es wird in Typescript geschrieben und durch das Angular CLI (= Comand Line Interface) in Javascript übersetzt. Angular ist aufgebaut in Components, die jeweils aus einer Typescript, einer HTML und optional auch einer CSS Datei bestehen.

### Erstellen eines Angular Projekts

Zum erstellen des Projektes verwenden wir das Angular Command Line Interface, da das selbst erstellen eines Angular Projekts den Rahmen unseres Unterrichts sprengen würde.

Zuerst müssen wir die CLI installieren:

```bash
npm install -g @angular/cli
```

Danach erstellen wir das Projekt mit dem folgenden Befehl:

```bash
ng new <projectname>
```

Dieser Befehl erstellt uns ein voll funktionsfähiges Angular Projekt. Zum starten des Projektes verwenden wir folgenden Befehl:

```bash
ng serve
```

Optional können wir die optionen `--port <portnummer>` und `--open` angeben. Die erste option spezifiziert den Port, an dem das Projekt im Browser aufrufbar ist. Wenn nicht angegeben wird der Standartport 4200 verwendet. Die zweite Option öffnet den Browser automatisch auf der richtigen Seite.

Wenn wir den Browser nun öffnen, sehen wir die Angular Startseite.

### Bearbeiten des Angular Projekts

In dem Ordner, den die CLI erstellt hat finden wir einen Ordner namens src und in diesem den Ordner app. In diesem Ordner befinden sich unsere Projektdateien. In der app.component.html ist das sogenannte Template und in der app.component.ts die Logik des Projektes. Wir beginnen damit, die Angular Startseite zu bearbeiten.

In der app.component.html finden wir den ausdruck

```html
<h1>
    {{title}}
</h1>
```

Das bedeutet, dass in der .ts Datei eine Variable existiert, die title heißt. Der Inhalt der Variable wird beim Ausführen des Projektes anstelle des Ausdrucks `{{title}}` angezeigt. Sollte sich der Inhalt der Variable ändern, so wird das ebenfalls angezeigt. Dies haben wir getestet, indem wir in der .ts Datei, die Variable nach einer gewissen Zeit ändern

```typescript
setTimeout(() => {
  this.title = 'anderer Titel';
}, 10000);
```

Dieser Ausdruck bedeutet, dass die Variable `title` nach 10 Sekunden (10000 Millisekunden) geändert wird.

Wir fügen außerdem in der HTML Datei den Ausdruck `<p>{{time}}</p>` dazu. Wir wollen die jetzige Systemzeit anzeigen.

```typescript
  public ngOnInit(): void {
    this.updateTime();
    this.interval = window.setInterval(() => {
      this.updateTime();
    }, 100)
  }

  public ngOnDestroy () {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }

  private updateTime() {
    this.time = new Date().toLocaleTimeString();
  }
```

`ngOnInit()` wird beim Initialisieren der Komponente aufgerufen und `ngOnDestroy` wird bei beenden (=zerstören) der Komponente aufgerufen. Diese müssen wir implementieren:

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';

export class AppComponent implements OnInit, OnDestroy {
    ...
}
```

setInterval() ruft die Callback-Methode (die in den {} steht) periodisch nach der definierten Wartezeit auf (in diesem Fall 100ms). Mit `clearInterval(<interval>)` wird das Interval zerstört, damit das Interval nicht nach beenden der Komponente weiterläuft. Mit `new Date().toLocaleTimeString()` wird ein String erstellt, der die Zeit Lokalisiert darstellt. Dieser String wird in der Variable `time` gespeichert und im Browser angezeigt.
