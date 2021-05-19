const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);

        this.github = github;
    }

    getGitHub() {
        const username = this.github

        return username;
    }

    getRole() {
        const role = 'Engineer';

        return role;
    }
};

module.exports = Engineer