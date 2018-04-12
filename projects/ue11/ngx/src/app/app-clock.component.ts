import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `<p>{{ time }}</p>`
})

export class AppClockComponent implements OnInit, OnDestroy {
  public time: string;

  private _timer: number;

  constructor () {}

  public ngOnInit () {
    console.log('AppClockComponent: ngOnInit');
    this.updateTime();
    this._timer = window.setInterval( () => this.updateTime (), 100); // window steht für das umgebene System
  }

  public ngOnDestroy () {
    console.log('AppClockComponent: destroy');
    if (this._timer !== undefined) {
      window.clearInterval(this._timer); // Das System bracuht diese Methode nicht mehr aufrufen
      this._timer = undefined;
    }
  }

  private updateTime() {
    const now = new Date();
    this.time = now.toLocaleTimeString();
  }
}