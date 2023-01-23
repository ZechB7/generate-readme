// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./generateMarkdown');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const promptUser = () =>
inquirer.prompt([
    {
        type: 'input', 
        message: 'What is your GitHub username?',
        name: 'githubuser',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [
            'MIT',
            'APACHE 2.0',
            'GPL 3.0',
            'BSD 3',
            'None',
        ],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
        name: 'installdep'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        default: 'npm test',
        name: 'testdep',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usingrepo',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contrepo',
    },

    ]);

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//function to create file and console.log "Succesfully wrote to Readme.md", and catch errors
promptUser()
    .then((data) => writeFileAsync('./readme.md', generateMarkdown(data)))
    .then(() => console.log ('Succesfully wrote to README.md'))
    .catch((err) => console.error(err));