import { Component } from '@angular/core';
import { IUser } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'UE09';
  public isClock2Visible: boolean;
  public users: IUser [] = [];

  constructor () {
    
  }

  public onClick (event : any) {
    console.log('Uhr wurde angeclickt');
    console.log(event);
    this.isClock2Visible = true;
  }

  
}
