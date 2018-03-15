import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from './models/user';

@Injectable()
export class UserService {
    private _users: IUser[] = [];

    constructor(private http: HttpClient) {  }

    public async getUsers (): Promise<IUser[]> {
        // return new Promise<IUser[]> ( (resolve, reject) => {
        //     setTimeout( () => {
        //         resolve(this._users);
        //         // reject(new Error('users not available'));
        //     }, 2000);
        // });
        await this.reloadUsers();
        return this._users;
    }

    public async reloadUsers(): Promise<void> {
        try {
        const users = await this.http.get('/users').toPromise();
        console.log(users);
        } catch (err) {
            console.log(err);
        }
    }

}
