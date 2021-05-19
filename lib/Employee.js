class Employee {
     constructor(name, id, email, role) {
         this.name = name;
         this.id = id;
         this.email = email;
         this.role = role;
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
        const role = this.role
        return role;
    }
};


module.exports = Employee