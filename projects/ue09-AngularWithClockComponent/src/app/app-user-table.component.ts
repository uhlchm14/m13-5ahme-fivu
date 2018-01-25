import { Component, OnInit } from '@angular/core';

import { IUser } from './models/user';
import { UserService } from './user.service';

@Component({
    selector: 'app-user-table',
    templateUrl: './app-user-table.component.html'
})
export class AppUserTableComponent implements OnInit {
    public users: IUser[];
    public userErr: Error;

    constructor(private userService: UserService) {
    }

    public async ngOnInit() {
        try {
        this.users = await this.userService.getUsers();
        } catch (err) {
            console.log(err);
            this.userErr = err;
        }
    }

    public onUserClick(user: IUser): void {
        console.log(user);
    }
}
