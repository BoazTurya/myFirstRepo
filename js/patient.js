const patients = [];
const myform = document.getElementById("patientform");
const mytable = document.getElementById("patienttable");

myform.addEventListener("submit", function(event){
    event.preventDefault();
    const newPatient = {
        patientid : document.getElementById("patientid").value,
        firstName : document.getElementById("firstName").value,
        middleInitial : document.getElementById("middleInitial").value,
        lastName : document.getElementById("lastName").value,
        dateOfBirth : document.getElementById("dateOfBirth").value,
        departments : document.getElementById("departments").value,
        outpatient : document.querySelector('input[name="outpatient"]:checked').value
    }
    patients.push(newPatient);
    clearTable();
    populateTable();
    //this.reset();
}

);
const clearTable = function(){
    $("#patienttable").find("tr:gt(0)").remove();
}

const populateTable = function(){
    patients.forEach(ele =>{
        const newRow = mytable.insertRow(-1);
        newRow.insertCell(0).innerText = ele.patientid;
        newRow.insertCell(1).innerText = ele.firstName;
        newRow.insertCell(2).innerText = ele.middleInitial;
        newRow.insertCell(3).innerText = ele.lastName;
        newRow.insertCell(4).innerText = ele.dateOfBirth;
        newRow.insertCell(5).innerText = ele.departments;
        newRow.insertCell(6).innerText = ele.outpatient;
    });
}
const outcheck = document.getElementById("out");
outcheck.onchange = function(){
   clearTable();
   if(this.checked){
        patients.forEach(ele =>{
            if(ele.outpatient==="YES"){
                const newRow = mytable.insertRow(-1);
                newRow.insertCell(0).innerText = ele.patientid;
                newRow.insertCell(1).innerText = ele.firstName;
                newRow.insertCell(2).innerText = ele.middleInitial;
                newRow.insertCell(3).innerText = ele.lastName;
                newRow.insertCell(4).innerText = ele.dateOfBirth;
                newRow.insertCell(5).innerText = ele.departments;
                newRow.insertCell(6).innerText = ele.outpatient;
            }
        });
   }else{
       populateTable();
   }
   
}

