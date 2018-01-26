import { Component , OnInit} from '@angular/core';
import { IUser } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './app.usertable.component.html'
})
export class AppUserTableComponent implements OnInit {

  public users: IUser [];    // Interface
  private userService: UserService;
  public userErr: Error;

 /* constructor (userService: UserService) {        Variante 1
    this.userService = userService;
    this.userService.getUsers().then (users => {
      this.users = users;
    }).catch (err => {
      console.log(err);
    });
  }
  */

  constructor (userService: UserService) {
    this.userService = userService;
  }

  public async ngOnInit () {                          // Für Protokoll      Variante 2
    try {                                                     // Try Catch ist für das Erkennen von Fehlern
      this.users = await this.userService.getUsers();
    } catch (err) {
      console.log(err);
      this.userErr = err;
    }
  }

  public onUserClick(u: IUser) {
    console.log(u);
  }
}
