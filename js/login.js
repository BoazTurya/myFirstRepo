document.getElementById("submitButton").onclick= printInputs();

function getInputs(){
   const form = document.getElementById("loginform");
   return form.elements["email"].value;
    
}

function printInputs(){
    console.log(getInputs());
}