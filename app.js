//node modules
const path = require("path");
const fs = require("fs");

//npm modules
const inquirer = require("inquirer");

//constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// ### User input

// The project must prompt the user to build an engineering team. An engineering
// team consists of a manager, and any number of engineers and interns.

//empty array to house the emplyees
var employeesArray = [];

// array of questions for user to answer.
const questions = [
  {
    type: "input",
    message: "What is your Manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your Manager's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Manager's office number?",
    name: "officeNumber",
  },
  {
    type: "list",
    message: "What type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members.",
    ],
    name: "role",
  },
  {
    type: "input",
    message: "What is your Engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your Engineer's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your Engineer's GITHUB username?",
    name: "github",
  },
  {
    type: "list",
    message: "What type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members.",
    ],
    name: "role",
  },
  {
    type: "input",
    message: "What is your Intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your Itern's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What school did your Intern attend?",
    name: "school",
  },
  {
    type: "list",
    message: "What type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members.",
    ],
    name: "role",
  },
];
//reference the var on line 1 and use the prompt method()
//this is asyncronous
inquirer
  .prompt(questions)
  //below you see what happens WHEN the response returns
  .then(function (response) {
    console.log("response: ", response);

    employeesArray.push(response);

    console.log(employeesArray);

    //const manager = new Manager (response);

    //instead of stringify I am passing the response obj into the function and since the
  });

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
