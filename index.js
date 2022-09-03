const inquirer = require ('inquirer');
const util = require('util');
const manager = require('./lib/Manager').manager;
const engineer = require('./lib/Engineer').engineer;
const intern = require ('./lib/Intern').intern;
const { writeFile } = require('fs').promises;
const generateHTML = require('./src/generateHTML');

const manager = [
    {
        type: 'input',
        message: 'Team Manager Name:',
        name: 'manager-name',
        validate: (value) => { if(value){return true} else {return ' Enter the team member name to continue'}},
    },
    {
        type: 'input',
        message: 'Manager ID:',
        name: 'manager-id',
        validate: (value) => { if(value){return true} else {return ' Enter the employee id to continue'}},
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'manager-email',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
    {
        type: 'input',
        message: 'Office Number',
        name: 'manager-number',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
];

const engineer = [
    {
        type: 'input',
        message: 'Engineer Name:',
        name: 'engineer-name',
        validate: (value) => { if(value){return true} else {return ' Enter the team member name to continue'}},
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'engineer-id',
        validate: (value) => { if(value){return true} else {return ' Enter the employee id to continue'}},
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'engineer-email',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
    {
        type: 'input',
        message: 'Office Number',
        name: 'enginneer-number',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
];

const intern = [
    {
        type: 'input',
        message: 'Intern Name:',
        name: 'intern-name',
        validate: (value) => { if(value){return true} else {return ' Enter the team member name to continue'}},
    },
    {
        type: 'input',
        message: 'Intern ID:',
        name: 'intern-id',
        validate: (value) => { if(value){return true} else {return ' Enter the employee id to continue'}},
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'intern-email',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
    {
        type: 'input',
        message: 'Office Number',
        name: 'intern-number',
        validate: (value) => { if(value){return true} else {return ' Enter a title to continue'}},
    },
];
