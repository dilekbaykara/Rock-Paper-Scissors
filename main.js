
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
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')

//Button Click Event Listener//

rock.addEventListener('click', function() {
  playerSign.getElementsByClassName('?')[0]
  playerSign.innerHTML = '<img src="./images/Rock.png" alt="Rock"/>'
});

paper.addEventListener('click', function() {
  playerSign.getElementsByClassName('?')[0]
  playerSign.innerHTML = '<img src="./images/Paper.png" alt="Paper"/>'
});

scissors.addEventListener('click', function() {
  playerSign.getElementsByClassName('?')[0]
  playerSign.innerHTML = '<img src="./images/Scissors.png" alt="Scissors"/>'
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

  function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }

  function updateScore() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!'
    }

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

const computerSelection = getRandomChoice()
playRound(playerSelection, computerSelection)
updateChoices(playerSelection, computerSelection)
updateScore()


    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
  }
