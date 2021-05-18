const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');

test("Creates an employee object", () => {
    const employee = new Employee('Bob');

    expect(employee.name).toBe('Bob');
    expect(employee.email).toBe('something@nowhere.com');
    expect(employee.id).toEqual(expect.any(Number));
});

test("Gets the name of the employee", () => {
    const employee = new Employee('Bob');

    expect(employee.name).toBe('Bob');
});

test("Gets the id of the employee", () => {
    const employee = new Employee('Bob');

    expect(employee.id).toEqual(expect.any(Number));
});

test ("Gets the email of the employee", () => {
    const employee = new Employee('Bob');

    expect(employee.email).toBe('something@nowhere.com')
});

test("Gets the role of the employee", () => {
    const employee = new Employee('Bob');

    expect(employee.role).toBe('Employee');
});