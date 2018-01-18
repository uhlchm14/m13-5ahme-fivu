import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: ` <p> {{ time }} </p> `,
  styleUrls: ['./app.component.css']
})
export class AppClockComponent implements OnInit, OnDestroy {
  public time: string;
  private _timer;

  constructor() {
  }

  public ngOnInit () {
    console.log('AppClockComponent: ngOnInit');
    this.updateTime(); // ruft updateTime auf
    this._timer = window.setInterval ( () => this.updateTime(), 100);
    // Diese Methode alle 100ms aufrufen -> die einheit wird alle 100 ms aktualisiert
    setInterval( () => this.updateTime(), 100);

  }

  public ngOnDestroy() {
    if (this._timer !== undefined) { // überprüft ob timer angelegt wurde
    window.clearInterval(this._timer);
    this._timer = undefined;
    }
  }

  private updateTime() {
    const now = new Date(); //
    this.time = now.toLocaleTimeString();
  }
}
