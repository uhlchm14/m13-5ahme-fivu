import { Injectable } from '@angular/core';
import { IUser } from './models/user';

@Injectable()
export class UserService {

    private users: IUser[] = [];
    constructor () {
      this.users.push({ surname: 'Mörth', firstname: 'Markus', classname: '5AHME'});
      this.users.push({ surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'});
      this.users.push({ surname: 'Freyler', firstname: 'Paul', classname: '2AHME'});
    }

    public async getUsers (): Promise<IUser []> {           // Für Protokoll
        // return this.users;
        return new Promise<IUser []>( (resolve, reject) => { // Callback Methoden um Fehler zu liefern und 
            setTimeout ( () => {
                // reject(new Error('users not available'));
                resolve(this.users);
            }, 2000);
        // throw new Error('users not available');
    });
}
}
