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
        return 0
    } else if ((playerSelection === 'rock' && computerChoice === 'Scissors') ||
    (playerSelection === 'paper' && computerChoice === 'Rock') ||
    (playerSelection === 'scissors' && computerChoice === 'Paper')
    ) {
        return 1
    } else {
        return 2
    }
}

function game() {

    let playerWins = 0;
    let computerWins = 0;
    
    for(let i = 0; i < 5; i++) {

        let playerSelection = prompt(`Round ${i + 1}. What shall it be?`, '')

        if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
           
        } else {
            for(let j = 0; j < 1; j = j) {
                playerSelection = prompt(`Please make a valid selection! Rock, paper, or scissors!`, '')

                if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
                    j++;  
            } else {
               
            }
        }
        }

        let computerChoice = getComputerChoice();

        if (playRound(playerSelection, computerChoice) === 1) {
            playerWins++;
            playerSelection = (playerSelection.substring(0, 1)).toUpperCase() + playerSelection.slice(1);
            alert(`You Win! ${playerSelection} beats ${computerChoice}`)
        } else if (playRound(playerSelection, computerChoice) === 0) {
            computerWins++;
            playerSelection = (playerSelection.substring(0, 1)).toUpperCase() + playerSelection.slice(1);
            alert(`You Lose! ${computerChoice} beats ${playerSelection}`)
        } else if (playRound(playerSelection, computerChoice) === 2) {
            alert('Tie!')
        } else {
            alert(playRound)
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