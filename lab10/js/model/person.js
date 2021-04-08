
"use-strict"
export class person {
    name = "";
    dateOfBirth =null;

    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    setName(value){
        this.name = value;
    }
    setDateOfBirth(value){
        this.dateOfBirth = value;
    }
    getName(){
        return this.name;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    toString(){
        return `{ Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.toISODateString()}}`;
    }
}