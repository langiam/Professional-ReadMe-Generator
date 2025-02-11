// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'title', message: 'Project Title:'},
    {type: 'input', name: 'description', message: 'Description of project:'},
    {type: 'input', name: 'installation', message: 'Instructions for installation:'},
    {type: 'input', name: 'usage', message: 'Usage outline:'},
    {type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'APACHE 2.0', 'GPL v3', 'None']},
    {type: 'input', name: 'contribution', message: 'Guidelines for contribution:'},
    {type: 'input', name: 'test', message: 'Instructions for testing:'},
    {type: 'input', name: 'github', message: 'GitHub username:'},
    {type: 'input', name: 'email', message: 'Email Address:'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
    fs.writeFile(fileName, data, err => {
        if (err) console.error('There was an error writing the README:', err);
        else console.log('README.md successfully generated.');
    });
 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });     
}

// Function call to initialize app
init();
