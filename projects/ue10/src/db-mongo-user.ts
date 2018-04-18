import { User, IUser } from './user';
import * as mongodb from 'mongodb';

export class DbMongoUser {

    public static async createInstance (socket = 'localhost:27017'): Promise<DbMongoUser>
    {
        if(DbMongoUser._instance)
        {
            throw new Error('instance already created');
        }
        const instance = new DbMongoUser();
        await instance.start();
        DbMongoUser._instance = instance;
        return DbMongoUser._instance;
    }

    private static _instance: DbMongoUser;

    public static get Instance (): DbMongoUser {
        if (!DbMongoUser._instance) { 
            throw new Error('instance not created yet');
            //DbMongoUser._instance = new DbMongoUser();
        }
        return DbMongoUser._instance;
    }

    // ***************************************
    private _users: mongodb.Collection;

    private constructor () {
    }
        

    public async getUserIds (): Promise<string []> {
        const users = await this._users.find({}, {htlid: 1}).toArray();
        const rv: string[] = [];
        for(const u of users)
        {
            rv.push(u.htlid);
        }
        return rv;
    }

    public async getUser (id: string): Promise<User> {
        const users = await this._users.find({htlid: id}).toArray();
        if(users.length === 0)
        {
            return undefined;
        } 
        else if(users.length > 1)
        {
            throw new Error('multiple users with htlid ' + id + 'in database');
        }
        return new User(users[0]);
    }

    private async start () {
        const url = 'mongodb://localhost:27017/m13la1g1';
        
        try {
            const dbServer = await mongodb.MongoClient.connect(url);
            console.log('Database connected');
            
           const dbUsers = dbServer.db('m13la1g1');
           let collUsers = await dbUsers.collection('users');

           let size;
           try{
            const size = await collUsers.count({});
           }
           catch(err)
           {
               collUsers = await dbUsers.createCollection('users');
               size = 0;
           }

           if(size === 0)
           {
            const initUsers: IUser [] = [
                { htlid: 'sx', surname: 'Steiner', firstname: 'Manfred' },
                { htlid: 'kormam13', surname: 'Korosec', firstname: 'Marian' },
                { htlid: 'greflm13', surname: 'Greistorfer', firstname: 'Florian' },
                { htlid: 'harflm13', surname: 'Harrer', firstname: 'Florian' },
                { htlid: 'frelum13', surname: 'Freyler', firstname: 'Lukas' },
                { htlid: 'finmam13', surname: 'Fink', firstname: 'Matthias' },
                { htlid: 'kagfam13', surname: 'Kager', firstname: 'Fabian' }
           ];
           await collUsers.insertMany(initUsers);
           }
           this._users = collUsers; 
           /*const collUsers = await dbUsers.createCollection('users');
           for (const u of initUsers) {
               const dbUser = await collUsers.insert(u);
           } */
        } catch (err) {
            console.log(err);
        }

    

    // this._mapUser.sx = undefined;
    // this._mapUser['sx'] = undefined;
    // const id = 'sx';
    // this._mapUser[id] = undefined;
  /*  const initUsers: IUser [] = [
         { htlid: 'sx', surname: 'Steiner', firstname: 'Manfred' },
         { htlid: 'kormam13', surname: 'Korosec', firstname: 'Marian' },
         { htlid: 'greflm13', surname: 'Greistorfer', firstname: 'Florian' },
         { htlid: 'harflm13', surname: 'Harrer', firstname: 'Florian' },
         { htlid: 'frelum13', surname: 'Freyler', firstname: 'Lukas' },
         { htlid: 'finmam13', surname: 'Fink', firstname: 'Matthias' },
         { htlid: 'kagfam13', surname: 'Kager', firstname: 'Fabian' }
    ]; */

}
}
