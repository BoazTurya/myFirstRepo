const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click",function(){
   const emailbox = document.getElementById("emailbox").value;
   const passbox = document.getElementById("passbox").value;
   const urlbox = document.getElementById("urlbox").value;

   alert("Email: "+emailbox+"\nPassword: "+passbox+"\nURL: "+urlbox);   
});