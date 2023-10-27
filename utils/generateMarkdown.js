// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenseType = license[0];
  console.log(licenseType)
  let yourLicense = ''
  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    yourLicense = "N/A"
  }
  return yourLicense;
};


function generateMarkdown(data) {

  return `# ${data.title}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribute}

  ## License

  ${data.userLicense}

  ## Questions

  Here is how to contact me:

  Click this link to access my Github account:('https://github.com/)${data.githubUser}/

  Email me with additional questions:










`
}




module.exports = generateMarkdown;

