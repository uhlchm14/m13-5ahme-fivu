
export interface IUser {
    htlid: string;
    surname: string;
    firstname: string;
    class?: string;
    birthdate?: Date | number;
}

export class User implements IUser {

    private _htlid:      string;
    private _surname:    string;
    private _firstname:  string;
    private _class?:     string;
    private _birthdate?: Date;

    constructor (data: IUser) {
        try {
            if (!data.htlid || typeof data.htlid !== 'string') {
                throw new Error('invalid/misssing htlid');
            }
            this._htlid = data.htlid;

            if (!data.surname || typeof data.surname !== 'string') {
                throw new Error('invalid/misssing surname');
            }
            this._surname = data.surname;

            if (!data.firstname || typeof data.firstname !== 'string') {
                throw new Error('invalid/misssing firstname');
            }
            this._firstname = data.firstname;

            if (data.class !== undefined) {
                if (!data.class || typeof data.class !== 'string') {
                    throw new Error('invalid class');
                }
                this._class = data.class;
            }

            if (data.birthdate !== undefined) {
                const millis = data.birthdate instanceof Date ?
                               data.birthdate.getTime() :
                               data.birthdate;
                if (isNaN(millis)) {
                    throw new Error('illegal birthdate');
                }
                this._birthdate = new Date(millis);
            }
            if (Object.keys(this).length !== Object.keys(data).length) {
                throw new Error('invalid attributes');
            }

        } catch (err) {
            console.log(err);
            console.log('invalid IUser');
        }
    }

    public toObject (): IUser {
        const rv: IUser = {
            htlid: this._htlid,
            surname: this._surname,
            firstname: this._firstname
        }
        if (this._birthdate) { rv.birthdate = this._birthdate; }
        if (this._class) { rv.class = this._class; }
        return rv;
    }

    public get htlid (): string {
        return this._htlid;
    }

    public get surname (): string {
        return this._surname;
    }

    public get firstname (): string {
        return this._firstname;
    }

    public get class (): string {
        return this._class;
    }

    public get birthdate (): Date {
        return this._birthdate;
    }

    public get birthdateMillis (): number {
        return this._birthdate.getTime();
    }

}
