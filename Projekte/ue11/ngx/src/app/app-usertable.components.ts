import { Component, OnInit } from '@angular/core';
import { IUser } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './app-usertable.component.html'
})
export class AppUsertableComponent implements OnInit {
  public users: IUser [];
  public userErr: any ;
  private userService: UserService;

  // constructor (userService: UserService) {
    // this.userService = userService;
    // this.users = this.userService.getUsers().then (users => this.users = users;
    // }.catch(err => {
     //  console.log(err);

   // });
 // }

  constructor (userService: UserService) {
    this.userService = userService;
   // this.users = await this.userService.getUsers(); // Im Konstructor keine Zeitverzögerung erlaubt!

  }

  public async ngOnInit() {
    try {
      this.users = await this.userService.getUsers(); // Erst wenn Benutzer aufgerufen wird, läd er die Tabelle
    } catch (err) {
      console.log(err);
    }
  }

  public onUserClick (u: IUser) {
      console.log(u);
  }
}

