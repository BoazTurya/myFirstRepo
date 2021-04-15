


const loadbooks= function(){
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
    .then(response=>{

        return response.json();
    }).then(bookArr =>{

        bookArr.forEach((bk,i)=>{
            let newRow = `
            <tr>
                <th scope="row">${i+1}.</th>
                <td>${bk.isbn}</td>
                <td>${bk.title}</td>
                <td>${new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(bk.overdueFee)}</td>
                <td>${bk.publisher}</td>
                <td>${bk.datePublished}</td>
            </tr>`;

            $("table tbody").append(newRow);
        });
    });
};
loadbooks();

$("#bookForm").submit(function(event){
    event.preventDefault();
    const newBook = {
        "title": $("#title").val(),
        "isbn": $("#isbn").val(),
        "overdueFee": $("#overdueFee").val(),
        "publisher": $("#publisher").val(),
        "datePublished": $("#datePublished").val()
    };
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: "post",
        body: JSON.stringify(newBook),
        headers: {
            "Content-Type": "application/json"
        }
    });
    $("table tbody").empty();
    loadbooks();
    this.reset();
    
});