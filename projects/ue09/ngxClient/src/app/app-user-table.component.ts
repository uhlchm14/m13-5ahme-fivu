import { Component, OnInit } from '@angular/core';

import { IUser } from './modules/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './app-user-table.component.html'
})
export class AppUserTableComponent implements OnInit
{
  public users: IUser [];
  public userErr: Error;
  private userService: UserService;

  /*constructor (userService: UserService)
  {
      this.userService = userService;
      this.userService.getUsers().then (users => {
        this.users = users;
      }).catch(err => {
        console.log(err);
      });
  }*/

  constructor (userService: UserService)
  {
      this.userService = userService;
  }

  public async ngOnInit ()
  {
    try
    {
      this.users = await this.userService.getUsers();
    }
    catch (err)
    {
      console.log(err);
      this.userErr = err;
    }
  }

  public onUserClick(user: IUser)
  {
    console.log('Warum klickst du ' + user.firstname + ' ' + user.surname + ' an?');
  }

  public onLoadClick(event: any)
  {
    console.log('Moch kan Stress. I lod grod.');
  }

  public onErrorClick(event: any)
  {
    console.log('Warum klickst du Pfosten a Fehlermeldung an?');
  }
}
