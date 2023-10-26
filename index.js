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
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
