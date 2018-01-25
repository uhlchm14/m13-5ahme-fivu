import { Component, OnInit } from '@angular/core';
import { IUser } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './app-user-table.component.html',
})
export class AppUserTableComponent implements OnInit {
  public users: IUser [];
  private userService: UserService;
  public userErr: Error;

  // constructor (userSevice: UserService) {
  //   this.userService = userSevice;
  //   this.users = this.userService.getUsers().then (users => {
  //     this.users = users;
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }

  constructor (userSevice: UserService) {
    this.userService = userSevice;
  }

  public async ngOnInit () {
    try {
    this.users = await this.userService.getUsers();
    } catch (err) {
      console.log(err);
      this.userErr = err;
    }
  }

  public onUserClick (u: IUser) {
    console.log(u);
  }
}
