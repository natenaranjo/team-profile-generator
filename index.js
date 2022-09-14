// Node modules
const fs = require('fs');
const inquirer = require ('inquirer');
const path = require('path');

// Linking to html page to be created.
const generateHTML = require('./src/generateHTML');

// Team Profiles.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// Team Array
const teamMembers = [];


const managerQuestions = [
    {
        type: 'input',
        message: 'Team Manager Name:',
        name: 'name',
        validate: (value) => { if(value){return true} else {return ' Enter the team member name to continue'}},
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
        validate: (value) => { if(value){return true} else {return ' Enter the employee id to continue'}},
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
    {
        type: 'input',
        message: 'Office Number',
        name: 'number',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'Engineer Name:',
        name: 'name',
        validate: (value) => { if(value){return true} else {return ' Enter the team member name to continue'}},
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
        validate: (value) => { if(value){return true} else {return ' Enter the employee id to continue'}},
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
    {
        type: 'input',
        message: 'Github Name:',
        name: 'github',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'Intern Name:',
        name: 'name',
        validate: (value) => { if(value){return true} else {return ' Enter the team member name to continue'}},
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
        validate: (value) => { if(value){return true} else {return ' Enter the employee id to continue'}},
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
    {
        type: 'input',
        message: 'What School?',
        name: 'school',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
];

function App() {
    function createManager() {
        console.log("Please enter your team details in the app.");
        inquirer.prompt(managerQuestions)
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
            teamMembers.push(manager);
            next();
        });
    };
};

const next = () => {
    inquirer.prompt([
        {
        type: "list",
        name: "select",
        choices: ["Engineer", "Intern", "End Setup"]
        }
    ]).then((data) => {
        if(data.select === 'Engineer') {
            console.log('Engineer was selected');
            inquirer.prompt(engineerQuestions)
            .then((answers) => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                teamMembers.push(engineer);
                next();
            }) 
        } else if (data.select === 'Intern') {
            console.log('Intern was selected');
            inquirer.prompt(internQuestions)
            .then((answers) => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                teamMembers.push(intern);
                next();
            }) 
        } else {
            console.log(teamMembers);
        };
    });
};

App();