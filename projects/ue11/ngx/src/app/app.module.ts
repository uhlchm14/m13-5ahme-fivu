import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppClockComponent } from './app-clock.component';
import { AppUserTableComponent } from './app-user-table.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AppClockComponent,
    AppUserTableComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
