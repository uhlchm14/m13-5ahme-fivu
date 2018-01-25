import { Component } from '@angular/core';
import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ue09';
  public isClock2Visible: boolean;
  public users: IUser [] = [];

  constructor() {
  }



  public onClick (event: any) {
    console.log('Click wurde aktiviert!');
    console.log(event);
    if (this.isClock2Visible === true) {
      this.isClock2Visible = false;
    } else {
    this.isClock2Visible = true;
    }
  }

}

