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
    this.users.push({surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
    this.users.push({surname: 'Freyler', firstname: 'Paul', classname: '2AHME'});
    this.users.push({surname: 'Mörth', firstname: 'Markus', classname: '5AHME'});
  }

  public onClick(event: any) {
    console.log(event);
    console.log('Uhr wurde angeklickt');
    this.isClock2Visible = true;
  }

}

