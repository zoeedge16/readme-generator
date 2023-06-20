// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const prompt = inquirer.createPromptModule();

prompt([
    {
        message: 'Enter your project title: ',
        name: 'title',
    },

    {
        message: 'Enter a description of your project: ',
        name: 'description',
    },

    {
        message: 'Enter installation instructions: ',
        name: 'installation',
    },

    {
        message: 'Enter usage information: ',
        name: 'usage',
    },

    {
        message: 'Enter contribution guidelines: ',
        name: 'contribution',
    },

    {
        message: 'Enter test instructions: ',
        name: 'test',
    },

    {
        message: 'Enter your GitHub username: ',
        name: 'Github',
    },

    {
        message: 'Enter your email: ',
        name: 'email',
    },

])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
