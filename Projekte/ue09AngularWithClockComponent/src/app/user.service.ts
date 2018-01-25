import { Injectable } from '@angular/core';
import { IUser } from './models/user';

@Injectable () // Servioces werden bei bedarf eingegeben
export class UserService {
private users: IUser[] = [];

    constructor() { // Service der User zu verfügung stellt.
        this.users.push({ surname: 'Riegelnegg', firstname: 'Dominik', classname: '5AHME'});
        this.users.push({ surname: 'Riegelnegg', firstname: 'Lukas', classname: '1AHME'});
        this.users.push({ surname: 'Markus', firstname: 'Mörth', classname: '5AHME'});
    }

    public async getUsers (): Promise<IUser [] > {
        // Zeit beschaffen

        // return this.users;

        return new Promise<IUser []>( (resolve, reject) => {
            window.setTimeout( () => {
                // reject(new Error('users not available')); // Gibt Fehlermeldung aus
                resolve(this.users); // Liefert Ergebnisse
            }, 2000);
        });
    }
}
