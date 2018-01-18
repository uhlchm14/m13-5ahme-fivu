import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppClockComponent } from './app-clock.component';  // 1. Importieren
import { AppUsertableComponent } from './app-usertable.components';

@NgModule({
  declarations: [
    AppComponent, AppClockComponent, AppUsertableComponent // Eintragen und Einbinden
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
