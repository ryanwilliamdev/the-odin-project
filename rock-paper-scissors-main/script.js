const CHOICES = ["Rock", "Paper", "Scissors"];

// create function called getComputerChoice that randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * CHOICES.length);
  return (computerSelection = CHOICES[randomIndex]);
}

// create function for playerSelection
function getPlayerChoice() {
  let playerChoiceUncapped = prompt("Choose Rock, Paper, or Scissors");
  return (playerSelection = playerChoiceUncapped.charAt(0).toUpperCase() + playerChoiceUncapped.slice(1).toLowerCase());
}

// create function that plays a single round of RPS, function should take two parameters (playerSelection) and (computerSelection)
// and then return a string that declares the winner of the round.
// ie "You Lose! Paper beats Rock"
// let computerSelection = getComputerChoice(computerChoice);
// let playerSelection = getPlayerChoice();
// getComputerChoice();
// getPlayerChoice();

let playerScore = 0;
let computerScore = 0;
function playRound() {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    alert("You Lose! Paper beats Rock!");
    computerScore++;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    alert("You Win! Rock beats Scissors!");
    playerScore++;
    // getComputerChoice();
    // getPlayerChoice();
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    alert("It is a tie! You both chose Rock!");
    // getComputerChoice();
    // getPlayerChoice();
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    alert("You Lose! Scissors beat Paper!");
    computerScore++;
    // getComputerChoice();
    // getPlayerChoice();
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    alert("You Win! Paper beats Rock!");
    playerScore++;
    // getComputerChoice();
    // getPlayerChoice();
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    alert("It is a tie! You both chose Paper!");
    // getComputerChoice();
    // getPlayerChoice();
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    alert("You Lose! Rock beats Scissors!");
    computerScore++;
    // getComputerChoice();
    // getPlayerChoice();
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    alert("You Win! Scissors beat Paper!");
    playerScore++;
    // getComputerChoice();
    // getPlayerChoice();
  } else {
    alert("It is a tie! You both chose Scissors!");
    // getComputerChoice();
    // getPlayerChoice();
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    getComputerChoice();
    getPlayerChoice();
    playRound();
    //   put updated scoreboard here somewhere
  }
  alert(
    "Final Score: " + "Computer - " + computerScore + "  Player - " + playerScore
  );
}

game();
