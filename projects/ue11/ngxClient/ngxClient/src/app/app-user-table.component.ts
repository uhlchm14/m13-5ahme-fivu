import { Component, OnInit } from '@angular/core';
import {IUser} from './models/user';
import {UserService} from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './app-user-table.component.html',
})

export class AppUserTableComponent implements OnInit {
  public users: IUser[];
  public userErr: Error;

  constructor (private userService: UserService) {
    this.userService = userService;
    // this.userService.getUsers().then (users => {
    // this.users = users;
    // }).catch (err => {
    //  console.log(err);
    // });
  }

  public async ngOnInit () {
    try {
      this.users = await this.userService.getUsers();
    } catch (err) {
      this.userErr = err;
      console.log(err);
    }
  }

  public onClickUser(u: IUser) {
    console.log(u);
  }
}
