import { Injectable } from '@angluar/core';
import { IUser } from ''
@Injectable ()
export class UserService {
private users: IUser[] = [];

    constructor() {
        this.users.push({ surname: 'Riegelnegg', firstname: 'Dominik', classname: '5AHME'});
        this.users.push({ surname: 'Riegelnegg', firstname: 'Lukas', classname: '1AHME'});
        this.users.push({ surname: 'Markus', firstname: 'Mörth', classname: '5AHME'});
    }

    public getUsers (): IUser [] {
        return this.users;
    }
}
