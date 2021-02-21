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
        return this._users[id];
    }

    getUsers() {
        return Object.keys(this._users);
    }

    deleteUser(id) {
        if (id in this._users) {
            delete this._users[id];
        }
    }

    deleteUsers() {
        this._users = {};
    }
}

module.exports = new DaoManager();