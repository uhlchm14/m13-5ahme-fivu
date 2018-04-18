
import { DbMongoUser} from './db-mongo-user';
import { Server } from './server';

class Main {
    constructor () {
       
    }

    public async init() {
        const db = await DbMongoUser.createInstance();
        Server.Instance.start(4711);
    }
}

async function main() {
    const mainObj = new Main();
    await mainObj.init;
    const ids = await DbMongoUser.Instance.getUserIds();
    console.log(ids);
}

