import { Injectable } from '@angular/core';
import { IUser } from './models/user';
import { HttpClient } from '@angular/common/http';

@Injectable () // Servioces werden bei bedarf eingegeben
export class UserService {
private users: IUser[] = [];

    constructor(private httpClient: HttpClient) { // Service der User zu verfügung stellt.
        //this.users.push({ surname: 'Riegelnegg', firstname: 'Dominik', classname: '5AHME'});
        //this.users.push({ surname: 'Riegelnegg', firstname: 'Lukas', classname: '1AHME'});
        //this.users.push({ surname: 'Markus', firstname: 'Mörth', classname: '5AHME'});
    }

    public async getUsers (): Promise<IUser[]> {
        // Zeit beschaffen

        // return this.users;

            //return new Promise<IUser[]>( (resolve, reject) => {
            //window.setTimeout( () => {
            //    // reject(new Error('users not available')); // Gibt Fehlermeldung aus
            //    resolve(this.users); // Liefert Ergebnisse
            //}, 2000);
            // resolve(this.users);
           // });
           await this.reloadUsers();
           return this.users;
    }

    private async reloadUsers (): Promise<void> {
        try {
        const result = await this.httpClient.get('/users').toPromise();
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
    } 

}
