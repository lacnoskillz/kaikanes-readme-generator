// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(filename, data) { 
  let http = "https://github.com/"+data.github+"?tab=repositories";
  fs.writeFile(filename,
     '# ' + data.name 
     + '\n ![](https://img.shields.io/badge/licence-'+data.license+'-brightgreen)'
     +'\n' + '## Description' + '\n\n' + data.descript 
     + '\n\n## Table of Contents \n\n* [Installation](#installation) \n* [Usage](#usage)\n* [License](#license)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Questions](#questions)'
     + '\n\n## Installation'
     +'\nTo install necessary dependencies run the following command:'
     +'\n\n           '+data.install
     +'\n\n## Usage'
     +'\n'+data.use
     +'\n\n## License'
     +'\nThis project is licensed under the '+data.license+' license'
     +'\n\n## Contributing'
     +'\n'+data.contrib
     +'\n\n## Tests'
     +'\nTo run tests run the following command:'
     +'\n\n           '+data.test
     +'\n\n## Questions'
     +'\nIf you have any questions about the repo open an issue or contect me directly at '+'['+data.email+']'+'(https://google.com/)'+'. You can find more of my work at '+'['+data.github+']'+'('+http+')'+'.', 
     (err) => err ? console.log(err) : console.log('README generating...')
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
  ])

  .then((data) => {
    const filename = `README.md`;
    writeToFile(filename, data);
  });

// Function call to initialize app
init();
