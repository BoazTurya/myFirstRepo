
const form = document.getElementById("bankForm");

form.addEventListener('submit', function(event){
    event.preventDefault();
    const accountNO = document.getElementById("accountNO").value;
    const customerName= document.getElementById("customerName").value;
    const typeOfAccount = document.getElementById("typeOfAccount").value;

    const table = document.getElementById("outputTable");
    table.insertRow(table.length).innerText =  `${accountNO}  |  ${customerName}  |  ${typeOfAccount}`;
    this.reset()
});