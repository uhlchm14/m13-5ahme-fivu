import { Injectable } from '@angular/core';

import {IUser} from './models/user';

@Injectable()
export class UserService {

    private users: IUser[] = [];

    constructor () {
        this.users.push({surename: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
        this.users.push({surename: 'Freyler', firstname: 'Paul', classname: '2AHME'});
        this.users.push({surename: 'Mörth', firstname: 'Markus', classname: '5AHME'});
      }

    public async getUsers (): Promise<IUser []> {
        // return this.users;
        return new Promise<IUser []>( (resolve, reject) => {
            setTimeout( () => {
                // reject(new Error('users not available'));
                resolve(this.users);
            }, 2000);
        });
    }
}
