import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `<p>{{time}}</p>`
})

export class AppClockComponent implements OnInit, OnDestroy {
  public title = 'ue08';
  public time: string;

  private _timer: number;

  constructor() {  }

  public  ngOnInit() {
    console.log('AppClockComponent: ngOnInit');
    setTimeout(() => {
      this.title = 'Tom Clancy\'s Rainbow Six Siege';
    }, 5000);

    this.updateTime();
    this._timer = window.setInterval ( () => this.updateTime(), 100);

  }

  public  ngOnDestroy() {
    console.log('AppClockComponent: ngOnDestroy');
    if (this._timer !== undefined) {
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }


  private updateTime() {
    this.time = new Date().toLocaleTimeString();
  }


}
