const daoManager = require('../src/dao-manager');

describe("Test of dao-manager", () => {

    afterEach(() => {
        daoManager.deleteUsers();
    });
    
    test("createUser is success", () => {
        const user = daoManager.createUser();
        expect(user.id.length).toBe(16);
        expect(user.password.length).toBe(16);
        expect(user.accessKey.length).toBe(32);
    });

    test("selectUser is success", () => {
        const user = daoManager.createUser();
        const actucalUser = daoManager.selectUser(user.id);
        expect(actucalUser.id).toBe(user.id);
        expect(actucalUser.password).toBe(user.password);
        expect(actucalUser.accessKey).toBe(user.accessKey);
    });

    test("selectUser is failure with not found", () => {
        const actucalUser = daoManager.selectUser("invalid");
        expect(actucalUser).toBe(undefined);
    });

    test("deleteUser is success", () => {
        const user = daoManager.createUser();
        daoManager.deleteUser(user.id);
        const actucalUser = daoManager.selectUser(user.id);
        expect(actucalUser).toBe(undefined);
    });

    test("deleteUser is failure with not found", () => {
        const user = daoManager.createUser();
        daoManager.deleteUser("invalid");
        const actucalUser = daoManager.selectUser(user.id);
        expect(actucalUser.id).toBe(user.id);
    });
});