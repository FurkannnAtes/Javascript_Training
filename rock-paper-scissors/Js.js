
const player_score = document.getElementsByClassName("player-score")[0]
const computer_score = document.getElementsByClassName("computer-score")[0]
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const player_choice = document.getElementById("player-choice")
const computer_choice = document.getElementById("computer-choice")
const message = document.getElementsByClassName("message")[0];


let player = 0;
let computer = 0;


function computerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);

    computer_choice.setAttribute("src", `img/${choice[randomNumber]}.png`);
    return choice[randomNumber];
}

function eventListeners() {

    rock.addEventListener("click", function () {

        player_choice.setAttribute("src", `img/rock.png`);
        computerChoice();
        let pc_choice = computerChoice()
        result("rock", pc_choice)
    });

    paper.addEventListener("click", function () {

        player_choice.setAttribute("src", `img/paper.png`);
        computerChoice();
        let pc_choice = computerChoice()
        result("paper", pc_choice)
    });

    scissors.addEventListener("click", function () {

        player_choice.setAttribute("src", `img/scissors.png`);
        computerChoice();
        let pc_choice = computerChoice()
        result("scissors", pc_choice)
    });

}

eventListeners();


function result(player, computer) {

    switch (player + computer) {

        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            won();
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lost();
            break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            draw();
            break;
        default: "Error!";
            break;
    }

}

function won() {
    player = player + 1;
    message.innerHTML = "You Won !!!";
    player_score.innerHTML = player.toString();

}
function lost() {
    computer = computer + 1;
    message.innerHTML = "You Lost !!";
    computer_score.innerHTML = computer.toString();
}
function draw() {

    message.innerHTML = " Draw";

}