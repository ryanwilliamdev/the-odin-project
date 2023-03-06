const CHOICES = ['Rock', 'Paper', 'Scissors'];


// create function called getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*CHOICES.length);
    let computerChoice = CHOICES[randomIndex];
    return computerChoice;

}

// create function for playerSelection
function getPlayerChoice() {
    let playerChoiceUncapped = prompt('Choose Rock, Paper, or Scissors');
    let playerChoice = playerChoiceUncapped.charAt(0).toUpperCase() + playerChoiceUncapped.slice(1).toLowerCase();
    return playerChoice;
}


// create function that plays a single round of RPS, function should take two parameters (playerSelection) and (computerSelection)
// and then return a string that declares the winner of the round.
// ie "You Lose! Paper beats Rock"
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        alert('You Lose! Paper beats Rock!');
        computerScore++;
        getComputerChoice();
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        alert('You Win! Rock beats Scissors!');
        playerScore++;
        getComputerChoice();
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        alert('It is a tie! You both chose Rock!');
        getComputerChoice();
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        alert('You Lose! Scissors beat Paper!');
        computerScore++;
        getComputerChoice();
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        alert('You Win! Paper beats Rock!');
        playerScore++;
        getComputerChoice();
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        alert('It is a tie! You both chose Paper!');
        getComputerChoice();
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        alert('You Lose! Rock beats Scissors!');
        computerScore++;
        getComputerChoice();
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        alert('You Win! Scissors beat Paper!');
        playerScore++;
        getComputerChoice();
    } else {
        alert('It is a tie! You both chose Scissors!');
        getComputerChoice();
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        if (playerScore < 5 || computerScore < 5) {

            playRound(playerSelection, computerSelection);
        }
        console.log(computerSelection);
        console.log(playerSelection);
        console.log(computerScore);
        console.log(playerScore);
     }
}


game();
// playRound(playerSelection, computerSelection);

