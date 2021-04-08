"use-strict"

export class person {
    _name = "";
    _dateOfBirth =null;

    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    set name(value){
        this._name = value;
    }
    set dateOfBirth(value){
        this._dateOfBirth = value;
    }
    get name(){
        return this._name;
    }
    get dateOfBirth(){
        return this._dateOfBirth;
    }
    toString(){
        return `{ Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth()+1}-${this.dateOfBirth.getDate()}}`;
    }
}