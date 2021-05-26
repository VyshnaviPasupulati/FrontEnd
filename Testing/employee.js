const Person = require('./person').Person;

class Employee extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }
    getSalary=  () => this.salary;
}
module.exports = { Employee }