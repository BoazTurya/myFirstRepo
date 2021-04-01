//alert("hello, world");

const button = document.getElementById("biggerDecorations");

// button.addEventListener('click',function(){
//     alert("hello world");
// });

const textArea = document.getElementById("myTextArea");
const chkbox = document.getElementById("blingCheckBox");

function makeAlert(){
    alert("hello world");
}
// button.onclick = makeAlert;
//chkbox.onchange = makeAlert;

function makeBigger(){
    if(textArea.style.fontSize===""){
        textArea.style.fontSize = "14pt";
    }
    textArea.style.fontSize = (parseInt(textArea.style.fontSize) + 2 ) + "pt";   
}
function biggen(){
    setInterval(makeBigger,1000);
}
button.onclick = biggen;


chkbox.onchange = bolden;
function bolden(){
    const textArea = document.getElementById("myTextArea");
    if(chkbox.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underLine";
    }else{
        textArea.style.fontWeight =  "normal";
        textArea.style.color = "initial";
        textArea.style.textDecoration = "none"
    }
}

