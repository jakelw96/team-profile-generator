const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);

        this.school = school;
    }

    getSchool() {
        const school = this.school;

        return school;
    }

    getRole() {
        const intern = 'Intern';
        
        return intern;
    }
};

module.exports = Intern