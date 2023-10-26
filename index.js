// TODO: Include packages needed for this application- done
const inquirer = require("inquirer");
// fs is file system
const fs = require("fs");
// const { userInfo } = require("os");
const generateMarkdown = require('./utils/generateMarkdown')
console.log("Please enter your information to create a professional README")
console.log("Answer the following to create a high quality README")
// TODO: Create an array of questions for user input
const questions = [
  {
    // project title
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: userTitle => {
      if (userTitle) {
        return true;
      } else {
        console.log('Please enter a title.');
        return false;
      }
    }
  },
  {
    // description of README
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project.',
    validate: userDescription => {
      if (userDescription) {
        return true;
      } else {
        console.log('Please enter a description.');
        return false;
      }
    }
  },
  {
    // table of contents
    type: 'input',
    name: 'contents',
    message: 'Please enter a Table of Contents.',
    validate: userContents => {
      if (userContents) {
        return true;
      } else {
        console.log('Enter Table of Contents.');
        return false;
      }
    }
  },
  {
    // installation instructions
    type: 'input',
    name: 'installation',
    message: 'Please enter how to install the project.',
    validate: userInstall => {
      if (userInstall) {
        return true;
      } else {
        console.log('Enter the steps of installation.');
        return false;
      }
    }
  },
  {
    // usage information
    type: 'input',
    name: 'usage',
    message: 'Please enter in how to use the project.',
    validate: userUsage => {
      if (userUsage) {
        return true;
      } else {
        console.log('Enter how to use the project.');
        return false;
      }
    }
  },
  {
    // contribution guidelines
    type: 'input',
    name: 'contribute',
    message: 'How can users contribute to the project?',
    validate: userContribute => {
      if (userContribute) {
        return true;
      } else {
        console.log('Enter in how to contribute to the project');
        return false;
      }
    }
  },
  {
    // test instructions
    type: 'input',
    name: 'test',
    message: 'How can users test the project?',
    validate: userTest => {
      if (userTest) {
        return true;
      } else {
        console.log('Enter in how to test the project.');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error');
    }
    console.log('You created a README!')
  })
};


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (userInput) {
      console.log(userInput)
      writeToFile('README.md', generateMarkdown(userInput));
    });
};


// Function call to initialize app
init();
