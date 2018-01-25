import { Component } from '@angular/core';
import {IUser} from './models/user';
import { UserService} from './user.service'

@Component({
  selector: 'app-user-table',
  templateUrl: './app-user-table.component.html',

})
export class AppUserTableComponent {
  public users: IUser [] = [];
  private userService: userService;

  constructor (userService: UserService) {
    this.userService = userService;
    this.users = userService.getUsers;
  }
  public onUserClick ( u:IUser)
  {
    console.log(u);
  }
}



  