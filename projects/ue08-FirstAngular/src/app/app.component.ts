import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'your anus';
  private width = 1;

  constructor() {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.title = 'uranus';
    }, 500);
    setInterval(() => {
      this.width++;
    }, 100);
  }
}
