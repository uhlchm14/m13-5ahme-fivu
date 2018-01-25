import { Injectable } from '@angular/core';
import { IUser } from './modals/user';

@Injectable()
export class UserService {
    private users: IUser[] = [];
    constructor  () {
        this.users.push({number: 11, surname: 'Kager', firstname: 'Fabian', weight: '75kg'});
        this.users.push({number: 5, surname: 'Sudi', firstname: 'Florian', weight: '128kg'});
    }
    public async getUsers (): Promise<IUser []> { // async weil Daten geladen werden => das kann zeit benötigen
       // return this.users;
       return new Promise <IUser []> ((resolve, reject) => {
           setTimeout( () => {
               // reject(new Error ('users not available'));
               resolve(this.users);
           }, 2000);
       });
    }
}
