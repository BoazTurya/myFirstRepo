addbutton = document.getElementById("addproductbutton");
addbutton.addEventListener("click", ()=>{
    alert(
        "Product Number: "+ document.getElementById("numberbox").value +
        "\nQuantity in Stock: "+ document.getElementById("quantitybox").value+
        "\nName: "+document.getElementById("namebox").value+
        "\nUnitPrice: "+document.getElementById("pricebox").value+
        "\nSuppler: "+document.getElementById("supplierbox").value+
        "\nDate Supplied: "+document.getElementById("datebox").value
    );
});
