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
// The project must prompt the user to build an engineering team. An engineering
// team consists of a manager, and any number of engineers and interns.
inquirer
  .prompt([
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
  ])
  //deals with the response from the manager questions
  .then(function (manager) {
    employeesArray.push(manager); //push manager to array
    console.log("manager: ", manager);
    console.log("employeesArray: ", employeesArray);

    return inquirer.prompt([
      {
        type: "list",
        message: "who else would you like to add to the team?",
        name: "engineerOrIntern",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ]);
  })
  // works to here
  .then(function ({ engineerOrIntern }) {
    //without curly brackets engineer or intern is an object
    if (engineerOrIntern === "Engineer") {
      // prompt engineer details
      inquirer
        .prompt([
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
        ])
        .then(function (engineer) {
          console.log("engineer: ", engineer);
          employeesArray.push(engineer); //push engineer to array
          console.log(employeesArray);
        });
    } else if (engineerOrIntern === "Intern") {
      //prompt for intern
      inquirer
        .prompt([
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
        ])
        .then(function (intern) {
          console.log("response: ", intern);
          employeesArray.push(intern); //push intern to array
          console.log(employeesArray);
        });
    } //intern
    else {
      //write to file
      fs.writeFile("user.html", employeesArray, function (err) {
        console.log("HTML file created!");
      });
    }
  });

//const manager = new Manager (response);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
