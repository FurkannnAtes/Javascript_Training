let btn=document.getElementsByTagName("button");
let screen=document.getElementsByClassName("screen1")[0];
let calculatebtn=document.querySelector("#calculate");
let clearbtn=document.querySelector("#clear");


for(var i= 0;i<16;i++){
    if(i!= 12 && i!= 14 ){
        btn[i].addEventListener("click",write);
    }
   
}

calculatebtn.addEventListener("click",calculate);
clearbtn.addEventListener("click",clear);

function write (){
    screen.value=screen.value + this.value;
}
function calculate(){
    screen.value=eval(screen.value);
}
function clear(){
    screen.value="";
}