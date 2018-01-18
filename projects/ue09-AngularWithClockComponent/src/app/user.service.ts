import { Injectable } from '@angular/core';

import { IUser } from './models/user';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  constructor() {
    this.users.push({ surname: 'Freyler', firstname: 'Lukas', classname: '5AHME' });
    this.users.push({ surname: 'Freyler', firstname: 'Paul', classname: '2AHME' });
    this.users.push({ surname: 'Mörth', firstname: 'Markus', classname: '5AHME' });
    this.users.push({ surname: 'Harrer', firstname: 'Florian', classname: '5AHME' });
    this.users.push({ surname: 'Pölzl', firstname: 'Fabio', classname: '5AHME' });
    this.users.push({ surname: 'Pichler', firstname: 'Dominik', classname: '5AHME' });
  }

  public getUsers(): IUser[] {
    return this.users;
  }

}
