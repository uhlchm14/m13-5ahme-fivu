import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'your anus';
  public width = 1;
  public show = false;
  public time: string;
  private interval: number;

  constructor() { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.title = 'uranus';
    }, 500);
    const interval = setInterval(() => {
      this.width++;
      if (this.width > 500) {
        clearInterval(interval);
        this.show = true;
      };
    }, 10);
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

  public reload(): void {
    location.reload();
  }

  private updateTime() {
    this.time = new Date().toLocaleTimeString();
  }
}
