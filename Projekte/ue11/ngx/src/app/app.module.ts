import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppClockComponent } from './app-clock.component';  // 1. Importieren
import { AppUsertableComponent } from './app-usertable.components';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent, AppClockComponent, AppUsertableComponent // Eintragen und Einbinden
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule.forRoot()
  ],
  providers: [ UserService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
