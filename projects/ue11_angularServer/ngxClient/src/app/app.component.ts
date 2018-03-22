import { Component } from '@angular/core';
import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'ue09';
  public isClock2Visible: boolean;
  public users: IUser [] = [];

  constructor () {  }

  public onClick(event: any) {
    console.log('onClick: why are you touching the clock?!?');
    console.log(event);
    this.isClock2Visible = true;
  }

}
