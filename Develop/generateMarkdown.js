// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![license](https://img.shields.io/badge/license-${license}-blue)`;
  }
  return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None")  {
    return `* [License](#license)`;
  }
  return " ";
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None")  {
    return `## License\nThis project is licensed under the ${license} license.
    `
}
return " ";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.project}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage) 
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command in the terminal using node.js:
${data.install}

## Usage 
${data.use}

${renderLicenseSection(data.license)}

## Tests
To run tests, run the following command:
${data.test}

## Questions
${data.questions}

Email: ${data.email}

GitHub: [${data.user}](https://github.com/${data.user}) 

`}

module.exports = generateMarkdown;
