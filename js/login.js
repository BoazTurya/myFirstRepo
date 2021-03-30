document.getElementById("submitButton").onclick= printInputs();

function getInputs(){
   const form = document.getElementById("loginform");
   return form.elements["emailbox"].value;
    ;
}

function printInputs(){
    console.log(getInputs());
}
document.getElementsByTagName("loginform").namedItem