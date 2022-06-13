var dices = ["img/zar1.png","img/zar2.png","img/zar3.png","img/zar4.png","img/zar5.png","img/zar6.png"]
var p1Dice = document.querySelector(".player-1-dice");

var p1Btn =document.querySelector(".random-dice-p1");


p2Btn.disabled=true;
function p1Throw (){
    let p1 =Math.floor(Math.random()*6)

    p1Dice.src=dices[p1]
}


   
