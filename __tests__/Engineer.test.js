const Engineer = require('../lib/Engineer');

test("Creates a engineer object", () => {
    const engineer = new Engineer('Tim','some@nowhere.com', '7', 'somecode34');
    

    expect(engineer.name).toBe('Tim');
    expect(engineer.email).toBe('some@nowhere.com');
    expect(engineer.id).toEqual('7');
    
    expect(engineer.github).toBe('somecode34');
});

test("gets the github username of the engineer", () => {
    const engineer = new Engineer('Tim','some@nowhere.com', '7', 'somecode34');

    expect(engineer.getGitHub()).toBe('somecode34');
});

test("gets the role of the employee", () => {
    const engineer = new Engineer('Tim','some@nowhere.com', '7', 'somecode34');

    expect(engineer.getRole()).toBe('Engineer');
});