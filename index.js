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

function playRound(playerSelection, computerChoice) {

    playerSelection = playerSelection.toLowerCase();

    if ((computerChoice === 'Rock' && playerSelection === 'scissors') ||
        (computerChoice === 'Paper' && playerSelection === 'rock') ||
        (computerChoice === 'Scissors' && playerSelection === 'paper')
    ) {
        return 'lose'
    } else if ((playerSelection === 'rock' && computerChoice === 'Scissors') ||
    (playerSelection === 'paper' && computerChoice === 'Rock') ||
    (playerSelection === 'scissors' && computerChoice === 'Paper')
    ) {
        return 'win'
    } else {
        return 'Tie!'
    }
}

function game() {

    let playerWins = 0;
    let computerWins = 0;
    
    for(let i = 0; i < 5; i++) {

        let playerSelection = prompt(`Round ${i + 1}. What shall it be?`, '')
        let computerChoice = getComputerChoice();

        if (playRound(playerSelection, computerChoice) === 'win') {
            playerWins++;
            playerSelection = (playerSelection.substring(0, 1)).toUpperCase() + playerSelection.slice(1);
            alert(`You Win! ${playerSelection} beats ${computerChoice}`)
        } else if (playRound(playerSelection, computerChoice) === 'lose') {
            computerWins++;
            playerSelection = (playerSelection.substring(0, 1)).toUpperCase() + playerSelection.slice(1);
            alert(`You Lose! ${computerChoice} beats ${playerSelection}`)
        } else if (playRound(playerSelection, computerChoice) === 'Tie') {
            alert('Tie!')
        } else {
            alert('Unknown error has occurred!')
        }

    }

    if (playerWins > computerWins) {
        console.log(
            playerWins, computerWins
        )
        return `Congratulations! You've won the game!`
    } else if (playerWins < computerWins) {
        console.log(
            `Player Wins: ${playerWins}`, `Computer Wins: ${computerWins}`
        )
        return `That's unfortunate! You've lost the game!`
    } else {
        return 'You both tied!'
    }
}

console.log(game())