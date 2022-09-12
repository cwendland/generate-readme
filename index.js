// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log('Information added'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the project description?',
            name: 'description',
        },        
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What is the usage information?',
            name: 'usage',
        },
        {
            type: 'list',
            message: '',
            name: 'license',
            choices: ['Apache', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'],
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'gitName',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        }
      ])
      .then((response) => 
        writeToFile(`${response.title}.md`, response)
      );
}

// Function call to initialize app
init();
