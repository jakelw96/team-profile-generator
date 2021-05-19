const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee');


test("Creates an employee object", () => {
    const employee = new Employee('Bob', 'something@none.com', '1');

    expect(employee.name).toBe('Bob');
    expect(employee.email).toBe('something@none.com');
    expect(employee.id).toEqual('1');
});

test("Gets the name of the employee", () => {
    const employee = new Employee('Bob', 'something@none.com', '1');

    expect(employee.getName()).toBe('Bob');
});

test("Gets the id of the employee", () => {
    const employee = new Employee('Bob', 'something@none.com', '1');

    expect(employee.getId()).toEqual('1');
});

test ("Gets the email of the employee", () => {
    const employee = new Employee('Bob', 'something@none.com', '1');

    expect(employee.getEmail()).toBe('something@none.com');
});

test("Gets the role of the employee", () => {
    const employee = new Employee('Bob', 'something@none.com', '1');

    expect(employee.getRole()).toBe('Employee');
});