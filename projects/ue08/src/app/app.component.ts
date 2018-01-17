import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy
{
  public title = 'ue08';
  public time: string;

  private _timer: number;

  constructor ()
  {
    
  }

  public ngOnInit ()
  {
    setTimeout( () => {
      this.title = '... to slow';
    }, 5000);

    this.updateTime();
    this._timer = window.setInterval( () => this.updateTime(), 100);
  }

  public ngOnDestroy ()
  {
    if(this._timer !== undefined)
    {
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }

  private updateTime ()
  {
    const now = new Date();
    this.time = now.toLocaleTimeString();
  }
}
