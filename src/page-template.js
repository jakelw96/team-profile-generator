const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


// Create a card for a manager
const generateMgr = mgrData => {
    if (!mgrData) {
        return '';
    }
    
    return `
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">
                    ${mgrData.name}<br>
                    Roll: Manager
                </h4>
                <p class="card-text">
                    ID: ${mgrData.id}<br>
                    Email: <a href="mailto:${mgrData.email}">${mgrData.email}</a><br>
                    Office number: ${mgrData.office}
                </p>
            </div>
        </div>
    </div>
    `;
};

// Create a card for an engineer
const generateEngineer = engineerData => {
    if (!engineerData) {
        return '';
    }
    
    return `
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">
                    ${engineerData.name}<br>
                     Roll: Engineer
                </h4>
                <p class="card-text">
                    ID: ${engineerData.id}<br>
                    Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a><br>
                    GitHub Username: <a href="https://github.com/${engineerData.github}">${engineerData.github}</a>
                </p>
            </div>
        </div>
    </div>
    `;
};

// Create a card for an intern
const generateIntern = internData => {
    if (!internData) {
        return '';
    }

    return `
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">
                    ${internData.name}<br>
                    Roll: Intern
                </h4>
                <p class="card-text">
                    ID: ${internData.id}<br>
                    Email: <a href="mailto:${internData.email}">${internData.email}</a><br>
                    School: ${internData.school}
                </p>
            </div>
        </div>
    </div>    
    `;
};

// Loop through array of employees
function dataReturn (data) {
    for(i = 0; i < data.length; i++ ) {
        if ("office" in data[i]) {
            dataMgr = generateMgr(data[i])
            pageTemplate(dataMgr)
            console.log(pageTemplate(dataMgr))
            return pageTemplate(dataMgr)
            
        } else if ("github" in data[i]) {
            dataEngineer = generateEngineer(data[i])
            pageTemplate(dataEngineer)
            console.log(pageTemplate(dataEngineer))
            return pageTemplate(dataEngineer)
        } else if ("school" in data[i]) {
            generateIntern(data[i])
        }
    }
};


function pageTemplate(employeeData) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1>The Work Crew</h1>
        </header>

        <main>
            <div class="container" id="parent">
                <div class="row">
                ${dataReturn(employeeData)}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = pageTemplate