import { Component, OnInit } from '@angular/core';
import {IUser} from './modals/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './app-user-table-component.html',
})
export class AppUserTableComponent implements  OnInit {
    public users: IUser[];
    public userErr: Error;

//    constructor (private userService: UserService) {
//        this.userService.getUsers().then (users => {
//            this.users = users;
//        }).catch(err => {
//            console.log(err);
//        });
//    }
    constructor (private userService: UserService) {
        this.userService = userService;
    }
    public async ngOnInit () {
        try {
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
