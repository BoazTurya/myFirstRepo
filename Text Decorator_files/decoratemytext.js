
// button.addEventListener('click',function(){
//     alert("hello world");
// });
const button = document.getElementById("biggerDecorations");
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
// function biggen(){
//     setInterval(makeBigger,1000);
// }
const timer = null;
button.onclick = function(){
    if(timer == null){
        timer = setInterval(makeBigger,1000);
    }else{
        timer = clearInterval();
    }
};
function bolden(){
    const textArea = document.getElementById("myTextArea");
    if(chkbox.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underLine";
    }else{
        textArea.style.fontWeight =  "normal";
        textArea.style.color = "initial";
        textArea.style.textDecoration = "none";
    }
}
function bgChange(){
    const body = document.getElementById("myBody");
    if(chkbox.checked){
        body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "50%";
        body.style.backgroundPositionX = "right";
    }else{
        body.style.backgroundImage = "none";

    }
};
function doBigThings(){
    
}
function doManyBlingThings(){
    bgChange();
    bolden();
}
chkbox.onchange = doManyBlingThings;
