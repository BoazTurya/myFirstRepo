


(function(){
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



})();