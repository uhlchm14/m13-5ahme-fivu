import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppClockComponent } from './app-clock-component';
import { AppUserTableComponent } from './app-user-table-component';
import { UserService } from './user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, AppClockComponent, AppUserTableComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
