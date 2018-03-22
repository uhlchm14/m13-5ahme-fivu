import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IUser } from './models/user';

@Injectable()
export class UserService {
    private users: IUser[] = [];

constructor(private httpClient: HttpClient) {
    // this.users.push({surname: 'Fink', firstname: 'Matthias', classname: '5AHME'})
    // this.users.push({surname: 'Freyler', firstname: 'Lukas', classname: '5AHME'})
    // this.users.push({surname: 'Greistorfer', firstname: 'Florian', classname: '5AHME'})
    // this.users.push({surname: 'Harrer', firstname: 'Florian', classname: '5AHME'});
}

public async getUsers (): Promise<IUser []> {
    // return this.users;
    // return new Promise<IUser []> ( (resolve, reject) => {
    // window.setTimeout( () => {
    //     // reject(new Error('users not available'));
    //     resolve(this.users);
    // }, 2000);
    // await this.reloadUsers();
    //     resolve(this.users);
    // });
    await this.reloadUsers().then((res)=> {
    this.users = res;
    });
    return this.users;
}

private async reloadUsers (): Promise<any> {
    try {
        const result = await this.httpClient.get('/users').toPromise();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

}
