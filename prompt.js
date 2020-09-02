//npm modules
const inquirer = require("inquirer");

function addEmployee() {
  return inquirer.prompt([
    {
      type: "list",
      message: "who else would you like to add to the team?",
      name: "engineerOrIntern",
      choices: ["Engineer", "Intern", "Quit"],
    },
  ]);
}

function managerPrompt() {
  return inquirer.prompt([
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
  ]);
}

function engineerPrompt() {
    return inquirer.prompt([
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
  ]);
}

function internPrompt() {
    return inquirer.prompt([
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
  ]);
}

//exporting the module
module.exports = {
  addEmployee,
  managerPrompt,
  engineerPrompt,
  internPrompt,
};
