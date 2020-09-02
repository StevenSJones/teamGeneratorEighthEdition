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
const { listenerCount } = require("process");
//empty array to house the emplyees
var employeesArray = [];
const {
  addEmployee,
  managerPrompt,
  engineerPrompt,
  internPrompt,
} = require("./prompt");
async function getEmployees() {
  let proceed = true,
      choice, engineer, intern;
  while (proceed) {
    choice = await addEmployee();
    switch (choice.engineerOrIntern.toUpperCase()) {
      case 'ENGINEER':
        engineer = await engineerPrompt();
        employeesArray.push(
          new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
        );
        break;
      case 'INTERN':
        intern = await internPrompt();
        employeesArray.push(
          new Intern(intern.name, intern.id, intern.email, intern.school)
        ); 
        break;
      default:
        proceed = false;
        fs.writeFile("index.html", render(employeesArray), function() {
          console.log("HTML file created!");
        });
    }
  }
  return true;
}
async function main() {
  const manager = await managerPrompt();
  employeesArray.push(
    new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
  );
  await getEmployees();
}
main();