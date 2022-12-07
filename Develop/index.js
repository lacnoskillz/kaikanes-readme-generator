// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(filename, data) { 
  
  fs.writeFile(filename, '# ' + data.name + '\n ![](https://img.shields.io/badge/licence-'+data.license+'-brightgreen)'+'\n' + '## Description' + '\n\n' + data.descript + '\n\n## Table of Contents \n\n-[Installation](#installation) \n-[Usage](#usage)\n-[Contributing](#contributing)\n-[Tests](#tests)', (err) =>
    err ? console.log(err) : console.log('success!')
  );

}
// TODO: Create a function to initialize app
function init() { }
inquirer
  .prompt([
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

  ])

  .then((data) => {
    const filename = `README.md`;
    writeToFile(filename, data);
  });

// Function call to initialize app
init();
