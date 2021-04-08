"use-Strict"
import { employee } from "./model/employee.js";
import {person} from "./model/person.js";
//import {employee} from "./model/employee.js"

(function(){
    const persons = [
        new person("Ana Smith", new Date(1998,11,15)),
        new person("Bob Jone", new Date(1945,10,16)),
        new person("Carlos Slim Helu", new Date(1976, 8,24))
    ];

    persons.forEach(ele=> console.log(ele.toString()));

    const jim = new employee("Jim Hanson", 245990.00);
    jim.doJob("Software Engineer");


})();


