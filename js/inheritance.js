"use-strict"
console.log("****Q1****");
const person = {
    "name": "",
    'dateOfBirth': null,
    'getName': function(){
                 return this.name;},
    'setName': function(newName){
                this.name = newName;}
}
const John = Object.create(person);
John.setName("John");
John.dateOfBirth = new Date(1998,11,10);
console.log(`The person's name is ${John.getName()}\n${John.getName()} was born on ${John.dateOfBirth.toDateString()}`);

console.log("****Q2****");

const employee = Object.create(person);
employee.salary = 0;
employee.hireDate = new Date();
employee.doJob = function(jobTitle){
        console.log(`${this.getName()} is a ${jobTitle} who earns \$${this.salary}`); };

const Anna = Object.create(employee);
Anna.setName("Anna");
Anna.salary = 249995.50;
Anna.doJob("programmer");


console.log("****Q3****");
function person2(names,dateOfBirth){  
    this.names = names;
    this.dateOfBirth = dateOfBirth;
    this.toString = function(){
        return `Name: ${this.names}, DateOfBirth: ${this.dateOfBirth.toDateString()}`;
    }

}
const anna = new person2("anna", new Date(1985,10,10));
console.log(anna.toString());