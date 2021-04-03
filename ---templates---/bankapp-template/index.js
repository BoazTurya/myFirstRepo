const bankAccountForm = document.getElementById("bankAccountForm");

bankAccountForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const numberAccount = document.getElementById("numberAccount").value;
    const cName = document.getElementById("cName").value;
    const typeAccount = document.getElementById("typeAccount").value;

    const list = document.getElementById("customerAccountList");
    const newValue = document.createElement("li");
    newValue.classList.add("list-group-item");
    newValue.appendChild(document.createTextNode(numberAccount +" | "+cName+" | "+typeAccount));

    list.appendChild(newValue);

    //table insert
    addNewAccountDataRow(numberAccount, cName,typeAccount);

    //clean form
    bankAccountForm.reset();
});


/**
 * Solution using table provided by kalu
 */
 const addNewAccountDataRow = function(accountNo, customerName, accountType) {
    const tblAccounts = document.querySelector("#bancAccountTable");
    const newRow = tblAccounts.insertRow(-1);

    //inserting ID on column 1
    const newCellRowId = newRow.insertCell(0);
    const strNewRowId = document.createTextNode(`${tblAccounts.rows.length-1}.`);//-1 because I just inserted before
    newCellRowId.appendChild(strNewRowId);
    
    //inserting accountNo on column 2
    const newCellAccountNo = newRow.insertCell(1);
    const strNewRowAccountNo = document.createTextNode(`${accountNo}`);
    newCellAccountNo.appendChild(strNewRowAccountNo);
    
    //inserting customer name on column 3
    const newCellCustomerName = newRow.insertCell(2);
    const strNewRowCustomerName = document.createTextNode(`${customerName}`);
    newCellCustomerName.appendChild(strNewRowCustomerName);
    
    //inserting type Account on column 4
    const newCellAccountType = newRow.insertCell(3);
    const strNewRowAccountType = document.createTextNode(`${accountType}`);
    newCellAccountType.appendChild(strNewRowAccountType);

    //inserting delete button on column 5
    const newCellDeleteButton = newRow.insertCell(4);
    newCellDeleteButton.innerHTML = `<a onClick="onDelete(this)"><span class="glyphicon glyphicon-trash"></span></a>`;
 
}

function onDelete(a) {
    if (confirm('Are you sure to delete this record ?')) {
        let row = a.parentElement.parentElement;//a -> td -> tr
        document.getElementById("bancAccountTable").deleteRow(row.rowIndex);
        resetForm();
    }
}