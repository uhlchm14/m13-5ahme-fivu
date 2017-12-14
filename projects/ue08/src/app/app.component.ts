import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UE08';

  constructor () {  }

  public ngOnInit () {
    console.log('Hallo, I bims, in da Konsole');
    setTimeout( () => {
      this.title = 'the Family';
    }, 5000);
  }
}
