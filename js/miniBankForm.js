
//const form = document.getElementById("bankForm");

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     const accountNO = document.getElementById("accountNO").value;
//     const customerName= document.getElementById("customerName").value;
//     const typeOfAccount = document.getElementById("typeOfAccount").value;

//     const table = document.getElementById("outputTable");
//     table.insertRow(table.length).innerText =  `${accountNO}  |  ${customerName}  |  ${typeOfAccount}`;
//     this.reset()
// });

const form = $("#bankForm");
const accounts = [];
const table = $("#outputTable");
form.submit(function(event){
    event.preventDefault();
    const newAccount = {
        accountNO : $("#accountNO").val(),
        customerName : $("#customerName").val(),
        typeOfAccount : $("#typeOfAccount").val()
    };
    accounts.push(newAccount);
    $("table tbody").empty();
    populateTable();
    
});

const populateTable = function(){
    accounts.forEach(ele=>{
        table.append(
            `<tr>
                <td>${ele.accountNO}</td>
                <td>${ele.customerName}</td>
                <td>${ele.typeOfAccount}</td>
            </tr>`
        );
    })
};
const savingsChk = $("#savingsOnly");
savingsChk.change(function(event){
    $("table tbody").empty();
    if(this.checked){
        accounts.forEach(ele=>{
            if(ele.typeOfAccount === "saving"){
                table.append(
                    `<tr>
                        <td>${ele.accountNO}</td>
                        <td>${ele.customerName}</td>
                        <td>${ele.typeOfAccount}</td>
                    </tr>`
                );
            }
        });

    }else{
        populateTable();
    }
});