document.getElementById("submitButton").onclick = printInputs();

function printInputs(){
    console.log( "EMAIL: "+document.getElementById("emailbox").value);
    console.log("Password: "+document.getElementById("passbox").value);
    console.log("Url: "+document.getElementById("urlBox").value);
}