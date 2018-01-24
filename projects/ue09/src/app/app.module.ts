import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { AppClockComponent } from './app-clock.component';
import { AppUserTableComponent } from './app-user-table.component';


@NgModule({
  declarations: [
    AppComponent,
    AppClockComponent,
    AppUserTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
