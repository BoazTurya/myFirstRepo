
document.getElementById("loginform").addEventListener("submit", function postform(event){
   event.preventDefault();
   const emailbox = document.getElementById("emailbox").value;
   const passbox = document.getElementById("passbox").value;
   const urlbox = document.getElementById("urlbox").value;
   const checked = document.getElementById("checkbox").checked;
   console.log("Email: "+emailbox+"\nPassword: "+passbox+"\nURL: "+urlbox+"\nChecked Out? "+checked);
});