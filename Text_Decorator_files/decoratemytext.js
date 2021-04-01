
const button = document.getElementById("biggerDecorations");
const textArea = document.getElementById("myTextArea");
const chkbox = document.getElementById("blingCheckBox");
const buttonPigLatin = document.getElementById("makePigLatin");
const buttonMalkovich = document.getElementById("makeMalkovich");

makePigLatin
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
     setInterval(makeBigger,500);
}
button.onclick = biggen;

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
    }else{
        body.style.backgroundImage = "none";
    }
}

function doManyBlingThings(){
    bgChange();
    bolden();
}
chkbox.onchange = doManyBlingThings;



function makeMalkovich(){  
    const myWords = textArea.value;
    let myWordArray = myWords.split(" ");
    textArea.value = myWordArray.map(e=>(e.length>=5)?"Malkovich":e).join(" ");
}
buttonMalkovich.onclick = makeMalkovich;


function makePigLatin(){
    const myWords = textArea.value;
    let myWordArray = myWords.split(" ");

    for(let j=0; j<myWordArray.length; j++){
        let element = myWordArray[j];
        let consonants = "";
        let index = 0;
        while(isConsonant(element.charAt(index))){
            consonants += element.charAt(index)
            index++;
            if(index>=element.length-1){break;}
        }
        myWordArray[j] = element.substring(index) + consonants +  "ay";
    }
    textArea.value = myWordArray.join(" ");
}
function isConsonant(input){
    switch(input.toLowerCase()){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return false;
        default:
            return true;
    }
}
buttonPigLatin.onclick = makePigLatin;

