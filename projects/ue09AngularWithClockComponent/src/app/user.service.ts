import { Injectable } from '@angular/core';
import { IUser } from './modals/user';

@Injectable()
export class UserService {
    private users: IUser[] = [];
    constructor  () {
        this.users.push({number: 11, surname: 'Kager', firstname: 'Fabian', weight: '75kg'});
        this.users.push({number: 5, surname: 'Sudi', firstname: 'Florin', weight: '128kg'});
    }
    public getUsers (): IUser [] {
        return this.users;
    }
}
