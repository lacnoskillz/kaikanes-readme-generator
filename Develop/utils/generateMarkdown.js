// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
        if(license == "None"){
                return "";
        }else{
        return `![licensebadge](https://img.shields.io/badge/licence-${license}-brightgreen)`
        
        }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
        if(license == "None"){
                return "This project is not under license"
        }else{
                return `this project is licensed under ${license} license`
        }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenceBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license)
        return `
  # ${data.name} 
  ${licenceBadge}
  ## Description
  ${data.descript} 
  
  ## Table of Contents 
  * [Installation](#installation) 
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies run the following command:
  
          ${data.install}

  ## Usage
  ${data.use}
  
  ## License
  ${licenseSection}
  
  ## Contributing
  ${data.contrib}
  
  ## Tests
  To run tests run the following command:
        
        ${data.test}

  ## Questions
  If you have any questions about the repo open an issue or contect me directly at [${data.email}](https://google.com/). You can find more of my work at [${data.github}](https://github.com/${data.github}?tab=repositories).
`;
}

module.exports = generateMarkdown;
