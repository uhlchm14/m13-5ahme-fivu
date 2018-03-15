import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { AppClockComponent } from './app-clock.component';
import { AppUserTableComponent } from './app-user-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AppClockComponent, AppUserTableComponent],
  imports: [NgbModule.forRoot(), BrowserModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
