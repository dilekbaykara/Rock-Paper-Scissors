
//Score Start//
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

//Win Lose Messages//
let playerWinRound = "You won this round!";
let computerWinRound = "You lost this round!";
let draw = "Draw, play again.";
let playerWins = "You won the game!";
let computerWins = "You lost the game!";

//Define Buttons//
var rock = document.getElementById("rockBtn")
var paper = document.getElementById("paperBtn")
var scissors = document.getElementById("scissorsBtn")

//Button Click Event Listener//

rock.addEventListener('click', function() {
  console.log('this is working');
});

paper.addEventListener('click', function() {
    console.log('the js is working');
});

scissors.addEventListener('click', function() {
    console.log('this js is working');
});

//Play Round//
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors")
      playerScore++;
    if (playerSelection === "scissors" && computerSelection === "rock")
     computerScore++;
    if (playerSelection === "rock" && computerSelection === "rock") 
      draw;
    if (playerSelection === "scissors" && computerSelection === "scissors")
      draw;
    if (playerSelection === "paper" && computerSelection === "rock")
      playerScore++;
    if (playerSelection === "rock" && computerSelection === "paper")
      computerScore++;
    if (playerSelection === "paper" && computerSelection === "paper") 
    draw;
    if (playerSelection === "scissors" && computerSelection === "paper")
      playerScore++;
    if (playerSelection === "paper" && computerSelection === "scissors")
      computerScore++;
  }

