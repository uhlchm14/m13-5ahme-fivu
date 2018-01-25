import { Injectable } from '@angular/core';
import { IUser } from './models/user';

@Injectable()
export class UserService {
  private _users: IUser[] = [];

  constructor() {
    this._users.push({ surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
    this._users.push({ surname: 'Freyler', firstname: 'Paul', classname: '2AHME'});
    this._users.push({ surname: 'Mörth', firstname: 'Markus', classname: '5AHME'});

  }

  public async getUsers (): Promise<IUser[]> {
    return new Promise<IUser[]> ( (resolve, reject) => {
      setTimeout( () => {
        resolve(this._users);
        // reject(new Error('users not available'));
      }, 2000);
    });
  }

}
