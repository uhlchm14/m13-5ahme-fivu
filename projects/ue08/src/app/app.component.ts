import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ue08';

  constructor () {
  }

  public ngOnInit () {
    setTimeout(() => {
      this.title = '1234';
    }, 5000);
  }
}
