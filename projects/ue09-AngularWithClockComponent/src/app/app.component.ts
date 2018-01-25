import { Component } from '@angular/core';
import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UE09';
  public isClock2Visible: boolean;
  public users: IUser [] = [];

  constructor () {

  }

  public onClick(event: any) {
    console.log(event);
    console.log('Uhr wurde angeklickt');
    this.isClock2Visible = true;
  }

}

