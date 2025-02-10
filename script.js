
const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
   try{
       display.value=eval(display.value);
   }
   catch(error){
        display.value="Error";
   }
   
}

function clearall(){
    display.value="";
}


function getRandomColor(){
    let val1=Math.ceil(0 + Math.random()*255) ;
    let val2=Math.ceil(0 + Math.random()*255) ;
    let val3=Math.ceil(0 + Math.random()*255) ;
    return `rgb(${val1},${val2},${val3})`;
}
document.body.style.transition = "background-color 1s ease-in-out";
let a = setInterval(()=>{
    document.body.style.background=getRandomColor();
},1000);
