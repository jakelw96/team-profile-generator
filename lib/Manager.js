const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);

        this.office = officeNumber;
    }

    getRole() {
        const role = 'Manager';
        return role;
    }
};

module.exports = Manager