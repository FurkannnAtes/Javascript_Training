let second=0;
let tens=0;
let interval;

let getSecond = document.querySelector(".second");
let getTens= document.querySelector(".tens");

let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let btnReset = document.querySelector(".btnReset");



btnStart.addEventListener("click",()=>{
   interval=setInterval(timer,10);
})

btnStop.addEventListener("click",()=>{
    clearInterval(interval);
})

btnReset.addEventListener("click",()=>{
   
    clearInterval(interval);
    second=0;
    tens=0;
    getSecond.innerHTML = "00";
    getTens.innerHTML = "00";
})

function timer( ){
    tens++;
    if(tens <= 9){
        getTens.innerHTML ="0" + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens >99){
        second++;
        getSecond.innerHTML="0"+second;
        tens=0;
        getTens.innerHTML ="0" +tens;
    }
    if(second >9){
        getSecond.innerHTML=second;
        
    }
}