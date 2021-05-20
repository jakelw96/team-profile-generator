class Employee {
     constructor(name, email, id) {
         this.name = name;
         this.email = email;
         this.id = id;

    }
    
    getName() {
        const name = this.name;
        return name;
    }

    getId() {
        const id = this.id
        return id;
    }

    getEmail() {
        const email = this.email
        return email;
    }

    getRole() {
        const role = 'Employee';
        return role;
    }
};


module.exports = Employee