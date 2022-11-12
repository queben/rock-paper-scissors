let round = 1;
let playerWins = 0;
let computerWins = 0;
let para = document.querySelector('#round')
const buttons = document.querySelectorAll('img')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.getAttribute('id'), getComputerChoice())
    })
})

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

function game(playerSelection, computerChoice) {

    para.innerText = '';

    if(round >= 5) {
        if (playerWins > computerWins) {
            para.innerText = `Congratulations! You've won the game!
            
            Player Wins: ${playerWins}\nComputer Wins: ${computerWins}`
            return 
        } else if (playerWins < computerWins) {
            para.innerText = `That's unfortunate! You've lost the game!
            
            Player Wins: ${playerWins}\nComputer Wins: ${computerWins}`
            return 
        } else {
            para.innerText = 'You both tied!';
            return
        }
    }


    if (playRound(playerSelection, computerChoice) === 1) {
        playerWins++;
        playerSelection = (playerSelection.substring(0, 1)).toUpperCase() + playerSelection.slice(1);
        para.innerText = `You won round ${round}! ${playerSelection} beats ${computerChoice}`
        round++
    } else if (playRound(playerSelection, computerChoice) === 0) {
        computerWins++;
        playerSelection = (playerSelection.substring(0, 1)).toUpperCase() + playerSelection.slice(1);
        para.innerText = `You won round ${round}! ${playerSelection} beats ${computerChoice}`;
        round++
    } else if (playRound(playerSelection, computerChoice) === 2) {
        para.innerText = 'Tie!'
        round++
    } else {
        para.innerText = 'An Error has occurred!';
    }

}