
// If there is no license, return an empty string
function renderLicenseBadge(license) {
        if(license == "None"){
                return "";
        }else{
        return `![licensebadge](https://img.shields.io/badge/licence-${license}-brightgreen)`
        
        }
}


// If there is no license, returns "This project is not under license" if it does `this project is licensed under ${license} license`
function renderLicenseSection(license) {
        if(license == "None"){
                return "This project is not under license"
        }else{
                return `this project is licensed under ${license} license`
        }
}

//creates readme mardown format and info with data
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
