import { Component } from '@angular/core';
import {IUser} from './modals/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './app-user-table-component.html',
})
export class AppUserTableComponent {
    public users: IUser[] = [];

    constructor (private userService: UserService) {
        this.users = this.userService.getUsers();
    }

public onUserClick(u: IUser) {
    console.log(u);
  }
}
