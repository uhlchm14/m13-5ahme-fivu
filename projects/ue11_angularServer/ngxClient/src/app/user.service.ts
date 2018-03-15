import { Injectable } from '@angular/core';
import { IUser } from './models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    private users: IUser [] = [];

    constructor(private httpClient: HttpClient) {

        // this.users.push({surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
        // this.users.push({surname: 'Freyler', firstname: 'Paul', classname: '2AHME'});
        // this.users.push({surname: 'Mörth', firstname: 'Markus', classname: '5AHME'});
    }

    public async getUsers (): Promise<IUser []> {
        // return this.users;
        // return new Promise<IUser []>( (resolve, reject) => {
        //     setTimeout( () => {
        //         // reject(new Error('users not available'));
        //         resolve(this.users);
        //     }, 2000);
        //    await this.reloadUsers();
        //    resolve(this.users);
        // });
        await this.reloadUsers();
        return this.users;
    }

    private async reloadUsers (): Promise<void> {
        try {
            const result = await this.httpClient.get('/users').toPromise();
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }
}
