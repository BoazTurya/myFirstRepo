"use-strict";

import { person } from "./person.js";

export class employee extends person{
    
    constructor(name, salary){
        super(name,null);
        this.salary = salary;
        this.hireDate = new Date();
    }
    get salary(){
        return this.salary;
    }
    get hireDate(){
        return this.hireDate;
    }
    doJob(jobTitle){
        console.log(`${super.name} is a ${jobTitle} who earns $${this.salary}`);
    }
}