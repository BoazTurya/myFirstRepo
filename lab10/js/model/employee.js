"use-strict";

import {person} from "./person.js";

export class employee extends person{
    
    constructor(name, salary){
        super(name,null);
        this.salary = salary;
        this.hireDate = new Date();
    }
    set salary(value){
        this._salary = value;
    }
    set hireDate(date){
        this._hireDate = date;
    }
    get salary(){
        return this._salary;
    }
    get hireDate(){
        return this._hireDate;
    }
    doJob(jobTitle){
        console.log(`${super.name} is a ${jobTitle} who earns $${this.salary}`);
    }
}