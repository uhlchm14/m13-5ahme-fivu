import { Component } from '@angular/core';

import { IUser } from './modules/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './app-user-table.component.html'
})
export class AppUserTableComponent
{
  public users: IUser [] = [];
  private userService: UserService;

  constructor (userService: UserService)
  {
      this.userService = userService;
      this.users = this.userService.getUsers();
  }

  public onUserClick(user: IUser)
  {
    console.log('Warum klickst du ' + user.firstname + ' ' + user.surname + ' an?');
  }
}
