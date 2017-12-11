import { User, IUser } from './user';


export class DbUser {
    private static _instance: DbUser;

    public static get Instance (): DbUser {

        if(!DbUser._instance)
        {
            DbUser._instance = new DbUser;
        }
        return DbUser._instance;
    }

    // ****************************************************

    private _mapUser: { [id: string]: User } = {};
    private constructor() {
        const initUser: IUser [] = [
            { htlid: 'sx', surname: 'Steiner', firstname: 'Manfred' },
            { htlid: 'kormam13', surname: 'Korosec', firstname: 'Marian' },
            { htlid: 'finmam13', surname: 'Fink', firstname: 'Matthias' },
            { htlid: 'frelum13', surname: 'Freyler', firstname: 'Lukas' }
        ];

        for (const u of initUser) {
            this._mapUser[u.htlid] = new User(u);
        }
        }

        public getUserIds(): string [] {
            return Object.keys(this._mapUser);
        }

        // Abfrage der Benutzer
        public getUser(id: string): User {
            return this._mapUser[id];
         }
    }
