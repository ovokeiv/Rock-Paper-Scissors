
const basket = ["rock", "paper", "scissors"];
let playerWin = 0
let compWin = 0

function getComputerChoice() {
    const random = Math.floor(Math.random() * basket.length);
    return (random, basket[random]);
}

const game = function () {
    let result
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("rock, paper or scissors? pick one!").toLowerCase();
        console.log(`computer choice is ${computerChoice} and player choice is ${playerChoice}`);
        result = round(computerChoice, playerChoice);
        if (result == "Computer Wins!") {
            compWin += 1;
            console.log("Computer Wins!");
        } else if (result == "You win!") {
            playerWin += 1;
            console.log("You win!");
        } else {
            console.log("Draw");
        } console.log(playerWin);
        console.log(compWin);
    }
    const decision = function () {
        if (playerWin == compWin) {
            return "Draw game"
        } else if (playerWin > compWin) {
            return "Player wins this game"
        } else if (compWin > playerWin) {
            return "computer wins this game"
        }
    }
    return decision();
}


function round(computerChoice, playerChoice) {
    let result
    let resultComp = "Computer Wins!"
    let resultPlay = "You win!"
    let draw = "It's a draw!"

    if (computerChoice === playerChoice) {
        return draw;
    }
    //check for paper
    if (computerChoice == "paper") {
        if (playerChoice == "rock") {
            return resultComp;
        } else {
            return resultPlay;
        }
    }
    //check for rock
    if (computerChoice === "rock") {
        if (playerChoice === "scissors") {
            return resultComp;
        } else {
            return resultPlay;
        }
    }
    //check for scissors
    if (computerChoice === "scissors") {
        if (playerChoice === "paper") {
            return resultComp;
        } else {
            return resultPlay;
        }
    }
    return result
}