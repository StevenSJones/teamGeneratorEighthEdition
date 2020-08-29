//import Employee
const Employee = require("./Employee");
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); //calling employee constructor
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    console.log(`${this.name} has ${this.officeNumber} as an office number.`);
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
