"use-strict"


const person = {
    "name": "",
    'dateOfBirth': null,
    'getName': function(){
                 return this.name;
            },
    'setName': function(newName){
                this.name = newName;
    }
}

const John = Object.create(person);
John.setName("John");
John.dateOfBirth = new Date(1998,11,10);

console.log(`The person's name is ${John.getName()}`);
console.log(`${John.getName()} was born on ${John.dateOfBirth.toDateString()}`);