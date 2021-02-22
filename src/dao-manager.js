const user = require('./user.js')

class DaoManager {

    constructor() {
        this._users = {};
    }

    createUser() {
        const newUser = new user();
        this._users[newUser.id] = newUser;
        return newUser;
    }

    selectUser(id) {
        if (id in this._users) {
            return this._users[id];
        }
        throw new Error("User id is not found");
    }

    getUsers() {
        return Object.keys(this._users);
    }

    deleteUser(id) {
        if (id in this._users) {
            delete this._users[id];
            return;
        }
        throw new Error("User id is not found");
    }

    deleteUsers() {
        this._users = {};
    }
}

module.exports = new DaoManager();