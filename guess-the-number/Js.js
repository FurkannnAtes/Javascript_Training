let randomNumber = Math.floor(Math.random ()*100 +1) ;

const randomNumberBox = document.querySelector(".randomNumberBox");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHight");

const submitGuess = document.querySelector(".submitGuess");
const guessInput = document.querySelector(".guessInput");



let guessCount = 1;
let resetButton;


function checkGuess(){
   const userGuess = Number(guessInput.value);

   if(guessCount === 1){
    guesses.textContent =" Previous Results: ";
   }
   guesses.textContent += userGuess  + " ";
   if(userGuess === randomNumber){
    lastResult.textContent = "!!! Congratulations you won !!!";
    lastResult.style.backgroundColor ="green";
    lowOrHi.textContent ="";
    setGameOver();
   }else if (guessCount === 10){
    lastResult.textContent = "!!! Ahh you're out of luck !!!";
    lastResult.style.backgroundColor ="red";
    lowOrHi.textContent ="";
    setGameOver();

   }else{
    lastResult.textContent =" Wrong Guess";
    lastResult.style.backgroundColor ="red";
    if(userGuess < randomNumber){
        lowOrHi.textContent = " Low Guess"
    } else if(userGuess > randomNumber){
        lowOrHi.textContent = " High Guess"

    }
   }
   guessCount++;
   guessInput.value="";
   guessInput.focus();
}
submitGuess.addEventListener("click", checkGuess);


function setGameOver(){
    guessInput.disabled = true;
    submitGuess.disabled = true;
    randomNumberBox.textContent = randomNumber;
    resetButton = document.createElement("button");
    resetButton.textContent="Reset Game";
    resetButton.classList.add("resetButton")
    document.querySelector(".buttonWrapper").appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);
}
function resetGame(){
    window.location.reload(false)
}

