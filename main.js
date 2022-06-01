
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
const computerScorePoints = document.getElementsByClassName('computerScore')
const playerScorePoints = document.getElementsByClassName('playerScore')

//Game Over Function//
function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

//Button Click Event Listener to Display Choice//
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
  if (playerSelection === computerSelection) {
    roundWinner = 'tie'
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++
    roundWinner = 'player'
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++
    roundWinner = 'computer'
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

  function updateScore() {
    if (roundWinner === 'tie') {
      scoreMessage.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreMessage.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      scoreMessage.textContent = 'You lost!'
    }

//Display choices for computer selection//

computerSign.getElementsByClassName('?')[0]
      computerSign.innerHTML = '<img src="./images/Paper.png" alt="Paper"/>'

//Random choice for Computer selection//
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
//Computer selection function//
const computerSelection = getRandomChoice()
playRound(playerSelection, computerSelection)
updateChoices(playerSelection, computerSelection)
updateScore()

if (isGameOver()) {
  openEndgameModal()
  setFinalMessage()
}
}

function updateChoices(playerSelection, computerSelection) {
switch (playerSelection) {
  case 'rock':
    playerSign.textContent = ''
    break
  case 'paper':
    playerSign.textContent = ''
    break
  case 'scissors':
    playerSign.textContent = ''
    break
}

switch (computerSelection) {
  case 'rock':
    computerSign.getElementsByClassName('?')[0]
    computerSign.innerHTML = '<img src="./images/Rock.png" alt="Rock"/>'
    break
  case 'paper':
    computerSign.getElementsByClassName('?')[0]
    computerSign.innerHTML = '<img src="./images/Paper.png" alt="Paper"/>'
    break
  case 'scissors':
    computerSign.getElementsByClassName('?')[0]
    computerSign.innerHTML = '<img src="./images/Scissors.png" alt="Scissors"/>'
    break
}
}

//Update Score Message//

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`
    return
  }
  if (winner === 'computer') {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`
    return
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`
}