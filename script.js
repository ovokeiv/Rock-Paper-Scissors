const choices = document.querySelectorAll('button');

let pScore = 0;
let cScore = 0;
let gDraw = 0;

choices.forEach((button) => {
    button.addEventListener('click', function () {
        const playerChoice = this.textContent;
        const options = ['rock', 'paper', 'scissors']
        const computerChoice = options[Math.floor(Math.random() * options.length)];

        const result = gameLogic(computerChoice, playerChoice);
        returnValueOfGameLogic(result);
        updateScore();

        const isFinalWinner = finalWinner(pScore, cScore);
        if (isFinalWinner) {
            pScore = cScore = 0;
            updateScore();
            winner(isFinalWinner);
        }
    });
});


//Game Logic
function gameLogic(computerChoice, playerChoice) {
    let result
    let resultComp = (`Computer played ${computerChoice} and Player played ${playerChoice}, Computer Wins!`);
    let resultPlay = (`Computer played ${computerChoice} and Player played ${playerChoice}, Player Wins!`);
    let draw = (`Computer played ${computerChoice} and Player played ${playerChoice}, it's a draw!`);

    if (playerChoice == computerChoice) {
        return draw;
    }
    else if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            pScore++;
            return resultPlay;
        } else {
            cScore++;
            return resultComp;
        }
    }
    else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            pScore++;
            return resultPlay;
        } else {
            cScore++;
            return resultComp;
        }
    }
    else {
        if (computerChoice == "paper") {
            pScore++;
            return resultPlay;
        } else {
            cScore++;
            return resultComp;
        }
    }
}


//display scores
function updateScore() {
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;
}


//display stage winner
function returnValueOfGameLogic(result) {
    document.getElementById("stageWinner").textContent = result;
}


//returns winner of game but won't display on page
function finalWinner(pScore, cScore) {
    if (cScore === 5) {
        return (`Final score: Player Score ${pScore} : ${cScore} Computer Score.\n Computer won`);
    } else if (pScore === 5) {
        return (`Final score: Player Score ${pScore} : ${cScore} Computer Score.\n Congratulation! You won`);
    } else {
        return null;
    }
}


//display final score and winner of game
function winner(isFinalWinner) {
    document.getElementById("finalScore").textContent = isFinalWinner;
}
