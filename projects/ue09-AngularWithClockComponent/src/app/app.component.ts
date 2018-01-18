import { Component } from '@angular/core';

import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'UE09';
  public isClock2Visible: boolean;
  public users: IUser[] = [];

  public onClick(event: any): void {
    console.log('Zeiger weg von der Uhr!');
    console.log(event);
    this.isClock2Visible = !this.isClock2Visible;
  }
}
