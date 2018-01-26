import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';     // WFWEFEWFD


import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { AppClockComponent } from './app-clock.component';
import { AppUserTableComponent} from './app.usertable.component';


@NgModule({
  declarations: [
    AppComponent, AppClockComponent, AppUserTableComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()    // hksdgas
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
