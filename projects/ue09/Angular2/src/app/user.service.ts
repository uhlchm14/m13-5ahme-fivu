import { Injectable } from '@angular/core';
import { IUser } from './models/user';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  constructor () {
    this.users.push({surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
    this.users.push({surname: 'Kager', firstname: 'Fabian', classname: '5AHME'});
    this.users.push({surname: 'Ritter', firstname: 'Mario', classname: '5AHME'});
  }

  public getUsers (): IUser [] {
    return [];
  }
}
