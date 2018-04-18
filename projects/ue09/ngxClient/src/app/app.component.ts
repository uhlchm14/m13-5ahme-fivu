import { Component } from '@angular/core';
import { IUser } from './modules/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public title = 'ue09';
  public isClock2Visible: boolean;

  public onClick(event: any)
  {
    console.log('A Pfosten hot die Uhr auklickt. ' + event);

    this.isClock2Visible = true;
  }
}
