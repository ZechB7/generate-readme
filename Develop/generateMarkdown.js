// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
if(${data.license === MIT}){
  return `## License
  This project is licensed under the ${data.license} License.`
}else if(${data.license === MIT}){
  return `## License
  This project is licensed under the ${data.license} License.`
}else if(${data.license === MIT}){
  return `## License
  This project is licensed under the ${data.license} License.`
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.project}
![GitHub](https://img.shields.io/github/license/${data.githubuser}/${data.project})
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
${data.installdep}
## Usage 
${data.usingrepo}
${renderLicenseSection(data.license)}
## Contributing
${data.contrepo}
## Tests
To run tests, run the following command:
${data.testdep}
## Questions
${data.questions}

`}

module.exports = generateMarkdown;
