// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
        type: "list",
        message: "Choose a license for your project",
        name: "license",
        choices: ["MIT", "Apache 2.0", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3"],
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
        name: "github",
    },

    {
        type: "input",
        message: "Enter your email: ",
        name: "email",
    },
])
.then ((answers) => {
    const readmeCont = generateREADME(answers);
   
    fs.writeFile('README.md', readmeCont, (err) => {
        if (err) throw err;
        console.log('README.md created!');
    });
})
.catch((error) => {
    console.error('ERROR OCCURRED: ', error);
})


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
${answers.contribution}

## Tests
${answers.test}

## Questions
If there are any further questions, reach out to the following:
- ${answers.github}(https://github.com/${answers.github})
- ${answers.email}
    `;
}

