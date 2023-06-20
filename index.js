// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create a function to write README file
function generateREADME(answers) {
    return `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license. ![License: ${answers.license}](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-brightgreen)

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If there are any further questions, reach out to the following:
- ${answers.github}
- ${answers.email}
    `;
}

// TODO: Create an array of questions for user input
const prompt = inquirer.createPromptModule();

prompt([
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title",
    },

    {
        type: "input",
        message: "Enter a description of your project: ",
        name: "description",
    },

    {
        type: "input",
        message: "Enter installation instructions: ",
        name: "installation",
    },

    {
        type: "input",
        message: "Enter usage information: ",
        name: "usage",
    },

    {
        type: "input",
        message: "Enter contribution guidelines: ",
        name: "contribution",
    },

    {
        type: "input",
        message: "Enter test instructions: ",
        name: "test",
    },

    {
        type: "input",
        message: "Enter your GitHub username: ",
        name: "Github",
    },

    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    },
])
.then ((answers) => {
    const readmeCont = generateREADME(answers);
   
    fs.writeToFile('README.md', readmeCont, (err) => {
        if (err) throw err;
        console.log('README.md created!');
    });
});
.catch((error) => {
    console.error('ERROR OCCURRED': error);
})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
