//import Employee
const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Engineer extends Employee {
  
    constructor(name, id, email, github) {
      super(name, id, email); //calling employee constructor
      this.github = github;
    }
  
    getGithub() {
      console.log(`${this.name} has ${this.github} as an GITHUB user name.`);
      return this.github;
    }
  
    getRole() {
      return "Engineer";
    }
  }
  module.exports = Engineer;
