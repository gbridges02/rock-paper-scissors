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

function getHumanChoice() {
    humanChoice = prompt("Time to play Rock Paper Scissors! Make your decision now: ");
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock"){
        return "Rock";
    }
    else if(humanChoice === "paper"){
        return "Paper";
    }
    else if(humanChoice === "scissors"){
        return "Scissors";
    }
    else {
        return "That's not a valid answer!";
    }
}

console.log(getHumanChoice());
console.log(getComputerChoice());