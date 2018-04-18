"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(data) {
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
        }
        catch (err) {
            console.log(err);
            console.log('invalid IUser');
        }
    }
    toObject() {
        const rv = {
            htlid: this._htlid,
            surname: this._surname,
            firstname: this._firstname
        };
        if (this._birthdate) {
            rv.birthdate = this._birthdate;
        }
        if (this._class) {
            rv.class = this._class;
        }
        return rv;
    }
    get htlid() {
        return this._htlid;
    }
    get surname() {
        return this._surname;
    }
    get firstname() {
        return this._firstname;
    }
    get class() {
        return this._class;
    }
    get birthdate() {
        return this._birthdate;
    }
    get birthdateMillis() {
        return this._birthdate.getTime();
    }
}
exports.User = User;

//# sourceMappingURL=user.js.map
