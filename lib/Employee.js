// TODO: Write code to define and export the Employee class

// Returns 'Employee'
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log(`This emoloyees name is ${this.name}`);
    return this.name;
  }
  getId() {
    console.log(`${this.name} has an id of ${this.id}`);
    return this.id;
  }
  getEmail() {
    console.log(`${this.name} has an email of ${this.email}`);
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
//exporting the module
module.exports = Employee;
