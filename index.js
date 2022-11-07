function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1)

    if (computerChoice === 1) {
        return 'Rock'
    } else if (computerChoice === 2) {
        return 'Paper'
    } else if (computerChoice === 3) {
        return 'Scissors'
    } else {
        return 'Unknown Error!'
    }
}


let playerSelection = 'paper';

function playRound(playerSelection, computerChoice) {

    playerSelection = playerSelection.toLowerCase();

    if ((computerChoice === 'Rock' && playerSelection === 'scissors') ||
        (computerChoice === 'Paper' && playerSelection === 'rock') ||
        (computerChoice === 'Scissors' && playerSelection === 'paper')
    ) {
        playerSelection = (playerSelection.substr(0, 1)).toUpperCase() + playerSelection.slice(1);
        return `You Lose! ${computerChoice} beats ${playerSelection}`
    } else if ((playerSelection === 'rock' && computerChoice === 'Scissors') ||
    (playerSelection === 'paper' && computerChoice === 'Rock') ||
    (playerSelection === 'scissors' && computerChoice === 'Paper')
    ) {
        playerSelection = (playerSelection.substr(0, 1)).toUpperCase() + playerSelection.slice(1);

        return `You Win! ${playerSelection} beats ${computerChoice}`
    } else {
        return 'Tie!'
    }
}

console.log(playRound(playerSelection, getComputerChoice()));