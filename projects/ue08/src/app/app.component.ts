import { Component, OnInit} from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'ue08';

  constructor () {
  }
  public ngOnInit () {
    console.log('ngOnInit');
    setTimeout( () => {
      this.title = 'Hallo';
    }, 5000);
  }
}
