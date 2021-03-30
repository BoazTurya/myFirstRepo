document.getElementById("submitButton").onclick = printInputs();

function printInputs(){
    console.log( "EMAIL: "+document.getElementById("emailbox").value+ 
            "\nPassword: "+document.getElementById("passbox").value+ 
                 "\nUrl: "+document.getElementById("urlBox")).value;
}