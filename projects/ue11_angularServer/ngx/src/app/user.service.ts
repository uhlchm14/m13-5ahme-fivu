import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from './models/user';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  constructor(private http: HttpClient) {
    // this.users.push({ surname: 'Freyler', firstname: 'Lukas', classname: '5AHME' });
    // this.users.push({ surname: 'Freyler', firstname: 'Paul', classname: '2AHME' });
    // this.users.push({ surname: 'Mörth', firstname: 'Markus', classname: '5AHME' });
    // this.users.push({ surname: 'Harrer', firstname: 'Florian', classname: '5AHME' });
    // this.users.push({ surname: 'Pölzl', firstname: 'Fabio', classname: '5AHME' });
    // this.users.push({ surname: 'Pichler', firstname: 'Dominik', classname: '5AHME' });
  }

  public async getUsers(): Promise<IUser[]> {
    await this.httpGet('/users')
      .then((res) => {
        this.users = res;
      })
      .catch(err => console.log(err));
    return this.users;
    // return new Promise<IUser[]>((resolve, reject) => {
    //   // setTimeout(() => {
    //   //   // reject(new Error('users not available'));
    //   //   resolve(this.users);
    //   // }, 2000);
    //   resolve(this.users);
    // });
  }

  public async httpGet(path: string): Promise<any> {
    return await this.http
      .get(path)
      .toPromise()
      .catch(err => this.errorHandler(err));
  }

  private errorHandler(err: Error) {
    return Promise.reject('Http get error');
  }
}
