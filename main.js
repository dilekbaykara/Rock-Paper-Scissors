
//Score Start//
let playerScore = 0;
let computerScore = 0;

//Win Lose Messages//
let playerWinRound = "You won this round!";
let computerWinRound = "You lost this round!";
let draw = "Draw, play again.";
let playerWins = "You won the game!";
let computerWins = "You lost the game!";

//Player Selection//

//Computer Play with array//
function computerPlay() {
  let weapons = [`rock`, `paper`, `scissors`];
  let computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
  return computerSelection;
}

//Play Round//
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors")
    return playerWinRound + " Your score is: " + playerScore++;
  if (playerSelection === "scissors" && computerSelection === "rock")
    return computerWinRound + " Computer score is: " + computerScore++;
  if (playerSelection === "rock" && computerSelection === "rock") return draw;
  if (playerSelection === "scissors" && computerSelection === "scissors")
    return draw;
  if (playerSelection === "paper" && computerSelection === "rock")
    return playerWinRound +  " Your score is: " + playerScore++;
  if (playerSelection === "rock" && computerSelection === "paper")
    return computerWinRound +  " Computer score is: "  + computerScore++;
  if (playerSelection === "paper" && computerSelection === "paper") return draw;
  if (playerSelection === "scissors" && computerSelection === "paper")
    return playerWinRound + " Your score is: " + playerScore++;
  if (playerSelection === "paper" && computerSelection === "scissors")
    return computerWinRound +  " Computer score is: " + computerScore++;
}


/* //Function Game//
function game() {
for (let i = 0; i < 5; i++) {
  let playerSelection = window.prompt("Choose your weapon").toLowerCase(5);
  const computerSelection = computerPlay(5);
  console.log(playRound(playerSelection, computerSelection));
  if (playerScore <5 && computerScore <5) {
      game();
    } if (playerScore === 5 && computerScore <= 5) return playerWins;
  else return computerWins; */