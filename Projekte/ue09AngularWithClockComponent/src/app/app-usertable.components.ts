import { Component } from '@angular/core';
import { IUser } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './app-usertable.component.html'
})
export class AppUsertableComponent {
  public users: IUser [] = [];
  private userService: UserService;

  constructor (userService: UserService) {
    this.userService = userService;
    this.users = this.userService.getUsers();
  }

  public onUserClick (u: IUser) {
      console.log(u);
  }
}
