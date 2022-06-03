
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
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");
const playerSign = document.getElementById("playerSign");
const scoreMessage = document.getElementById("scoreMessage");
const pScore = document.getElementById("playerScore");
const cScore = document.getElementById("computerScore");

rock.addEventListener('click', function() {
  playerSign.innerHTML = '<img src="./images/Rock.png" alt="Rock"/>';
  playRound('rock', getRandomChoice());
});

paper.addEventListener('click', function() {
  playerSign.innerHTML = '<img src="./images/Paper.png" alt="Paper"/>';
  playRound('paper', getRandomChoice());
});

scissors.addEventListener('click', function() {
  playerSign.innerHTML = '<img src="./images/Scissors.png" alt="Scissors"/>';
  playRound('scissors', getRandomChoice());
});

//Play round function//

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  }

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    pScore.dataset.score = parseInt(pScore.dataset.score) + 1;
    pScore.textContent = "PLAYER:" + pScore.dataset.score;
    roundWinner = 'player';
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    cScore.dataset.score = parseInt(cScore.dataset.score) + 1;
    cScore.textContent = "COMPUTER:" + cScore.dataset.score;
    roundWinner = 'computer';
  }
  if (pScore.dataset.score === 5 || cScore.dataset.score === 5) {
openEndgameModal();
  }
  console.log("Computer: " + computerSelection + ", Player: " + playerSelection + ", Winner: " + roundWinner + ".");
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function getRandomChoice() {
  let computerSign = document.getElementById("computerSign");
  let rndChoice = Math.floor(Math.random() * 3);
  var txtChoice;
  switch (rndChoice) {
    case 0:
      computerSign.innerHTML = '<img src="./images/Rock.png" alt="Rock"/>';
      txtChoice = 'rock';
      break;
    case 1:
      computerSign.innerHTML = '<img src="./images/Paper.png" alt="Paper"/>';
      txtChoice = 'paper';
      break;
    case 2:
      computerSign.innerHTML = '<img src="./images/Scissors.png" alt="Scissors"/>';
      txtChoice = 'scissors';
      break;
  }
  return txtChoice;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  var txtMessage = '';
  if (winner === 'player') {
    scoreMessage.textContent = 'You win! ' + flCapital(playerSelection) + ' beats ' + flCapital(computerSelection) + '!';
    return;
  }
  if (winner === 'computer') {
    scoreMessage.textContent = 'You lose! ' + flCapital(computerSelection) + ' beats ' + flCapital(playerSelection) + '!';
    return;
  }
  scoreMessage.textContent = 'Your selection: ' + flCapital(playerSelection) + ' ties with ' + flCapital(computerSelection) + '!';
}

function isGameOver() {
  return pScore === 5 || cScore === 5;
}

function openEndgameModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
}

//Restart Game Function//
function restartGame() {
pScore = 0;
cScore = 0;
scoreMessage.textContent = 'FIRST TO SCORE 5 POINTS WINS THE GAME';
pScore.dataset.score = '0';
cScore.dataset.score = '0';
playerSign.innerHTML = '❔';
computerSign.innerHTML = '❔';
}

function flCapital(str) {
  if (!str) return;
  return str.match("^[a-z]") ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}