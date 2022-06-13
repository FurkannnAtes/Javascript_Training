const box =document.querySelectorAll(".box");
const playerText =document.querySelector(".text");
const errorText =document.querySelector(".error");
let player= "X";
let gameOver=false ;
let winner;

function startGame(){
    playerText.textContent = `${player} 's Turn `

    box.forEach(box=> box.addEventListener("click",()=>chooseArea(box)))
}
function chooseArea(box){
    if(box.textContent === ""){
        box.textContent = player;
        if(player === "O"){
            box.style.color ="blue"
        }
        if(player === "X"){
            box.style.color ="red"
        }
        turnPlayer();
    }else{
        errorText.textContent ="Hey, it's not empty"
        box.style.border ="2px solid red"
        setTimeout(()=>{
            errorText.textContent=""
            box.style.border ="1px solid black"
        },2500)
        
    }
    
    
    checkWin();
    checkTie();

    if(gameOver){
        playerText.textContent = ` Game is over   ${winner} won`;
        document.querySelectorAll(".box").forEach(box =>  box.style.pointerEvents = "none")

    }
}
function turnPlayer () {
    if(player === "X"){
        player = "O"
        playerText.textContent ="O'turn"
    }else if(player === "O"){
        player = "X"
        playerText.textContent ="X'turn"
    };
}
function checkWin(){
    checkRows()
    checkCols()
    checkDiags()
}
function checkTie(){
    const values = [];
    box.forEach(box =>values.push(box.textContent))
    if(!values.includes("")){
        playerText.textContent ="Tie !"
        document.querySelectorAll(".box").forEach(box => box.style.pointerEvents = "none");
    }
}


function checkRows(){
    let row1 = box[0].textContent == box[1].textContent && box[0].textContent == box[2].textContent && box[0].textContent !== ""
    let row2 = box[3].textContent == box[4].textContent && box[3].textContent == box[5].textContent && box[3].textContent !== ""
    let row3 = box[6].textContent == box[7].textContent && box[6].textContent == box[8].textContent && box[6].textContent !== ""
  if(row1 || row2 || row3){
      gameOver=true;
  }
  if(row1) return winner =box[0].textContent
  if(row2) return winner =box[3].textContent
  if(row3) return winner =box[6].textContent
}
function checkCols(){
    let col1 =box[0].textContent == box[3].textContent && box[0].textContent == box[6].textContent && box[0].textContent !== ""
    let col2 =box[1].textContent == box[4].textContent && box[1].textContent == box[7].textContent && box[1].textContent !== ""
    let col3 =box[2].textContent == box[5].textContent && box[2].textContent == box[8].textContent && box[2].textContent !== ""
    if(col1 || col2 || col3){
        gameOver=true;
    }
    if(col1) return winner =box[0].textContent
    if(col2) return winner =box[1].textContent
    if(col3) return winner =box[2].textContent
}
function checkDiags(){
    let diag1 =box[0].textContent == box[4].textContent && box[0].textContent == box[8].textContent && box[0].textContent !== ""
    let diag2 =box[2].textContent == box[4].textContent && box[2].textContent == box[6].textContent && box[2].textContent !== ""
    if(diag1 || diag2 ){
        gameOver=true;
    }
    if(diag1) return winner =box[0].textContent
    if(diag2) return winner =box[2].textContent
}
startGame();