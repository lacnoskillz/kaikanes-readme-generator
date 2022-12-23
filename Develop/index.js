// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
// an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is yout github username?',
    name: 'github'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'name'
  },
  {
    type: 'input',
    message: 'Give a description of your project',
    name: 'descript'
  },
  {
    type: 'list',
    message: 'What license should your project have?',
    name: 'license',
    choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
  },
  {
    type: 'input',
    message: 'what command should be run to install dependencies?',
    default: "npm i",
    name: 'install'
  },
  {
    type: 'input',
    message: 'what command should be run to run tests?',
    default: "npm test",
    name: 'test'
  },
  {
    type: 'input',
    message: 'what does the user need to know about using the repo?',
    name: 'use'
  },
  {
    type: 'input',
    message: 'what does the user need to know about contributions?',
    name: 'contrib'
  },
];

// function to write README file
function writeToFile(filename, data) {
  const markdown = generateMarkdown(data);
  // const http = "https://github.com/"+data.github+"?tab=repositories";
  fs.writeFile(filename, markdown,

    (err) => err ? console.log(err) : console.log('README generating...')
  );

}
//function to initialize app at start
function init() {
  inquirer
    .prompt(questions)
  
   .then((data) => {
     const filename = `README.md`;
     writeToFile(filename, data);
   });
}

  // Function call to initialize app
  init();
