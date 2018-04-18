import { Injectable } from '@angular/core';
import { IUser } from './modules/user';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class UserService
{
    public users: IUser [] = [];
    
      constructor(private httpClient: HttpClient)
      {
        /*this.users.push({firstname: 'Florian', surname: 'Harrer', class: '5AHME'});
        this.users.push({firstname: 'Florian', surname: 'Greistorfer', class: '5AHME'});
        this.users.push({firstname: 'Dominik', surname: 'Riegelnegg', class: '5AHME'});
        this.users.push({firstname: 'Dominik', surname: 'Pichler', class: '5AHME'});
        this.users.push({firstname: 'Julian', surname: 'Wolf', class: '5AHME'});
        this.users.push({firstname: 'Markus', surname: 'Mörth', class: '5AHME'});
        this.users.push({firstname: 'Lukas', surname: 'Freyler', class: '5AHME'});
        this.users.push({firstname: 'Fabian', surname: 'Kager', class: '5AHME'});
        this.users.push({firstname: 'Mario', surname: 'Ritter', class: '5AHME'});
        this.users.push({firstname: 'Matthias', surname: 'Fink', class: '5AHME'});
        this.users.push({firstname: 'Fabio', surname: 'Pölzl', class: '5AHME'});*/
      }

    public async getUsers (): Promise<IUser []>
    {
        /*return new Promise<IUser []>( (resolve, reject) => {
          setTimeout( () => {
            // reject(new Error('Kane User'));
            resolve(this.users);
          }, 2000); 
          await this.reloadUsers();
          resolve(this.users);
        }); */
        await this.reloadUsers();
        return this.users;
    }

    private async reloadUsers (): Promise<void> {
       try
       {
         const result = await this.httpClient.get('/users').toPromise();
         console.log(result);
       }
       catch(err)
       {
         console.log(err);
       }
    }
}
