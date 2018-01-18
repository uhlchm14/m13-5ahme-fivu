import { Component } from '@angular/core';
import { IUser } from './modals/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ue09';
  public isClock2Visible: boolean;
  public users: IUser[] = [];

  constructor () {

  }

  public onClick(event: any) {
    console.log('Uhr wurde angeklickt');
    console.log(event);
    this.isClock2Visible = true;
  }
}

