const buttons = document.querySelectorAll("#button-container button");
const buttonContainer = document.getElementById("button-container");
const winner = document.getElementById("winner");
const playerChoiceDiv = document.getElementById("player-choice");
const computerChoiceDiv = document.getElementById("computer-choice");
const playerChoiceEmoji = document.getElementById("player-emoji");
const computerChoiceEmoji = document.getElementById("computer-emoji");
const roundHeader = document.getElementById("round");
const playerScoreHeader = document.getElementById("player-score")
const computerScoreHeader = document.getElementById("computer-score");
const restartButton = document.getElementById("restart-button");

let round = 1;
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = button.textContent;
        console.log(`Player chose ${playerChoice}`);
        playerChoiceDiv.textContent = playerChoice;
        playGame(playerChoice);
    })
})

restartButton.addEventListener('click', function() {
    round = 1;
    roundHeader.innerText = "Best of 5, round " + round;
    playerScore = 0;
    playerScoreHeader.innerText = "You: " + playerScore;
    computerScore = 0;
    computerScoreHeader.innerText = "Opponent: " + computerScore;
    playerChoiceEmoji.innerText =  "";
    computerChoiceEmoji.innerText = "";
    restartButton.style.visibility = "hidden";
    buttonContainer.style.display = "flex";
})

function playGame(playerChoice){
    let computerChoice = getComputerChoice();
    computerChoiceDiv.textContent = computerChoice;
    console.log(`Computer chose ${computerChoice}`);
    playerChoiceEmoji.innerText = getEmoji(playerChoice);
    computerChoiceEmoji.innerText = getEmoji(computerChoice);
    if(playerChoice === computerChoice){
        winner.textContent = "It's a tie!";
    }
    else if(playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissors" && computerChoice === "Paper"){
        winner.textContent = "You win!";
        playerScoreHeader.innerText = "You: " + ++playerScore;
        roundHeader.innerText = "Best of 5, round " + ++round;
    }
    else {
        winner.textContent = "You Lose!";
        computerScoreHeader.innerText = "Opponent: " + ++computerScore;
        roundHeader.innerText = "Best of 5, round " + ++round;
    }
    if(playerScore >= 3 || computerScore >= 3){
        buttonContainer.style.display = "none";
        restartButton.style.visibility = "visible";
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        return "Rock";
    }
    else if(computerChoice === 1){
        return "Paper";
    }
    else{ 
        return "Scissors";
    }
}

function getEmoji(choice){
    if(choice === "Rock"){
        return "✊";
    }
    else if(choice === "Paper"){
        return "🤚";
    }
    else {
        return "✌️";
    }
}
