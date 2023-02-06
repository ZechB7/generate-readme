// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'user',
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
                'APACHE_2.0',
                'GPL_3.0',
                'BSD_3',
                'None',
            ],
        },
        {
            type: 'input',
            message: 'What is required to install and how?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'How can the application be tested?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'use',
        },
        {
            type: 'input',
            message: 'How can the user contact you for questions about the repo?',
            name: 'questions',
        },

    ]);

//function to create file and console.log "Succesfully wrote to Readme.md", and catch errors
promptUser()
    .then((data) => {
        console.log(data)
        fs.writeFile('./readme.md', generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!'))
    })
    .then(() => console.log('Succesfully wrote to README.md'))
    .catch((err) => console.error(err));