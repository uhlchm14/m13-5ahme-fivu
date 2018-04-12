import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {NgbAccordionConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    BrowserModule, HttpClientModule, NgbModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
