const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

// Creates array of questions about the manager
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
            validate: managerInput => {
                if (managerInput) {
                    if (managerInput.charAt(0) === managerInput.charAt(0).toUpperCase()) {
                        return true;
                    } else {
                        console.log(' Please capitalize the name!');
                        return false;
                    }
                } else {
                    console.log("You must enter the manager's name.")
                    return false;
                }
            }

        },
        {
           type: 'input',
           name: 'employeeID',
           message: "What is the manager's employee ID number?",
           validate: idInput => {
                if (idInput) {
                    if (isNaN(idInput)) {
                        console.log(" Please enter a number for the ID");
                        return false;
                    } else {
                        return true;
                    }
               } else {
                   console.log("Please enter the manager's ID number.");
                   return false;
               }
           }

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    if (isNaN(officeInput)) {
                        console.log(" Please enter a number for the office.");
                        return false;
                    } else {
                        return true;
                    }
               } else {
                   console.log("Please enter the manager's office number.");
                   return false;
               }
           }
        },
        {
            type: 'list',
            name: 'mgrSelect',
            message: "Now that we have the manager's information, what would you like to do?",
            choices: ['Add an engineer', 'Add an intern', 'Finished building my team'],
        }
    ])
    .then(optionReturn => {
        const option = (optionReturn.mgrSelect).toString();
        if (option === 'Add an engineer') {
            engineerQuestions();
        } else if (option === 'Add an intern') {
            internQuestions();
        } else if (option === 'Finished building my team') {
            // Function to compile the data to an html file
        }
    });
};

// Creates array of questions for the engineer
const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            validate: engineerInput => {
                if (engineerInput) {
                    if (engineerInput.charAt(0) === engineerInput.charAt(0).toUpperCase()) {
                        return true;
                    } else {
                        console.log(' Please capitalize the name!');
                        return false;
                    }
                } else {
                    console.log("You must enter the engineer's name.")
                    return false;
                }
            }

        },
    ])
};

// Creates array of questions for the intern
const internQuestions = () => {

};
employQuestions();