import { User, IUser } from './user';

export class DbUser {

    private static _instance: DbUser;

    public static get Instance (): DbUser {
        if (!DbUser._instance) {
            DbUser._instance = new DbUser();
        }
        return DbUser._instance;
    }

    // ***************************************

    private _mapUser: { [ id: string ]: User } = {};

    private constructor () {
        // this._mapUser.sx = undefined;
        // this._mapUser['sx'] = undefined;
        // const id = 'sx';
        // this._mapUser[id] = undefined;
        const initUsers: IUser [] = [
             { htlid: 'sx', surname: 'Steiner', firstname: 'Manfred' },
             { htlid: 'kormam13', surname: 'Korosec', firstname: 'Marian' },
             { htlid: 'greflm13', surname: 'Greistorfer', firstname: 'Florian' },
             { htlid: 'harflm13', surname: 'Harrer', firstname: 'Florian' },
             { htlid: 'frelum13', surname: 'Freyler', firstname: 'Lukas' },
             { htlid: 'finmam13', surname: 'Fink', firstname: 'Mathias' },
             { htlid: 'kagfam13', surname: 'Kager', firstname: 'Fabian' }
        ];
        for (const u of initUsers) {
            this._mapUser[u.htlid] = new User(u);
        }
    }

    public getUserIds (): string [] {
        return Object.keys(this._mapUser);
    }

    public getUser (id: string): User {
        return this._mapUser[id];
    }
}
