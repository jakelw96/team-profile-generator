const Intern = require('../lib/Intern');

test("Creates an intern object", () => {
    const intern = new Intern('Billy', 'freshman@none.com', '10', 'UofU');

    expect(intern.name).toBe('Billy');
    expect(intern.email).toBe('freshman@none.com');
    expect(intern.id).toEqual('10');

    expect(intern.school).toBe('UofU');
});

test("Gets the name of the interns school", () => {
    const intern = new Intern('Billy', 'freshman@none.com', '10', 'UofU');

    expect(intern.getSchool()).toBe('UofU');
});

test("gets role of the employee", () => {
    const intern = new Intern('Billy', 'freshman@none.com', '10', 'UofU');

    expect(intern.getRole()).toBe('Intern');
});