{
    class User {
        constructor() {
            this._id = createRandomString(16);
            this._password = createRandomString(16);
            this._accessKey = createRandomString(32);
        }
        get id() {
            return this._id;
        }
        get password() {
            return this._password;
        }
        get accessKey() {
            return this._accessKey;
        }
    }

    module.exports = User;

    const createRandomString = (length) => {
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const s = Array.from(Array(length))
                .map(()=>characters[Math.floor(Math.random()*characters.length)])
                .join('');
        return s;
    }
}