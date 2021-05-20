const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/page-template');



const employeeArr = [];

// Creates array of questions about the manager
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
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
           name: 'mgrID',
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
            name: 'mgrEmail',
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
        const role = new Manager().getRole()
        console.log(role)
        const employee = new Manager(optionReturn.mgrName, optionReturn.mgrID, optionReturn.mgrEmail, optionReturn.office);
        employeeArr.push(employee);
        
        if (option === 'Add an engineer') {
            engineerQuestions();
        } else if (option === 'Add an intern') {
            internQuestions();
        } else if (option === 'Finished building my team') {
            compileData()
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
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's employee ID number?",
            validate: idInput => {
                 if (idInput) {
                     if (isNaN(idInput)) {
                         console.log(" Please enter a number for the ID");
                         return false;
                     } else {
                         return true;
                     }
                } else {
                    console.log("Please enter the engineer's ID number.");
                    return false;
                }
            }
 
         },
         {
             type: 'input',
             name: 'engineerEmail',
             message: "What is the engineer's email address?",
             validate: emailInput => {
                 if (emailInput) {
                     return true;
                 } else {
                     console.log("Please enter the engineer's email address.");
                     return false;
                 }
             }
         },
         {
             type: 'input',
             name: 'github',
             message: "What is the engineer's GitHub username?",
             validate: gitInput => {
                 if (gitInput) {
                     return true;
                } else {
                    console.log("Please enter the engineer's GitHub username.");
                    return false;
                }
            }
         },
         {
             type: 'list',
             name: 'engineerSelect',
             message: "Now that we have the engineer's information, what would you like to do?",
             choices: ['Add an engineer', 'Add an intern', 'Finished building my team'],
         }
    ])
    .then(optionReturn => {
        const option = (optionReturn.engineerSelect).toString();
        const employee = new Engineer(optionReturn.engineerName, optionReturn.engineerEmail, optionReturn.engineerID, optionReturn.github);
        employeeArr.push(employee);
        
        if (option === 'Add an engineer') {
            engineerQuestions();
        } else if (option === 'Add an intern') {
            internQuestions();
        } else if (option === 'Finished building my team') {
            compileData()
        }
    });
};

// Creates array of questions for the intern
const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
            validate: internInput => {
                if (internInput) {
                    if (internInput.charAt(0) === internInput.charAt(0).toUpperCase()) {
                        return true;
                    } else {
                        console.log(' Please capitalize the name!');
                        return false;
                    }
                } else {
                    console.log("You must enter the intern's name.")
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's employee ID number?",
            validate: idInput => {
                 if (idInput) {
                     if (isNaN(idInput)) {
                         console.log(" Please enter a number for the ID");
                         return false;
                     } else {
                         return true;
                     }
                } else {
                    console.log("Please enter the intern's ID number.");
                    return false;
                }
            }
 
         },
         {
             type: 'input',
             name: 'internEmail',
             message: "What is the intern's email address?",
             validate: emailInput => {
                 if (emailInput) {
                     return true;
                 } else {
                     console.log("Please enter the intern's email address.");
                     return false;
                 }
             }
         },
         {
             type: 'input',
             name: 'school',
             message: "What is the intern's school name?",
             validate: schoolInput => {
                 if (schoolInput) {
                     return true;
                } else {
                    console.log("Please enter the intern's school name.");
                    return false;
                }
            }
         },
         {
             type: 'list',
             name: 'internSelect',
             message: "Now that we have the intern's information, what would you like to do?",
             choices: ['Add an intern', 'Add an intern', 'Finished building my team'],
         }
    ])
    .then(optionReturn => {
        const option = (optionReturn.internSelect).toString();
        const employee = new Intern(optionReturn.internName, optionReturn.internEmail, optionReturn.internID, optionReturn.school);
        employeeArr.push(employee);
        
        if (option === 'Add an engineer') {
            engineerQuestions();
        } else if (option === 'Add an intern') {
            internQuestions();
        } else if (option === 'Finished building my team') {
            compileData()
        }
    });
};



// Takes data and compiles into HTML
const compileData = (data) => {
    data = employeeArr
    return pageTemplate(data)
}
    
managerQuestions()
