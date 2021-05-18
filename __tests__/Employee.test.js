const Employee = require('../lib/Employee.js');

test("Creates an employee object", () => {
    const employee = new Employee('Jake');

    expect(employee.name).toBe('Jake');
    expect(employee.email).toBe('jake.lw96@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
});