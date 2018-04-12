import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'UE09';

  public isClock2Visible: boolean;

  public onClick (event: any) {
    console.log('Uhr wurde angeklickt');
    console.log(event);
    this.isClock2Visible = true;
  }

 
}


