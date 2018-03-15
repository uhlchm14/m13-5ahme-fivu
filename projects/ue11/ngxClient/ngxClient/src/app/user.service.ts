import { Injectable } from '@angular/core';
import { IUser } from './models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private users: IUser[] = [];

  constructor (private httpClient: HttpClient) {
    // this.users.push({surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
    // this.users.push({surname: 'Kager', firstname: 'Fabian', classname: '5AHME'});
    // this.users.push({surname: 'Ritter', firstname: 'Mario', classname: '5AHME'});
    // this.users.push({surname: 'Fink', firstname: 'Matthias', classname: '5AHME'});
    // this.users.push({surname: 'Ornik', firstname: 'Stefan', classname: '5AHME'});
  }

  public async getUsers (): Promise<IUser []> {
    // return new Promise<IUser []>( (resolve, reject) => {
      // setTimeout( () => {
      //   resolve(this.users);
        // reject(new Error('Users not available'));
      // }, 2000);
      // resolve(this.users);
    // });
    // return this.users;
    // throw new Error('No Connection');
    await this.reloadUsers();
    return this.users;
  }


  private async reloadUsers (): Promise<void> {
    try {
      const result = await this.httpClient.get('/user').toPromise();
    } catch (error) {
      console.log(error);
    }
  }

}
