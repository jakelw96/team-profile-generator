const Manager = require('../lib/Manager');

test("Creates a manager object", () => {
    const manager = new Manager('Bob','some@nowhere.com', '2', '005')
    

    expect(manager.name).toBe('Bob');
    expect(manager.email).toBe('some@nowhere.com');
    expect(manager.id).toEqual('2');
    
    expect(manager.office).toEqual('005');
});

test("gets the role of the employee", () => {
    const manager = new Manager('Bob','some@nowhere.com', '2', '005');

    expect(manager.getRole()).toBe('Manager');
});
